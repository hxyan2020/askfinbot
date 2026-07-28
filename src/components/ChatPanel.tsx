"use client";

import { useEffect, useRef, useState } from "react";
import type { FinancialExam } from "@/lib/exams";
import type { LLMProvider } from "@/lib/constants";
import { ProviderToggle } from "./ProviderToggle";
import { TokenBadge } from "./TokenBadge";
import { MessageContent } from "./MessageContent";
import { SelectionFlashcardToolbar } from "./SelectionFlashcardToolbar";
import { MentorSupport } from "./MentorSupport";
import { pickBotAvatar } from "@/lib/bot-avatar";
import Image from "next/image";
import Link from "next/link";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatPanelProps {
  exam: FinancialExam | null;
  provider: LLMProvider;
  onProviderChange: (provider: LLMProvider) => void;
  onProviderAutoSwitch?: (provider: LLMProvider) => void;
  tokens: number;
  onTokenUsed: (remaining?: number) => void;
  onTopUp: () => void;
  onRestoreFreeTokens?: () => void;
}

function createMessageId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function friendlyError(raw: string): string {
  const lower = raw.toLowerCase();
  if (lower.includes("dunning") || lower.includes("permission_denied") || lower.includes("403")) {
    return "The default AI provider is temporarily blocked. Try DeepSeek, or retry in a moment.";
  }
  if (lower.includes("gemini") || lower.includes("deepseek") || lower.includes("api key")) {
    return "The AI service is temporarily unavailable. Please try again in a moment.";
  }
  if (lower.includes("failed to fetch") || lower.includes("network")) {
    return "Could not reach the server. Check your connection and try again.";
  }
  return raw || "Something went wrong. Please try again.";
}

