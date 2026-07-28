import { promises as fs } from "fs";
import path from "path";
import { FINANCIAL_EXAMS, getExamById } from "./exams";

export interface Flashcard {
  id: string;
  examId: string;
  content: string;
  note?: string;
  subject: string;
  highlighted: boolean;
  createdAt: string;
  updatedAt: string;
}

interface FlashcardStore {
  userId: string;
  cards: Flashcard[];
  updatedAt: string;
}

const ROOT = path.join(process.cwd(), "data", "flashcards");

async function ensureDir() {
  await fs.mkdir(ROOT, { recursive: true });
}

function fileFor(userId: string) {
  return path.join(ROOT, `${userId}.json`);
}

async function readStore(userId: string): Promise<FlashcardStore> {
  await ensureDir();
  try {
    const raw = await fs.readFile(fileFor(userId), "utf8");
    return JSON.parse(raw) as FlashcardStore;
  } catch {
    return { userId, cards: [], updatedAt: new Date().toISOString() };
  }
}

async function writeStore(store: FlashcardStore) {
  await ensureDir();
  store.updatedAt = new Date().toISOString();
  await fs.writeFile(fileFor(store.userId), JSON.stringify(store, null, 2), "utf8");
}

/** Keyword hints mapped to common subject labels across exams */
const SUBJECT_HINTS: { subject: string; keywords: string[] }[] = [
  { subject: "Ethics & Professional Standards", keywords: ["ethics", "fiduciary", "professional standard", "code of ethics", "conduct"] },
  { subject: "Quantitative Methods", keywords: ["probability", "regression", "hypothesis", "standard deviation", "correlation", "anova", "t-stat", "z-score", "quantitative"] },
  { subject: "Economics", keywords: ["gdp", "inflation", "monetary", "fiscal", "elasticity", "demand curve", "supply", "macro", "microeconomics"] },
  { subject: "Financial Reporting & Analysis", keywords: ["balance sheet", "income statement", "cash flow", "ifrs", "gaap", "depreciation", "accrual", "revenue recognition", "financial reporting"] },
  { subject: "Corporate Finance", keywords: ["wacc", "npv", "irr", "capital structure", "dividend", "capex", "cost of capital", "levered"] },
  { subject: "Equity", keywords: ["equity valuation", "p/e", "dividend discount", "fcff", "fcfe", "shareholder", "common stock"] },
  { subject: "Fixed Income", keywords: ["bond", "duration", "convexity", "yield curve", "coupon", "credit spread", "fixed income", "macaulay"] },
  { subject: "Derivatives", keywords: ["option", "futures", "swap", "forward", "black-scholes", "put-call", "derivative", "hedge ratio"] },
  { subject: "Alternative Investments", keywords: ["private equity", "hedge fund", "real estate", "commodity", "alternative investment", "venture capital"] },
  { subject: "Portfolio Management", keywords: ["portfolio", "sharpe", "beta", "capm", "efficient frontier", "asset allocation", "treynor", "diversification"] },
  { subject: "Market Risk", keywords: ["var", "value at risk", "expected shortfall", "market risk", "volatility"] },
  { subject: "Credit Risk", keywords: ["credit risk", "default", "pd", "lgd", "ead", "counterparty", "credit rating"] },
  { subject: "Operational Risk", keywords: ["operational risk", "basel", "loss event", "kyc", "compliance failure"] },
  { subject: "Liquidity Risk", keywords: ["liquidity", "funding risk", "lcr", "nsfr", "treasury"] },
  { subject: "Taxation", keywords: ["tax", "irs", "deduction", "taxable income", "corporation tax", "vat"] },
  { subject: "Audit & Assurance", keywords: ["audit", "attestation", "internal control", "materiality", "assurance"] },
  { subject: "Technical Analysis", keywords: ["candlestick", "moving average", "rsi", "macd", "chart pattern", "technical indicator"] },
  { subject: "ESG & Sustainability", keywords: ["esg", "climate", "carbon", "stewardship", "sustainable", "green bond"] },
  { subject: "Formulas & Calculations", keywords: ["formula", "equation", "=", "∑", "√", "calculate", "compute", "where:"] },
];

