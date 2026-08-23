"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DemoWindow } from "./DemoWindow";
import { demoBotAvatar } from "@/lib/bot-avatar";

const ANSWER_BEFORE = "Duration measures a bond's price sensitivity to yield changes. ";
const ANSWER_SELECTED =
  "Modified duration ≈ % price change for a 1% change in yield.";
const ANSWER_AFTER = " Convexity then refines the estimate for larger moves.";

// select text → toolbar appears → click Save flashcard → saved toast → card appears → hold → reset
type Phase = "reading" | "selecting" | "toolbar" | "clicking" | "saved" | "done";

export function FlashcardDemo() {
  const [phase, setPhase] = useState<Phase>("reading");
  const [reducedMotion, setReducedMotion] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches) return;
    const timer = window.setTimeout(() => {
      setReducedMotion(true);
      setPhase("done");
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const schedule = (fn: () => void, ms: number) => {
      timers.current.push(window.setTimeout(fn, ms));
    };

    if (phase === "reading") schedule(() => setPhase("selecting"), 1600);
    else if (phase === "selecting") schedule(() => setPhase("toolbar"), 1100);
    else if (phase === "toolbar") schedule(() => setPhase("clicking"), 1500);
    else if (phase === "clicking") schedule(() => setPhase("saved"), 500);
    else if (phase === "saved") schedule(() => setPhase("done"), 1400);
    else if (phase === "done") schedule(() => setPhase("reading"), 5600);

    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, [phase, reducedMotion]);

  const selected = phase !== "reading";
  const showToolbar = phase === "toolbar" || phase === "clicking";
  const showToast = phase === "saved" || phase === "done";

  return (
    <DemoWindow
      title="Save to flashcards · live demo"
      footer="Select any sentence or formula in a reply, then tap Save flashcard"
    >
      <div className="relative flex min-h-[300px] flex-col gap-3 px-4 py-5 sm:min-h-[280px] sm:px-6">
        <div className="flex justify-start gap-3">
          <Image
            src={demoBotAvatar("frm")}
            alt="AskFinBots"
            width={36}
            height={36}
            className="mt-1 h-9 w-9 shrink-0 rounded-full object-cover"
          />
          <div className="chat-bubble chat-bubble-assistant">
            <p className="mb-1 text-[10px] uppercase tracking-wider opacity-60">AskFinBots</p>
            <p className="relative text-sm leading-relaxed">
              {ANSWER_BEFORE}
              <span className="relative">
                {showToolbar && (
                  <span className="demo-selection-toolbar" aria-hidden="true">
                    <span
                      className={`demo-toolbar-btn ${phase === "clicking" ? "demo-toolbar-btn-pressed" : ""}`}
                    >
                      Save flashcard
                    </span>
                  </span>
                )}
                <span className={selected ? "demo-text-selected" : undefined}>
                  {ANSWER_SELECTED}
                </span>
              </span>
              {ANSWER_AFTER}
            </p>
          </div>
        </div>

        {showToast && (
          <div className="flex justify-center">
            <span className="demo-toast">Saved · Fixed Income</span>
          </div>
        )}

        {phase === "done" && (
          <div className="mx-auto w-full max-w-xs rounded-xl border border-line bg-white p-4 shadow-sm"
            style={{ animation: "fadeIn 0.3s ease" }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gold">
              Flashcard · CFA
            </p>
            <p className="mt-1.5 text-sm font-medium text-navy">{ANSWER_SELECTED}</p>
            <div className="mt-3 flex gap-2 text-[11px]">
              <span className="rounded-md border border-line px-2 py-1 text-muted">Add note</span>
              <span className="rounded-md border border-amber-300 bg-amber-50 px-2 py-1 font-medium text-amber-700">
                ★ Highlighted
              </span>
            </div>
          </div>
        )}
      </div>
    </DemoWindow>
  );
}
