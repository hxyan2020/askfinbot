"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MindMapViewer } from "@/components/MindMapViewer";
import { ExamLogo } from "@/components/ExamLogo";
import { FINANCIAL_EXAMS, examHasMultipleLevels, getDefaultLevelId } from "@/lib/exams";
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

  const [examId, setExamId] = useState(exams[0]?.id || "cfa");
  const [levelId, setLevelId] = useState(getDefaultLevelId(exams[0]?.id || "cfa"));
  const [payload, setPayload] = useState<MindmapPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const selectedExam = exams.find((exam) => exam.id === examId) || exams[0];
  const multiLevel = examHasMultipleLevels(examId);

  useEffect(() => {
    const defaults = getDefaultLevelId(examId);
    const stillValid = selectedExam?.levels.some((level) => level.id === levelId);
    if (!stillValid) setLevelId(defaults);
  }, [examId, levelId, selectedExam]);

  useEffect(() => {
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
  }, [examId, levelId]);

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
            Browse every syllabus module, topic area, and key exam test point for your qualification.
            Expand nodes, zoom, and pan to revise the big picture before you drill into Study Path
            courseware.
          </p>
        </div>

        <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
          {exams.map((exam) => {
            const active = exam.id === examId;
            return (
              <button
                key={exam.id}
                type="button"
                onClick={() => setExamId(exam.id)}
                className={`flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 text-sm transition ${
                  active
                    ? "border-navy bg-navy text-white"
                    : "border-line bg-white text-navy hover:border-gold/60"
                }`}
              >
                <ExamLogo src={exam.logo} alt={`${exam.name} logo`} size={22} />
                <span className="font-semibold">{exam.name}</span>
              </button>
            );
          })}
        </div>

        {multiLevel && selectedExam && (
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              {selectedExam.levelLabel}
            </span>
            {selectedExam.levels.map((level) => {
              const active = level.id === levelId;
              return (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => setLevelId(level.id)}
                  className={`rounded-full border px-3 py-1.5 text-sm ${
                    active
                      ? "border-gold bg-gold/15 font-semibold text-navy"
                      : "border-line bg-white text-slate-600"
                  }`}
                >
                  {level.name}
                </button>
              );
            })}
          </div>
        )}

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
              <p className="mt-2 text-xs leading-relaxed text-muted">{payload.meta.relevanceNote}</p>
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
                <p className="mt-2 text-sm text-muted">Check the awarding body for the next window.</p>
              )}
              <p className="mt-3 text-xs text-muted">
                {payload.meta.moduleCount} modules · {payload.meta.topicCount} topics ·{" "}
                {payload.meta.testPointCount} key test points
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
      </main>
      <Footer />
    </>
  );
}
