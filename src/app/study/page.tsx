"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CoursewareModal } from "@/components/CoursewareModal";
import {
  FINANCIAL_EXAMS,
  examHasMultipleLevels,
  getDefaultLevelId,
  getExamById,
} from "@/lib/exams";

type User = { id: string; email: string; name: string; examId: string | null } | null;

type Syllabus = {
  examId: string;
  levelId: string;
  levelName: string;
  versionLabel: string;
  overview: string;
  journey: string[];
  modules: {
    id: string;
    title: string;
    weight: number;
    hours: number;
    summary: string;
    hasCourseware?: boolean;
    lessonCount?: number;
    syllabusCurrency?: {
      reviewedAt: string;
      syllabusVersion: string;
      upcomingExamWindows: string[];
      relevance: "current" | "current-check-variables" | "verify-before-booking";
      relevanceNote: string;
      officialSourceUrl: string;
    };
  }[];
};

type Plan = {
  totalHoursNeeded: number;
  availableHours: number;
  intensity: string;
  feasible: boolean;
  strategyTitle: string;
  strategySummary: string;
  weeklyFocus: string[];
  orderedModules: { moduleId: string; title: string; weight: number; suggestedHours: number; priority: number }[];
  tips: string[];
  levelId: string;
  levelName: string;
};

type Portfolio = {
  examId: string;
  levelId?: string;
  levelName?: string;
  hoursPerDay: number;
  daysUntilExam: number;
  examDate: string;
  percentComplete: number;
  recommendation: Plan;
  modules: {
    moduleId: string;
    title: string;
    weight: number;
    suggestedHours: number;
    completedHours: number;
    done: boolean;
  }[];
};

type Step = "syllabus" | "inputs" | "strategy" | "portfolio";

async function fetchInitialStudyPath() {
  const me = await fetch("/api/auth/me").then((response) => response.json());
  if (!me.user) return { user: null, portfolio: null };
  const existing = await fetch("/api/study").then((response) => response.json());
  return { user: me.user, portfolio: existing.portfolio || null };
}

async function fetchSyllabus(nextExamId: string, nextLevelId: string): Promise<Syllabus> {
  const response = await fetch(
    `/api/study?examId=${encodeURIComponent(nextExamId)}&levelId=${encodeURIComponent(nextLevelId)}`
  );
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Failed to load syllabus.");
  return data.syllabus;
}

