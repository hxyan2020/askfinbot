"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  EXAM_STORAGE_KEY,
  PROVIDER_MANUAL_KEY,
  PROVIDER_STORAGE_KEY,
  type LLMProvider,
} from "@/lib/constants";
import { getExamById } from "@/lib/exams";
import { preferredProviderForLocale } from "@/lib/provider-preference";
import { ChatPanel } from "./ChatPanel";

function getInitialProvider(): LLMProvider {
  if (typeof window === "undefined") return "gemini";
  const storedProvider = localStorage.getItem(PROVIDER_STORAGE_KEY);
  const stored =
    storedProvider === "deepseek" || storedProvider === "gemini" ? storedProvider : null;
  return preferredProviderForLocale(stored);
}

/**
 * Floating AskFinBots chat dock used from courseware selection / lesson actions.
 * Reuses the same ChatPanel as the Ask Bot page, including fullscreen expand.
 */
export function CoursewareAskBotDock({
  examId,
  initialQuestion,
  onClose,
}: {
  examId: string;
  initialQuestion?: string;
  onClose: () => void;
}) {
  const router = useRouter();
  const exam = getExamById(examId) ?? null;
  const [provider, setProvider] = useState<LLMProvider>(getInitialProvider);
  const [tokens, setTokens] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (cancelled) return;
        setTokens(typeof data.user?.tokens === "number" ? data.user.tokens : 0);
      } catch {
        if (!cancelled) setTokens(0);
      } finally {
        if (!cancelled) setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!initialQuestion) return;
    try {
      sessionStorage.setItem(
        "askfinbot_prefill",
        JSON.stringify({
          examId,
          question: initialQuestion.startsWith("Please explain")
            ? initialQuestion
            : `Please explain this courseware excerpt in exam-focused detail and show how it is tested:\n\n${initialQuestion}`,
        })
      );
    } catch {
      /* ignore */
    }
  }, [examId, initialQuestion]);

  useEffect(() => {
    if (exam) localStorage.setItem(EXAM_STORAGE_KEY, exam.id);
  }, [exam]);

  const handleProviderChange = useCallback((next: LLMProvider) => {
    setProvider(next);
    localStorage.setItem(PROVIDER_STORAGE_KEY, next);
    localStorage.setItem(PROVIDER_MANUAL_KEY, "1");
  }, []);

  const handleProviderAutoSwitch = useCallback((next: LLMProvider) => {
    setProvider(next);
    localStorage.setItem(PROVIDER_STORAGE_KEY, next);
  }, []);

  const goToPlans = useCallback(() => {
    router.push("/cart");
  }, [router]);

  const handleTokenUsed = useCallback(
    (remaining?: number) => {
      setTokens((prev) => {
        const next = typeof remaining === "number" ? remaining : Math.max(0, prev - 1);
        if (next <= 0) router.push("/cart");
        return next;
      });
    },
    [router]
  );

  return (
    <div className="cw-askbot-dock" role="dialog" aria-label="Ask AskFinBots">
      <div className="cw-askbot-dock-bar">
        <div>
          <p className="cw-askbot-kicker">Ask AskFinBots</p>
          <strong>{exam?.name || "Exam tutor"}</strong>
        </div>
        <button type="button" className="cw-close" onClick={onClose} aria-label="Close chat">
          ✕
        </button>
      </div>
      <div className="cw-askbot-dock-body">
        {!ready ? (
          <p className="cw-loading">Loading tutor…</p>
        ) : (
          <ChatPanel
            exam={exam}
            provider={provider}
            onProviderChange={handleProviderChange}
            onProviderAutoSwitch={handleProviderAutoSwitch}
            tokens={tokens}
            onTokenUsed={handleTokenUsed}
            onTopUp={goToPlans}
          />
        )}
      </div>
    </div>
  );
}