export function categorizeSubject(examId: string, content: string): string {
  const text = content.toLowerCase();
  const exam = getExamById(examId);

  // Prefer matching the exam's own topic list first
  if (exam) {
    let bestTopic = exam.topics[0] || "General";
    let bestScore = 0;
    for (const topic of exam.topics) {
      const words = topic.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 3);
      let score = 0;
      for (const w of words) {
        if (text.includes(w)) score += 2;
      }
      // also score full phrase
      if (text.includes(topic.toLowerCase())) score += 5;
      if (score > bestScore) {
        bestScore = score;
        bestTopic = topic;
      }
    }
    if (bestScore >= 2) return bestTopic;
  }

  let best = "General Concepts";
  let bestScore = 0;
  for (const hint of SUBJECT_HINTS) {
    let score = 0;
    for (const kw of hint.keywords) {
      if (text.includes(kw)) score += kw.length > 6 ? 3 : 2;
    }
    if (score > bestScore) {
      bestScore = score;
      best = hint.subject;
    }
  }

  // Prefer aligning hint subject to an exam topic when close
  if (exam && bestScore > 0) {
    const aligned = exam.topics.find(
      (t) =>
        t.toLowerCase().includes(best.toLowerCase().split(" ")[0]) ||
        best.toLowerCase().includes(t.toLowerCase().split(" ")[0])
    );
    if (aligned) return aligned;
  }

  return bestScore > 0 ? best : exam?.topics[0] || "General Concepts";
}

export async function listFlashcards(userId: string, examId?: string): Promise<Flashcard[]> {
  const store = await readStore(userId);
  const cards = examId ? store.cards.filter((c) => c.examId === examId) : store.cards;
  return [...cards].sort((a, b) => {
    if (a.highlighted !== b.highlighted) return a.highlighted ? -1 : 1;
    return b.createdAt.localeCompare(a.createdAt);
  });
}

export async function createFlashcard(input: {
  userId: string;
  examId: string;
  content: string;
}): Promise<Flashcard> {
  const exam = getExamById(input.examId);
  if (!exam) throw new Error("Invalid exam.");
  const content = input.content.trim();
  if (content.length < 8) throw new Error("Select a longer passage (at least a short sentence or formula).");
  if (content.length > 4000) throw new Error("Selection is too long. Choose a shorter paragraph or formula.");

  const now = new Date().toISOString();
  const card: Flashcard = {
    id: crypto.randomUUID(),
    examId: input.examId,
    content,
    subject: categorizeSubject(input.examId, content),
    highlighted: false,
    createdAt: now,
    updatedAt: now,
  };

  const store = await readStore(input.userId);
  // de-dupe identical content for same exam
  const dup = store.cards.find(
    (c) => c.examId === card.examId && c.content.toLowerCase() === content.toLowerCase()
  );
  if (dup) return dup;

  store.cards.unshift(card);
  await writeStore(store);
  return card;
}

export async function updateFlashcard(
  userId: string,
  cardId: string,
  patch: { highlighted?: boolean; note?: string }
): Promise<Flashcard | null> {
  const store = await readStore(userId);
  const idx = store.cards.findIndex((c) => c.id === cardId);
  if (idx < 0) return null;
  if (typeof patch.highlighted === "boolean") {
    store.cards[idx].highlighted = patch.highlighted;
  }
  if (typeof patch.note === "string") {
    const note = patch.note.trim();
    if (note.length > 2000) throw new Error("Note is too long (maximum 2,000 characters).");
    store.cards[idx].note = note || undefined;
  }
  store.cards[idx].updatedAt = new Date().toISOString();
  await writeStore(store);
  return store.cards[idx];
}

export async function deleteFlashcard(userId: string, cardId: string): Promise<boolean> {
  const store = await readStore(userId);
  const before = store.cards.length;
  store.cards = store.cards.filter((c) => c.id !== cardId);
  if (store.cards.length === before) return false;
  await writeStore(store);
  return true;
}

export function examsWithCardCounts(cards: Flashcard[]): { examId: string; count: number }[] {
  return FINANCIAL_EXAMS.map((exam) => ({
    examId: exam.id,
    count: cards.filter((c) => c.examId === exam.id).length,
  }));
}
