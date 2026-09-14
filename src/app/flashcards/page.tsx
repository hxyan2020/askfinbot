"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  NoQualificationPrompt,
  SelectedQualificationBanner,
  readStoredExamId,
} from "@/components/SelectedQualificationBanner";
import { getExamById } from "@/lib/exams";
import { ExamLogo } from "@/components/ExamLogo";

type Flashcard = {
  id: string;
  examId: string;
  content: string;
  note?: string;
  subject: string;
  highlighted: boolean;
  createdAt: string;
  updatedAt: string;
};

type FlashcardDeck = {
  user: { id: string; examId: string | null } | null;
  cards: Flashcard[];
  examId: string;
};

async function fetchDeck(nextExamId: string): Promise<FlashcardDeck> {
  const me = await fetch("/api/auth/me").then((response) => response.json());
  if (!me.user) return { user: null, cards: [], examId: nextExamId };

  const preferred = nextExamId || me.user.examId || "cfa";
  const response = await fetch(`/api/flashcards?examId=${encodeURIComponent(preferred)}`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Could not load flashcards.");
  return { user: me.user, cards: data.cards || [], examId: preferred };
}

function formatWhen(iso: string) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return iso;
  }
}

export default function FlashcardsPage() {
  const [user, setUser] = useState<{ id: string; examId: string | null } | null>(null);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [examId, setExamId] = useState("cfa");
  const [subjectFilter, setSubjectFilter] = useState<string>("all");
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState("");

  useEffect(() => {
    let active = true;
    void (async () => {
      try {
        const me = await fetch("/api/auth/me").then((response) => response.json());
        if (!active) return;
        if (!me.user) {
          setUser(null);
          return;
        }
        const preferred =
          (me.user.examId && getExamById(me.user.examId) ? me.user.examId : null) ||
          readStoredExamId();
        if (!preferred) {
          setUser(me.user);
          return;
        }
        const deck = await fetchDeck(preferred);
        if (!active) return;
        setUser({ ...me.user, examId: me.user.examId || preferred });
        setCards(deck.cards);
        setExamId(deck.examId);
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "Failed to load.");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  async function toggleHighlight(card: Flashcard) {
    const highlighted = !card.highlighted;
    setBusyId(card.id);
    setCards((prev) =>
      prev.map((item) => (item.id === card.id ? { ...item, highlighted } : item))
    );
    try {
      const res = await fetch("/api/flashcards", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: card.id, highlighted }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Update failed.");
      setCards((prev) =>
        [...prev.map((c) => (c.id === card.id ? data.card : c))].sort((a, b) => {
          if (a.highlighted !== b.highlighted) return a.highlighted ? -1 : 1;
          return b.createdAt.localeCompare(a.createdAt);
        })
      );
    } catch (err) {
      setCards((prev) =>
        prev.map((item) =>
          item.id === card.id ? { ...item, highlighted: card.highlighted } : item
        )
      );
      setError(err instanceof Error ? err.message : "Update failed.");
    } finally {
      setBusyId(null);
    }
  }

  function editNote(card: Flashcard) {
    setEditingNoteId(card.id);
    setNoteDraft(card.note || "");
  }

  async function saveNote(card: Flashcard) {
    setBusyId(card.id);
    setError(null);
    try {
      const res = await fetch("/api/flashcards", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: card.id, note: noteDraft }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not save note.");
      setCards((prev) => prev.map((item) => (item.id === card.id ? data.card : item)));
      setEditingNoteId(null);
      setNoteDraft("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save note.");
    } finally {
      setBusyId(null);
    }
  }

  async function removeCard(card: Flashcard) {
    if (!confirm("Delete this flashcard?")) return;
    setBusyId(card.id);
    try {
      const res = await fetch(`/api/flashcards?id=${encodeURIComponent(card.id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed.");
      setCards((prev) => prev.filter((c) => c.id !== card.id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed.");
    } finally {
      setBusyId(null);
    }
  }

  const subjects = useMemo(() => {
    const set = new Set(cards.map((c) => c.subject));
    return ["all", ...Array.from(set).sort()];
  }, [cards]);

  const visible = useMemo(() => {
    if (subjectFilter === "all") return cards;
    return cards.filter((c) => c.subject === subjectFilter);
  }, [cards, subjectFilter]);

  const grouped = useMemo(() => {
    const map = new Map<string, Flashcard[]>();
    for (const card of visible) {
      const list = map.get(card.subject) || [];
      list.push(card);
      map.set(card.subject, list);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [visible]);

  const exam = getExamById(examId);

  if (loading && !user) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-4xl flex-1 px-4 py-16 text-center text-muted">
          Loading flashcards…
        </main>
        <Footer />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-xl flex-1 px-4 py-16 text-center">
          <h1 className="font-display text-3xl font-semibold text-navy">
            CFA, FRM &amp; ACCA flashcards by subject
          </h1>
          <p className="mt-3 text-sm text-muted">
            Log in to save formulas and explanations from AskFinBots into exam-specific flashcards
            for CFA, FRM, ACCA, CPA and more.
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
        <div className="mb-6">
          <h1 className="font-display text-3xl font-semibold text-navy">
            CFA, FRM &amp; ACCA flashcards by subject
          </h1>
          <p className="mt-2 text-sm text-muted">
            Save formulas and explanations from AskFinBots into exam-specific flashcards for CFA,
            FRM, ACCA, CPA and more. Cards are sorted by subject for faster revision.
          </p>
        </div>

        {error && (
          <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        {!user.examId ? (
          <NoQualificationPrompt className="mb-6" />
        ) : (
          <>
            <SelectedQualificationBanner examId={examId} />

            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {exam && <ExamLogo src={exam.logo} alt={exam.name} size={36} className="!mx-0" />}
                <div>
                  <p className="font-semibold text-navy">{exam?.name} deck</p>
                  <p className="text-xs text-muted">
                    {cards.length} card{cards.length === 1 ? "" : "s"}
                    {loading ? " · refreshing…" : ""}
                  </p>
                </div>
              </div>
              <label className="text-sm text-muted">
                Subject{" "}
                <select
                  className="admin-input ml-1 inline-block w-auto min-w-[10rem]"
                  value={subjectFilter}
                  onChange={(e) => setSubjectFilter(e.target.value)}
                >
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s === "all" ? "All subjects" : s}
                </option>
              ))}
            </select>
          </label>
        </div>

        {visible.length === 0 ? (
          <section className="surface-card p-8 text-center">
            <p className="text-sm text-muted">
              No flashcards for {exam?.name} yet. Ask a question on the home chat, then select a
              paragraph or formula in the reply and choose <strong>Save flashcard</strong>.
            </p>
            <Link href="/" className="btn-secondary mt-4 inline-flex">
              Open AskFinBots
            </Link>
          </section>
        ) : (
          <div className="space-y-8">
            {grouped.map(([subject, list]) => (
              <section key={subject}>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
                  {subject}
                  <span className="ml-2 font-normal normal-case text-slate-400">({list.length})</span>
                </h2>
                <div className="space-y-3">
                  {list.map((card) => (
                    <article
                      key={card.id}
                      className={`surface-card p-4 ${
                        card.highlighted ? "border-gold bg-amber-50/60 ring-1 ring-gold/30" : ""
                      }`}
                    >
                      <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-800">
                        {card.content}
                      </p>
                      {editingNoteId === card.id ? (
                        <div className="mt-4 rounded-xl border border-gold/30 bg-amber-50/50 p-3">
                          <label className="text-xs font-semibold uppercase tracking-wide text-navy">
                            Your note
                            <textarea
                              value={noteDraft}
                              onChange={(event) => setNoteDraft(event.target.value)}
                              rows={3}
                              maxLength={2000}
                              autoFocus
                              placeholder="Add a reminder, explanation, formula, or exam tip…"
                              className="admin-input mt-2 resize-y bg-white"
                            />
                          </label>
                          <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                            <span className="text-[11px] text-muted">{noteDraft.length}/2000</span>
                            <div className="flex gap-2">
                              <button
                                type="button"
                                className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted"
                                disabled={busyId === card.id}
                                onClick={() => {
                                  setEditingNoteId(null);
                                  setNoteDraft("");
                                }}
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white disabled:opacity-50"
                                disabled={busyId === card.id}
                                onClick={() => void saveNote(card)}
                              >
                                {busyId === card.id ? "Saving…" : "Save note"}
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        card.note && (
                          <div className="mt-4 rounded-xl border-l-4 border-gold bg-amber-50/60 px-4 py-3">
                            <p className="text-[11px] font-bold uppercase tracking-wide text-gold">
                              My note
                            </p>
                            <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
                              {card.note}
                            </p>
                          </div>
                        )
                      )}
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3 text-xs text-muted">
                        <span>Added {formatWhen(card.createdAt)}</span>
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            disabled={busyId === card.id}
                            onClick={() => editNote(card)}
                            className={`rounded-full border px-3 py-1 font-medium disabled:opacity-50 ${
                              card.note
                                ? "border-gold/40 bg-amber-50 text-navy"
                                : "border-line text-navy hover:bg-slate-50"
                            }`}
                          >
                            {card.note ? "Edit note" : "Add note"}
                          </button>
                          <button
                            type="button"
                            disabled={busyId === card.id}
                            onClick={() => void toggleHighlight(card)}
                            aria-pressed={card.highlighted}
                            className={`rounded-full border px-3 py-1 font-semibold transition disabled:opacity-50 ${
                              card.highlighted
                                ? "border-gold bg-gold text-navy shadow-sm ring-2 ring-gold/20"
                                : "border-line text-navy hover:border-gold/50 hover:bg-amber-50"
                            }`}
                          >
                            {card.highlighted ? "★ Highlighted" : "☆ Highlight"}
                          </button>
                          <button
                            type="button"
                            disabled={busyId === card.id}
                            onClick={() => void removeCard(card)}
                            className="rounded-full border border-red-200 px-3 py-1 font-medium text-red-700 hover:bg-red-50 disabled:opacity-50"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
