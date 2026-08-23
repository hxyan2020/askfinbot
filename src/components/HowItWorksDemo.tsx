"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DemoWindow } from "./DemoWindow";
import { demoBotAvatar } from "@/lib/bot-avatar";

const QUESTION = "Explain VaR vs Expected Shortfall for FRM Part I";

const ANSWER_LINES = [
  "Value at Risk (VaR) gives the loss threshold not exceeded at a confidence level — e.g. 99% 1-day VaR of $1M means losses exceed $1M only 1% of days.",
  "Expected Shortfall (ES) goes further: it is the average loss in that worst 1% tail, so it captures how bad the bad days are.",
  "Key exam point: ES is subadditive (coherent), VaR is not.",
];

const ANSWER_TOPICS = ["Valuation & Risk Models", "Market Risk Measurement"];

// Timeline phases: type question → send → bot thinking → answer lines → topics → hold → reset
type Phase = "typing" | "sent" | "thinking" | "answering" | "done";

export function HowItWorksDemo() {
  const [phase, setPhase] = useState<Phase>("typing");
  const [typedCount, setTypedCount] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches) return;
    const timer = window.setTimeout(() => {
      setReducedMotion(true);
      setPhase("done");
      setTypedCount(QUESTION.length);
      setVisibleLines(ANSWER_LINES.length);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const schedule = (fn: () => void, ms: number) => {
      timers.current.push(window.setTimeout(fn, ms));
    };

    if (phase === "typing") {
      if (typedCount < QUESTION.length) {
        schedule(() => setTypedCount((n) => n + 1), 38);
      } else {
        schedule(() => setPhase("sent"), 450);
      }
    } else if (phase === "sent") {
      schedule(() => setPhase("thinking"), 350);
    } else if (phase === "thinking") {
      schedule(() => setPhase("answering"), 1400);
    } else if (phase === "answering") {
      if (visibleLines < ANSWER_LINES.length) {
        schedule(() => setVisibleLines((n) => n + 1), 900);
      } else {
        schedule(() => setPhase("done"), 700);
      }
    } else if (phase === "done") {
      schedule(() => {
        setTypedCount(0);
        setVisibleLines(0);
        setPhase("typing");
      }, 5200);
    }

    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, [phase, typedCount, visibleLines, reducedMotion]);

  const questionSent = phase !== "typing";

  return (
    <DemoWindow
      title="Ask the bot · live demo"
      footer="1 token per answered question · formulas, charts, and flashcards included"
    >
      <div className="flex min-h-[300px] flex-col gap-3 px-4 py-5 sm:min-h-[280px] sm:px-6">
        {/* User bubble */}
        <div className="flex justify-end">
          <div className="chat-bubble chat-bubble-user">
            <p className="mb-1 text-[10px] uppercase tracking-wider opacity-60">You</p>
            <p className="text-sm">
              {QUESTION.slice(0, typedCount)}
              {!questionSent && <span className="demo-caret" aria-hidden="true" />}
            </p>
          </div>
        </div>

        {/* Bot bubble */}
        {(phase === "thinking" || phase === "answering" || phase === "done") && (
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
              {phase === "thinking" ? (
                <div className="typing-indicator">
                  <span />
                  <span />
                  <span />
                </div>
              ) : (
                <div className="space-y-2 text-sm leading-relaxed">
                  {ANSWER_LINES.slice(0, Math.max(visibleLines, phase === "done" ? ANSWER_LINES.length : 0)).map(
                    (line) => (
                      <p key={line}>{line}</p>
                    )
                  )}
                  {phase === "done" && (
                    <div className="flex flex-wrap items-center gap-1.5 border-t border-line pt-2">
                      <span className="text-[11px] font-semibold text-navy">Relevant FRM topics:</span>
                      {ANSWER_TOPICS.map((topic) => (
                        <span key={topic} className="topic-tag">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </DemoWindow>
  );
}
