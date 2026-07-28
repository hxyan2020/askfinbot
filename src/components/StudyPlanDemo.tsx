"use client";

import { useEffect, useRef, useState } from "react";
import { DemoWindow } from "./DemoWindow";

const EXAM_CHIPS = ["CFA", "FRM", "CPA", "ACCA"];
const CHOSEN_EXAM = "CFA";

const PLAN_MODULES = [
  { name: "Quantitative Methods", detail: "Weeks 1–3 · 12 lessons", hasCourseware: true },
  { name: "Ethics & Professional Standards", detail: "Weeks 4–5 · 9 lessons", hasCourseware: true },
  { name: "Fixed Income", detail: "Weeks 6–8 · 14 lessons", hasCourseware: true },
];

const COURSEWARE = {
  title: "Quantitative Methods",
  currency: "CFA Level I 2026 · Current for upcoming exam",
  testPoints: [
    {
      priority: "Critical",
      focus: "Time value of money and discounting cash flows",
      mustKnow: "NPV, IRR, and when they disagree on ranking projects",
    },
    {
      priority: "High",
      focus: "Hypothesis testing and confidence intervals",
      mustKnow: "Type I vs Type II error and p-value interpretation",
    },
    {
      priority: "High",
      focus: "Regression slope and R² for exam vignettes",
      mustKnow: "Read coefficient meaning and residual diagnostics quickly",
    },
  ],
  scoring: "Aim 70%+ · Answer sequence: define → apply formula → interpret result",
};

// pick exam → build plan → modules → save → open courseware → show test points → hold → reset
type Phase =
  | "picking"
  | "selected"
  | "building"
  | "plan"
  | "saved"
  | "opening"
  | "courseware"
  | "done";

export function StudyPlanDemo() {
  const [phase, setPhase] = useState<Phase>("picking");
  const [visibleModules, setVisibleModules] = useState(0);
  const [visiblePoints, setVisiblePoints] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches) return;
    const timer = window.setTimeout(() => {
      setReducedMotion(true);
      setPhase("done");
      setVisibleModules(PLAN_MODULES.length);
      setVisiblePoints(COURSEWARE.testPoints.length);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const schedule = (fn: () => void, ms: number) => {
      timers.current.push(window.setTimeout(fn, ms));
    };

    if (phase === "picking") schedule(() => setPhase("selected"), 1400);
    else if (phase === "selected") schedule(() => setPhase("building"), 700);
    else if (phase === "building") schedule(() => setPhase("plan"), 1400);
    else if (phase === "plan") {
      if (visibleModules < PLAN_MODULES.length) {
        schedule(() => setVisibleModules((n) => n + 1), 550);
      } else {
        schedule(() => setPhase("saved"), 700);
      }
    } else if (phase === "saved") schedule(() => setPhase("opening"), 1200);
    else if (phase === "opening") schedule(() => setPhase("courseware"), 900);
    else if (phase === "courseware") {
      if (visiblePoints < COURSEWARE.testPoints.length) {
        schedule(() => setVisiblePoints((n) => n + 1), 700);
      } else {
        schedule(() => setPhase("done"), 800);
      }
    } else if (phase === "done") {
      schedule(() => {
        setVisibleModules(0);
        setVisiblePoints(0);
        setPhase("picking");
      }, 5200);
    }

    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, [phase, visibleModules, visiblePoints, reducedMotion]);

  const examSelected = phase !== "picking";
  const showPlan =
    phase === "plan" ||
    phase === "saved" ||
    phase === "opening" ||
    phase === "courseware" ||
    phase === "done";
  const showCourseware = phase === "courseware" || phase === "done";
  const highlightOpen =
    phase === "opening" || phase === "courseware" || phase === "done";

  return (
    <DemoWindow
      title="Build a study plan · live demo"
      footer="Syllabus → roadmap → courseware test points → tracked portfolio"
    >
      <div className="flex min-h-[340px] flex-col gap-4 px-4 py-5 sm:min-h-[320px] sm:px-6">
        {!showCourseware && (
          <>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                1 · Choose your qualification
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {EXAM_CHIPS.map((examName) => {
                  const isChosen = examName === CHOSEN_EXAM && examSelected;
                  return (
                    <span
                      key={examName}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                        isChosen
                          ? "border-navy bg-navy text-white shadow-md"
                          : "border-line bg-white text-muted"
                      }`}
                    >
                      {examName}
                      {isChosen && <span className="ml-1.5">✓</span>}
                    </span>
                  );
                })}
              </div>
            </div>

            {phase === "building" && (
              <div className="flex items-center gap-2 text-sm text-muted">
                <div className="typing-indicator">
                  <span />
                  <span />
                  <span />
                </div>
                Building your {CHOSEN_EXAM} Level I study path…
              </div>
            )}

            {showPlan && (
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  2 · Your personalized roadmap
                </p>
                <div className="mt-2 space-y-2">
                  {PLAN_MODULES.slice(
                    0,
                    phase === "plan" ? visibleModules : PLAN_MODULES.length
                  ).map((moduleItem, index) => (
                    <div
                      key={moduleItem.name}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-line bg-white px-3 py-2"
                      style={{ animation: "fadeIn 0.3s ease" }}
                    >
                      <div>
                        <span className="text-sm font-medium text-navy">{moduleItem.name}</span>
                        <span className="ml-2 text-[11px] text-muted">{moduleItem.detail}</span>
                      </div>
                      {moduleItem.hasCourseware && (
                        <span
                          className={`rounded-md px-2 py-1 text-[11px] font-semibold transition ${
                            index === 0 && highlightOpen
                              ? "bg-navy text-white shadow-md"
                              : "border border-line text-navy"
                          }`}
                        >
                          Open courseware →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(phase === "saved" || phase === "opening") && (
              <div className="flex justify-center">
                <span className="demo-toast">Saved to your Study Path portfolio ✓</span>
              </div>
            )}
          </>
        )}

        {showCourseware && (
          <div className="space-y-3" style={{ animation: "fadeIn 0.3s ease" }}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                  Courseware
                </p>
                <h4 className="font-display mt-0.5 text-lg font-semibold text-navy">
                  {COURSEWARE.title}
                </h4>
                <p className="mt-1 text-[11px] text-muted">{COURSEWARE.currency}</p>
              </div>
              <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-800">
                Current
              </span>
            </div>

            <div className="rounded-xl border border-line bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
              {COURSEWARE.scoring}
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                Test points — start here
              </p>
              <div className="mt-2 space-y-2">
                {COURSEWARE.testPoints
                  .slice(0, phase === "courseware" ? visiblePoints : COURSEWARE.testPoints.length)
                  .map((point) => (
                    <div
                      key={point.focus}
                      className="rounded-lg border border-line bg-white px-3 py-2"
                      style={{ animation: "fadeIn 0.3s ease" }}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            point.priority === "Critical"
                              ? "bg-red-50 text-red-700"
                              : "bg-amber-50 text-amber-800"
                          }`}
                        >
                          {point.priority}
                        </span>
                        <span className="text-sm font-medium text-navy">{point.focus}</span>
                      </div>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted">
                        Must know: {point.mustKnow}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </DemoWindow>
  );
}
