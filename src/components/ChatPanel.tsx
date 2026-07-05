"use client";

import { useEffect, useRef, useState } from "react";
import type { FinancialExam } from "@/lib/exams";
import type { LLMProvider } from "@/lib/constants";
import { ProviderToggle } from "./ProviderToggle";
import { TokenBadge } from "./TokenBadge";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatPanelProps {
  exam: FinancialExam | null;
  provider: LLMProvider;
  onProviderChange: (provider: LLMProvider) => void;
  tokens: number;
  onTokenUsed: () => void;
  onTopUp: () => void;
}

export function ChatPanel({
  exam,
  provider,
  onProviderChange,
  tokens,
  onTokenUsed,
  onTopUp,
}: ChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setMessages([]);
    setError(null);
  }, [exam?.id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || !exam || loading) return;

    if (tokens <= 0) {
      onTopUp();
      return;
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError(null);

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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get a response.");
      }

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      if (!data.moderated) {
        onTokenUsed();
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  if (!exam) {
    return (
      <section className="glow-card flex min-h-[420px] flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 text-4xl text-gold/30">✦</div>
        <h2 className="font-display text-xl font-semibold text-gold/80">Select an Exam to Begin</h2>
        <p className="mt-2 max-w-sm text-sm text-gold/50">
          Choose a financial qualification exam above, then ask any study-related question.
        </p>
      </section>
    );
  }

  return (
    <section className="glow-card flex min-h-[520px] flex-col overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gold/15 px-4 py-4 sm:px-5">
        <div>
          <h2 className="font-display text-lg font-semibold text-gold glow-text-sm">
            {exam.name} Study Chat
          </h2>
          <p className="text-xs text-gold/50">{exam.fullName}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <ProviderToggle provider={provider} onChange={onProviderChange} />
          <TokenBadge tokens={tokens} onTopUp={onTopUp} />
        </div>
      </div>

      <div className="chat-messages flex-1 space-y-4 overflow-y-auto px-4 py-4 sm:px-5">
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center py-12 text-center">
            <p className="font-display text-gold/70">Welcome to your {exam.name} session</p>
            <p className="mt-2 max-w-md text-sm text-gold/45">
              Ask about concepts, practice problems, exam structure, or study strategies. Each question
              uses 1 token.
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
            className={`chat-bubble ${msg.role === "user" ? "chat-bubble-user" : "chat-bubble-assistant"}`}
          >
            <p className="mb-1 text-[10px] uppercase tracking-wider text-gold/40">
              {msg.role === "user" ? "You" : "AskFinBot"}
            </p>
            <div className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</div>
          </div>
        ))}

        {loading && (
          <div className="chat-bubble chat-bubble-assistant">
            <p className="mb-1 text-[10px] uppercase tracking-wider text-gold/40">AskFinBot</p>
            <div className="typing-indicator">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {error && (
        <div className="mx-4 mb-2 rounded-lg border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-300 sm:mx-5">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="border-t border-gold/15 p-4 sm:p-5">
        {tokens <= 0 ? (
          <div className="rounded-lg border border-gold/20 bg-gold/5 p-4 text-center">
            <p className="text-sm text-gold/70">You&apos;ve used all your free tokens.</p>
            <button type="button" onClick={onTopUp} className="btn-glow mt-3">
              Top Up to Continue
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Ask a ${exam.name}-related question...`}
              rows={2}
              disabled={loading}
              className="chat-input flex-1 resize-none"
            />
            <button type="submit" disabled={loading || !input.trim()} className="btn-glow self-end px-5">
              {loading ? "..." : "Send"}
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
