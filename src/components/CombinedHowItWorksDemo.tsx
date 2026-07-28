"use client";

import { useEffect, useState } from "react";
import { FlashcardDemo } from "./FlashcardDemo";
import { HowItWorksDemo } from "./HowItWorksDemo";
import { StudyPlanDemo } from "./StudyPlanDemo";

const DEMOS = [
  {
    label: "Ask the bot",
    title: "Ask exam-focused questions",
    duration: 12_500,
    content: <HowItWorksDemo />,
  },
  {
    label: "Save flashcard",
    title: "Save key points to flashcards",
    duration: 11_500,
    content: <FlashcardDemo />,
  },
  {
    label: "Study plan",
    title: "Sign up for a study plan",
    duration: 17_500,
    content: <StudyPlanDemo />,
  },
] as const;

export function CombinedHowItWorksDemo() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches) return;
    const timer = window.setTimeout(() => setReducedMotion(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setTimeout(
      () => setActiveDemo((current) => (current + 1) % DEMOS.length),
      DEMOS[activeDemo].duration
    );
    return () => window.clearTimeout(timer);
  }, [activeDemo, reducedMotion]);

  const demo = DEMOS[activeDemo];

  return (
    <div>
      <div className="mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          How AskFinBots works
        </p>
        <h3 className="font-display mt-1 text-xl font-semibold text-navy">
          <span className="text-gold">{activeDemo + 1}.</span> {demo.title}
        </h3>
      </div>

      <div key={activeDemo}>{demo.content}</div>

      <div className="mt-4 flex items-center justify-center gap-2" aria-label="Demo chapters">
        {DEMOS.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActiveDemo(index)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              index === activeDemo
                ? "border-navy bg-navy text-white"
                : "border-line bg-white text-muted hover:border-navy/40 hover:text-navy"
            }`}
            aria-current={index === activeDemo ? "step" : undefined}
          >
            {index + 1}. {item.label}
          </button>
        ))}
      </div>

      <p className="mt-2 text-center text-[11px] text-muted">
        {reducedMotion
          ? "Choose a chapter to view each completed example."
          : `Playing ${activeDemo + 1} of ${DEMOS.length} · next chapter plays automatically`}
      </p>
    </div>
  );
}