function calculateDaysUntilExam(date: string) {
  if (!date) return 90;
  const diff = Math.ceil((new Date(date).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  return Math.max(1, diff);
}

export default function StudyPathPage() {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);
  const [examId, setExamId] = useState("cfa");
  const [levelId, setLevelId] = useState("l1");
  const [syllabus, setSyllabus] = useState<Syllabus | null>(null);
  const [hoursPerDay, setHoursPerDay] = useState(2);
  const [examDate, setExamDate] = useState("");
  const [daysUntilExam, setDaysUntilExam] = useState(90);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [step, setStep] = useState<Step>("syllabus");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [activeCourseware, setActiveCourseware] = useState<{
    moduleId: string;
    title: string;
  } | null>(null);
  const router = useRouter();

  const selectedExam = useMemo(() => getExamById(examId), [examId]);
  const coursewareLevelId = portfolio?.levelId || syllabus?.levelId || levelId;

  function askTutorAbout(topic: string) {
    setActiveCourseware(null);
    try {
      sessionStorage.setItem(
        "askfinbot_prefill",
        JSON.stringify({ examId, question: `Please explain in exam-focused detail: ${topic}` })
      );
    } catch {
      /* ignore storage errors */
    }
    router.push("/");
  }
  const showLevelPicker = examHasMultipleLevels(examId);

  useEffect(() => {
    let active = true;
    void fetchInitialStudyPath()
      .then(({ user: nextUser, portfolio: existingPortfolio }) => {
        if (!active) return;
        setUser(nextUser);
        if (!nextUser) return;
        if (nextUser.examId) {
          setExamId(nextUser.examId);
          setLevelId(getDefaultLevelId(nextUser.examId));
        }
        if (existingPortfolio) {
          setPortfolio(existingPortfolio);
          setExamId(existingPortfolio.examId);
          setLevelId(
            existingPortfolio.levelId || getDefaultLevelId(existingPortfolio.examId)
          );
          setPlan(existingPortfolio.recommendation);
          setHoursPerDay(existingPortfolio.hoursPerDay);
          setExamDate(existingPortfolio.examDate);
          setDaysUntilExam(calculateDaysUntilExam(existingPortfolio.examDate));
          setStep("portfolio");
        } else {
          setBusy(true);
        }
      })
      .catch(() => {
        if (active) setError("Could not load study path.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const userId = user?.id;
  const hasPortfolio = portfolio !== null;

  useEffect(() => {
    if (!userId || hasPortfolio) return;
    let active = true;
    void fetchSyllabus(examId, levelId)
      .then((nextSyllabus) => {
        if (!active) return;
        setSyllabus(nextSyllabus);
        setPlan(null);
        setStep("syllabus");
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : "Failed to load syllabus.");
      })
      .finally(() => {
        if (active) setBusy(false);
      });
    return () => {
      active = false;
    };
  }, [examId, hasPortfolio, levelId, userId]);

  function onExamChange(nextExamId: string) {
    setBusy(true);
    setError(null);
    setExamId(nextExamId);
    setLevelId(getDefaultLevelId(nextExamId));
    setPlan(null);
  }

  async function previewPlan(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/study", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "preview",
          examId,
          levelId,
          hoursPerDay,
          daysUntilExam,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not build plan.");
      setPlan(data.plan);
      setStep("strategy");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Plan failed.");
    } finally {
      setBusy(false);
    }
  }

  async function acknowledgePlan() {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/study", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "acknowledge",
          examId,
          levelId,
          hoursPerDay,
          daysUntilExam,
          examDate: examDate || new Date(Date.now() + daysUntilExam * 86400000).toISOString().slice(0, 10),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not create portfolio.");
      setPortfolio(data.portfolio);
      setStep("portfolio");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Acknowledge failed.");
    } finally {
      setBusy(false);
    }
  }

  async function toggleModule(moduleId: string, done: boolean, suggestedHours: number) {
    setBusy(true);
    try {
      const res = await fetch("/api/study", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          moduleId,
          done,
          completedHours: done ? suggestedHours : 0,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Update failed.");
      setPortfolio(data.portfolio);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed.");
    } finally {
      setBusy(false);
    }
  }

  async function resetPortfolio() {
    if (!confirm("Reset your study portfolio and build a new plan?")) return;
    await fetch("/api/study", { method: "DELETE" });
    setBusy(true);
    setError(null);
    setPortfolio(null);
    setPlan(null);
    setStep("syllabus");
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-4xl flex-1 px-4 py-16 text-center text-muted">Loading Study Path…</main>
        <Footer />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-xl flex-1 px-4 py-16 text-center">
          <h1 className="font-display text-3xl font-semibold text-navy">Study Path</h1>
          <p className="mt-3 text-sm text-muted">
            Full syllabus roadmaps, personalized strategies, and progress tracking require an account so we can save your portfolio securely.
          </p>
          <Link href="/profile" className="btn-primary mt-6 inline-flex">
            Log in to continue
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-semibold text-navy">Study Path</h1>
            <p className="mt-2 text-sm text-muted">
              Syllabus → roadmap → personal strategy → tracked portfolio.
            </p>
          </div>
          {portfolio && (
            <button type="button" className="btn-secondary" onClick={() => void resetPortfolio()}>
              Rebuild plan
            </button>
          )}
        </div>

        {error && (
          <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
        )}

        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <label className="admin-label block">
            Qualification
            <select
              className="admin-input"
              value={examId}
              disabled={!!portfolio || busy}
              onChange={(e) => onExamChange(e.target.value)}
            >
              {FINANCIAL_EXAMS.map((exam) => (
                <option key={exam.id} value={exam.id}>
                  {exam.name} — {exam.fullName}
                </option>
              ))}
            </select>
          </label>

          {showLevelPicker && (
            <label className="admin-label block">
              {selectedExam?.levelLabel || "Level"}
              <select
                className="admin-input"
                value={levelId}
                disabled={!!portfolio || busy}
                onChange={(e) => {
                  setBusy(true);
                  setError(null);
                  setLevelId(e.target.value);
                  setPlan(null);
                }}
              >
                {selectedExam?.levels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>

        {step !== "portfolio" && syllabus && (
          <section className="surface-card mb-6 space-y-4 p-6">
            <div>
              <h2 className="text-lg font-semibold text-navy">Latest syllabus outline</h2>
              <p className="text-xs text-muted">{syllabus.versionLabel}</p>
              <p className="mt-2 text-sm text-slate-700">{syllabus.overview}</p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold text-navy">Learning journey</h3>
              <ol className="space-y-2 text-sm text-slate-700">
                {syllabus.journey.map((item, idx) => (
                  <li key={item} className="flex gap-2">
                    <span className="font-semibold text-navy">{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold text-navy">
                Module breakdown · {syllabus.levelName}
              </h3>
              <div className="space-y-2">
                {syllabus.modules.map((m) => (
                  <div key={m.id} className="rounded-lg border border-line px-3 py-2 text-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <strong className="text-navy">{m.title}</strong>
                      <span className="text-xs text-muted">
                        weight {m.weight}/10 · ~{m.hours}h
                        {m.lessonCount ? ` · ${m.lessonCount} lessons` : ""}
                      </span>
                    </div>
                    <p className="mt-1 text-muted">{m.summary}</p>
                    {m.syllabusCurrency && (
                      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px]">
                        <span
                          className={`rounded-full px-2 py-0.5 font-semibold ${
                            m.syllabusCurrency.relevance === "current"
                              ? "bg-green-50 text-green-800"
                              : m.syllabusCurrency.relevance === "current-check-variables"
                                ? "bg-amber-50 text-amber-800"
                                : "bg-red-50 text-red-800"
                          }`}
                        >
                          {m.syllabusCurrency.relevance === "current"
                            ? "Current for upcoming exam"
                            : m.syllabusCurrency.relevance === "current-check-variables"
                              ? "Current · verify variable rules"
                              : "Verify against registration"}
                        </span>
                        <span className="text-muted">
                          Refreshed {m.syllabusCurrency.reviewedAt} ·{" "}
                          {m.syllabusCurrency.upcomingExamWindows.join("; ")}
                        </span>
                      </div>
                    )}
                    {m.hasCourseware && (
                      <button
                        type="button"
                        className="mt-2 text-xs font-semibold text-navy underline underline-offset-2"
                        onClick={() =>
                          setActiveCourseware({ moduleId: m.id, title: m.title })
                        }
                      >
                        Open courseware →
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {step === "syllabus" && (
              <button type="button" className="admin-btn" onClick={() => setStep("inputs")} disabled={busy}>
                Continue — set my plan
              </button>
            )}
          </section>
        )}

        {(step === "inputs" || step === "strategy") && !portfolio && (
          <section className="surface-card mb-6 p-6">
            <h2 className="mb-3 text-lg font-semibold text-navy">Your capacity & exam date</h2>
            <form onSubmit={previewPlan} className="grid gap-3 sm:grid-cols-2">
              <label className="admin-label">
                Hours you can study per day
                <input
                  className="admin-input"
                  type="number"
                  min={0.5}
                  max={12}
                  step={0.5}
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  required
                />
              </label>
              <label className="admin-label">
                Exam date
                <input
                  className="admin-input"
                  type="date"
                  value={examDate}
                  onChange={(e) => {
                    setExamDate(e.target.value);
                    setDaysUntilExam(calculateDaysUntilExam(e.target.value));
                  }}
                  required
                />
              </label>
              <p className="sm:col-span-2 text-sm text-muted">
                Days remaining: <strong>{daysUntilExam}</strong>
                {syllabus && (
                  <>
                    {" "}
                    · Planning for <strong>{syllabus.levelName}</strong>
                  </>
                )}
              </p>
              <button type="submit" className="admin-btn sm:col-span-2" disabled={busy}>
                {busy ? "Building…" : "Recommend best strategy"}
              </button>
            </form>
          </section>
        )}

        {step === "strategy" && plan && !portfolio && (
          <section className="surface-card mb-6 space-y-4 p-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">
                {plan.intensity} plan · {plan.levelName}
              </p>
              <h2 className="font-display text-2xl font-semibold text-navy">{plan.strategyTitle}</h2>
              <p className="mt-2 text-sm text-slate-700">{plan.strategySummary}</p>
              <p className="mt-2 text-sm text-muted">
                Needed ~{plan.totalHoursNeeded}h · Available ~{plan.availableHours}h
                {!plan.feasible && " · This schedule is aggressive; consider more daily hours or a later sitting."}
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold text-navy">Score-optimized module order</h3>
              <ol className="space-y-2 text-sm">
                {plan.orderedModules.map((m) => (
                  <li key={m.moduleId} className="rounded-lg border border-line px-3 py-2">
                    <strong>
                      #{m.priority} {m.title}
                    </strong>
                    <span className="text-muted">
                      {" "}
                      · weight {m.weight} · {m.suggestedHours}h suggested
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {plan.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>

            <button type="button" className="admin-btn" onClick={() => void acknowledgePlan()} disabled={busy}>
              {busy ? "Saving…" : "I accept this roadmap — create my study portfolio"}
            </button>
          </section>
        )}

        {step === "portfolio" && portfolio && (
          <section className="surface-card space-y-4 p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-navy">Study portfolio</h2>
                <p className="text-sm text-muted">
                  {FINANCIAL_EXAMS.find((e) => e.id === portfolio.examId)?.name}
                  {portfolio.levelName ? ` · ${portfolio.levelName}` : ""} · exam {portfolio.examDate} ·{" "}
                  {portfolio.hoursPerDay}h/day
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted">Progress</p>
                <p className="font-display text-3xl font-semibold text-navy">{portfolio.percentComplete}%</p>
              </div>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full bg-navy transition-all" style={{ width: `${portfolio.percentComplete}%` }} />
            </div>

            <div className="space-y-2">
              {portfolio.modules.map((m) => (
                <div
                  key={m.moduleId}
                  className="flex items-start gap-3 rounded-lg border border-line px-3 py-3 text-sm"
                >
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={m.done}
                    disabled={busy}
                    aria-label={`Mark ${m.title} complete`}
                    onChange={(e) => void toggleModule(m.moduleId, e.target.checked, m.suggestedHours)}
                  />
                  <div className="flex-1">
                    <strong className={m.done ? "text-muted line-through" : "text-navy"}>{m.title}</strong>
                    <span className="block text-xs text-muted">
                      weight {m.weight} · {m.completedHours}/{m.suggestedHours}h
                    </span>
                  </div>
                  <button
                    type="button"
                    className="shrink-0 rounded-md border border-line px-2.5 py-1 text-xs font-semibold text-navy hover:bg-slate-50"
                    onClick={() =>
                      setActiveCourseware({ moduleId: m.moduleId, title: m.title })
                    }
                  >
                    Study
                  </button>
                </div>
              ))}
            </div>

            <Link href="/" className="btn-secondary inline-flex">
              Ask AskFinBots about a weak module
            </Link>
          </section>
        )}
      </main>
      <Footer />
      {activeCourseware && (
        <CoursewareModal
          key={`${examId}:${coursewareLevelId}:${activeCourseware.moduleId}`}
          moduleId={activeCourseware.moduleId}
          examId={examId}
          levelId={coursewareLevelId}
          title={activeCourseware.title}
          onClose={() => setActiveCourseware(null)}
          onAskTutor={askTutorAbout}
        />
      )}
    </>
  );
}
