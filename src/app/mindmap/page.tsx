"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MindMapViewer } from "@/components/MindMapViewer";
import {
  NoQualificationPrompt,
  SelectedQualificationBanner,
  readStoredExamId,
} from "@/components/SelectedQualificationBanner";
import { FINANCIAL_EXAMS, examHasMultipleLevels, getDefaultLevelId, getExamById } from "@/lib/exams";
import type { MindmapPayload } from "@/lib/mindmaps/types";

type ExamOption = {
  id: string;
  name: string;
  fullName: string;
  logo: string;
  levelLabel: string;
  levels: { id: string; name: string }[];
};

function formatReviewed(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function MindmapPage() {
  const exams: ExamOption[] = useMemo(
    () =>
      FINANCIAL_EXAMS.map((exam) => ({
        id: exam.id,
        name: exam.name,
        fullName: exam.fullName,
        logo: exam.logo,
        levelLabel: exam.levelLabel,
        levels: exam.levels.map((level) => ({ id: level.id, name: level.name })),
      })),
    []
  );

  const [ready, setReady] = useState(false);
  const [hasSelection, setHasSelection] = useState(false);
  const [examId, setExamId] = useState(exams[0]?.id || "cfa");
  const [levelId, setLevelId] = useState(getDefaultLevelId(exams[0]?.id || "cfa"));
  const [payload, setPayload] = useState<MindmapPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const selectedExam = exams.find((exam) => exam.id === examId) || exams[0];
  const multiLevel = examHasMultipleLevels(examId);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      let preferred: string | null = readStoredExamId();
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        const data = await res.json();
        if (data.user?.examId && getExamById(data.user.examId)) {
          preferred = data.user.examId;
        }
      } catch {
        /* keep local storage preference */
      }
      if (cancelled) return;
      if (preferred) {
        setExamId(preferred);
        setLevelId(getDefaultLevelId(preferred));
        setHasSelection(true);
      } else {
        setHasSelection(false);
      }
      setReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const defaults = getDefaultLevelId(examId);
    const stillValid = selectedExam?.levels.some((level) => level.id === levelId);
    if (!stillValid) setLevelId(defaults);
  }, [examId, levelId, selectedExam]);

  useEffect(() => {
    if (!ready || !hasSelection) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch(`/api/mindmap?examId=${encodeURIComponent(examId)}&levelId=${encodeURIComponent(levelId)}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Could not load mind map.");
        if (!cancelled) setPayload(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setPayload(null);
          setError(err instanceof Error ? err.message : "Could not load mind map.");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [examId, hasSelection, levelId, ready]);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Study map</p>
          <h1 className="font-display mt-1 text-3xl font-semibold text-navy sm:text-4xl">
            Qualification mind maps
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
            Browse syllabus modules and topic areas for CFA, FRM, ACCA, CPA and other finance exams.
            The map starts fully expanded — fold nodes, zoom, and pan to revise the big picture before
            you drill into Study Path courseware.
          </p>
        </div>

        {!ready ? (
          <p className="text-sm text-muted">Loading your qualification…</p>
        ) : !hasSelection ? (
          <NoQualificationPrompt />
        ) : (
          <>
            <SelectedQualificationBanner
              examId={examId}
              levelControls={
                multiLevel && selectedExam ? (
                  <label className="admin-label block">
                    {selectedExam.levelLabel}
                    <select
                      className="admin-input"
                      value={levelId}
                      onChange={(e) => setLevelId(e.target.value)}
                    >
                      {selectedExam.levels.map((level) => (
                        <option key={level.id} value={level.id}>
                          {level.name}
                        </option>
                      ))}
                    </select>
                  </label>
                ) : undefined
              }
            />

            {payload && (
              <section className="mb-5 grid gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm sm:grid-cols-[1.2fr_1fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Map refreshed
                  </p>
                  <p className="mt-1 text-lg font-semibold text-navy">
                    {formatReviewed(payload.meta.refreshedAt)}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{payload.meta.syllabusVersion}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {payload.meta.relevanceNote}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Good for upcoming exams
                  </p>
                  {payload.meta.upcomingExamWindows.length ? (
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {payload.meta.upcomingExamWindows.map((window) => (
                        <li
                          key={window}
                          className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800"
                        >
                          {window}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm text-muted">
                      Check the awarding body for the next window.
                    </p>
                  )}
                  <p className="mt-3 text-xs text-muted">
                    {payload.meta.moduleCount} modules · {payload.meta.topicCount} topics
                    {payload.meta.officialSourceUrl ? (
                      <>
                        {" · "}
                        <a
                          href={payload.meta.officialSourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-navy underline underline-offset-2"
                        >
                          Official source
                        </a>
                      </>
                    ) : null}
                  </p>
                </div>
              </section>
            )}

            {loading && (
              <div className="rounded-2xl border border-line bg-white p-10 text-center text-sm text-muted">
                Building mind map…
              </div>
            )}
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
                {error}
              </div>
            )}
            {!loading && !error && payload && <MindMapViewer root={payload.root} />}

            <p className="mt-6 text-sm text-muted">
              Ready to study a branch in depth? Open{" "}
              <Link href="/study" className="font-semibold text-navy underline underline-offset-2">
                Study Path
              </Link>{" "}
              for lessons, scoring blueprints, and practice.
            </p>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