export function ChatPanel({
  exam,
  provider,
  onProviderChange,
  onProviderAutoSwitch,
  tokens,
  onTokenUsed,
  onTopUp,
}: ChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  // Chosen once per chat session so the tutor keeps one face until the bot is reopened.
  const [botAvatar] = useState(pickBotAvatar);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesAreaRef = useRef<HTMLDivElement>(null);

  // Hydrate a question forwarded from Study Path courseware ("Ask AskFinBots").
  useEffect(() => {
    if (!exam) return;
    let focusTimer: number | undefined;
    try {
      const raw = sessionStorage.getItem("askfinbot_prefill");
      if (!raw) return;
      const parsed = JSON.parse(raw) as { examId?: string; question?: string };
      if (parsed.question && (!parsed.examId || parsed.examId === exam.id)) {
        sessionStorage.removeItem("askfinbot_prefill");
        focusTimer = window.setTimeout(() => {
          setInput(parsed.question || "");
          inputRef.current?.focus();
        }, 0);
      }
    } catch {
      /* ignore */
    }
    return () => {
      if (focusTimer !== undefined) window.clearTimeout(focusTimer);
    };
  }, [exam]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, error, status]);

  useEffect(() => {
    if (!fullscreen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setFullscreen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [fullscreen]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (loading) return;

    if (!exam) {
      setError("Please select an exam first.");
      return;
    }

    if (!trimmed) {
      setError("Type a question before sending.");
      inputRef.current?.focus();
      return;
    }

    if (tokens <= 0) {
      onTopUp();
      return;
    }

    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError(null);
    setStatus("Sending…");

    try {
      const history = messages.map((m) => ({ role: m.role, content: m.content }));
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          examId: exam.id,
          message: trimmed,
          provider,
          history,
        }),
      });

      let data: {
        reply?: string;
        error?: string;
        moderated?: boolean;
        tokens?: number;
        providerUsed?: LLMProvider;
        fellBack?: boolean;
      } = {};
      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid response from server.");
      }

      if (response.status === 401) {
        throw new Error(data.error || "Please log in to use AskFinBots.");
      }

      if (response.status === 402) {
        if (typeof data.tokens === "number") onTokenUsed(data.tokens);
        onTopUp();
        throw new Error(data.error || "No tokens remaining.");
      }

      if (!response.ok) {
        throw new Error(data.error || `Request failed (${response.status}).`);
      }

      if (!data.reply) {
        throw new Error("No answer was returned. Please try again.");
      }

      const assistantMessage: ChatMessage = {
        id: createMessageId(),
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      if (data.fellBack || (data.providerUsed === "deepseek" && provider === "gemini")) {
        onProviderAutoSwitch?.("deepseek");
        setStatus("Switched to DeepSeek because Gemini was unavailable.");
      } else {
        setStatus(null);
      }
      if (!data.moderated) {
        onTokenUsed(typeof data.tokens === "number" ? data.tokens : undefined);
      }
    } catch (err) {
      const message = friendlyError(err instanceof Error ? err.message : "Something went wrong.");
      setError(message);
      setStatus(null);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    void sendMessage();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  }

  if (!exam) {
    return (
      <section className="surface-card flex min-h-[420px] flex-col items-center justify-center p-8 text-center">
        <p className="font-display text-xl font-semibold text-navy">Select an exam to begin</p>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Choose a qualification above, then ask study questions. Answers can draw from uploaded textbooks and test banks.
        </p>
      </section>
    );
  }

  return (
    <section
      className={`surface-card flex min-h-[520px] flex-col overflow-hidden ${
        fullscreen ? "chat-panel-fullscreen" : ""
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-4 sm:px-5">
        <div>
          <h2 className="font-display text-lg font-semibold text-navy">Ask your question</h2>
          <p className="text-xs text-muted">
            {exam.name} · {exam.fullName}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <MentorSupport exam={exam} transcript={messages} onTopUp={onTopUp} />
          <Link href="/flashcards" className="text-xs font-medium text-navy underline">
            Flashcards
          </Link>
          <ProviderToggle provider={provider} onChange={onProviderChange} />
          <TokenBadge tokens={tokens} onTopUp={onTopUp} />
          <button
            type="button"
            className="chat-expand-btn"
            aria-label={fullscreen ? "Exit full screen" : "Expand chat to full screen"}
            title={fullscreen ? "Exit full screen (Esc)" : "Full screen"}
            onClick={() => setFullscreen((value) => !value)}
          >
            {fullscreen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M9 9H4V7h3V4h2v5ZM15 9V4h2v3h3v2h-5ZM9 15v5H7v-3H4v-2h5ZM15 15h5v2h-3v3h-2v-5Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 9V4h5v2H6v3H4Zm10-5h5v5h-2V6h-3V4ZM4 15h2v3h3v2H4v-5Zm14 0h2v5h-5v-2h3v-3Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div ref={messagesAreaRef} className="chat-messages relative flex-1 space-y-4 overflow-y-auto px-4 py-4 sm:px-5">
        <SelectionFlashcardToolbar examId={exam.id} containerRef={messagesAreaRef} saveLabel="Save flashcard" />
        <p className="text-[11px] text-muted">
          Tip: select a paragraph or formula in a reply, then tap <strong>Save flashcard</strong>.
        </p>
        {messages.length === 0 && !loading && (
          <div className="flex h-full flex-col items-center justify-center py-12 text-center">
            <Image
              src={botAvatar}
              alt="AskFinBots tutor"
              width={72}
              height={72}
              className="mb-4 h-[72px] w-[72px] rounded-full object-cover shadow-sm"
            />
            <p className="font-display text-navy">Hi — I&apos;m here to help with {exam.name}</p>
            <p className="mt-2 max-w-md text-sm text-muted">
              Ask about concepts, practice problems, or study strategy. Each question uses 1 token.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {exam.topics.slice(0, 4).map((topic) => (
                <span key={topic} className="topic-tag">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <Image
                src={botAvatar}
                alt="AskFinBots"
                width={36}
                height={36}
                className="mt-1 h-9 w-9 shrink-0 rounded-full object-cover"
              />
            )}
            <div className={`chat-bubble ${msg.role === "user" ? "chat-bubble-user" : "chat-bubble-assistant"}`}>
              <p className="mb-1 text-[10px] uppercase tracking-wider opacity-60">
                {msg.role === "user" ? "You" : "AskFinBots"}
              </p>
              <MessageContent content={msg.content} />
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-3 justify-start">
            <Image
              src={botAvatar}
              alt="AskFinBots"
              width={36}
              height={36}
              className="mt-1 h-9 w-9 shrink-0 rounded-full object-cover"
            />
            <div className="chat-bubble chat-bubble-assistant">
              <p className="mb-1 text-[10px] uppercase tracking-wider opacity-60">AskFinBots</p>
              <div className="typing-indicator">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {status && (
        <div className="mx-4 mb-2 rounded-lg border border-navy/15 bg-slate-50 px-4 py-2 text-sm text-navy sm:mx-5">
          {status}
        </div>
      )}

      {error && (
        <div className="mx-4 mb-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700 sm:mx-5">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="border-t border-line p-4 sm:p-5">
        {tokens <= 0 ? (
          <div className="rounded-xl border border-line bg-slate-50 p-4 text-center">
            <p className="text-sm font-medium text-navy">No tokens left</p>
            <p className="mt-1 text-sm text-muted">
              Choose a token plan and place your order securely through the website.
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <button type="button" onClick={onTopUp} className="btn-primary">
                View token plans
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Ask a ${exam.name}-related question…`}
              rows={2}
              disabled={loading}
              className="chat-input flex-1 resize-none"
            />
            <button
              type="button"
              onClick={() => void sendMessage()}
              disabled={loading}
              className="btn-primary self-end px-5"
            >
              {loading ? "…" : "Send"}
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
