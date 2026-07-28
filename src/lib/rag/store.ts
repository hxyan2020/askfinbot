import { promises as fs } from "fs";
import path from "path";
import { chunkText } from "./chunk";
import type { RagDocType, RagDocument, RagDocumentSummary } from "./types";

const DATA_ROOT = path.join(process.cwd(), "data", "rag");

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

function examDir(examId: string) {
  return path.join(DATA_ROOT, examId);
}

function docPath(examId: string, docId: string) {
  return path.join(examDir(examId), `${docId}.json`);
}

function toSummary(doc: RagDocument): RagDocumentSummary {
  return {
    id: doc.id,
    examId: doc.examId,
    title: doc.title,
    type: doc.type,
    fileName: doc.fileName,
    chunkCount: doc.chunks.length,
    charCount: doc.content.length,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };
}

export async function listDocuments(examId: string): Promise<RagDocumentSummary[]> {
  const dir = examDir(examId);
  try {
    await ensureDir(dir);
    const files = await fs.readdir(dir);
    const docs: RagDocumentSummary[] = [];
    for (const file of files) {
      if (!file.endsWith(".json")) continue;
      const raw = await fs.readFile(path.join(dir, file), "utf8");
      const doc = JSON.parse(raw) as RagDocument;
      docs.push(toSummary(doc));
    }
    return docs.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  } catch {
    return [];
  }
}

export async function getDocument(examId: string, docId: string): Promise<RagDocument | null> {
  try {
    const raw = await fs.readFile(docPath(examId, docId), "utf8");
    return JSON.parse(raw) as RagDocument;
  } catch {
    return null;
  }
}

export async function saveDocument(input: {
  examId: string;
  title: string;
  type: RagDocType;
  content: string;
  fileName?: string;
  mimeType?: string;
  id?: string;
}): Promise<RagDocument> {
  await ensureDir(examDir(input.examId));
  const now = new Date().toISOString();
  const existing = input.id ? await getDocument(input.examId, input.id) : null;
  const id = input.id || crypto.randomUUID();
  const content = input.content.trim();
  const doc: RagDocument = {
    id,
    examId: input.examId,
    title: input.title.trim() || "Untitled",
    type: input.type,
    fileName: input.fileName,
    mimeType: input.mimeType,
    content,
    chunks: chunkText(content),
    createdAt: existing?.createdAt || now,
    updatedAt: now,
  };
  await fs.writeFile(docPath(input.examId, id), JSON.stringify(doc, null, 2), "utf8");
  return doc;
}

export async function updateDocumentMeta(
  examId: string,
  docId: string,
  patch: { title?: string; type?: RagDocType; content?: string }
): Promise<RagDocument | null> {
  const existing = await getDocument(examId, docId);
  if (!existing) return null;

  const content = patch.content !== undefined ? patch.content.trim() : existing.content;
  const updated: RagDocument = {
    ...existing,
    title: patch.title?.trim() || existing.title,
    type: patch.type || existing.type,
    content,
    chunks: patch.content !== undefined ? chunkText(content) : existing.chunks,
    updatedAt: new Date().toISOString(),
  };
  await fs.writeFile(docPath(examId, docId), JSON.stringify(updated, null, 2), "utf8");
  return updated;
}

export async function deleteDocument(examId: string, docId: string): Promise<boolean> {
  try {
    await fs.unlink(docPath(examId, docId));
    return true;
  } catch {
    return false;
  }
}

export async function loadExamChunks(examId: string): Promise<{ docTitle: string; text: string }[]> {
  const summaries = await listDocuments(examId);
  const out: { docTitle: string; text: string }[] = [];
  for (const summary of summaries) {
    const doc = await getDocument(examId, summary.id);
    if (!doc) continue;
    for (const chunk of doc.chunks) {
      out.push({ docTitle: doc.title, text: chunk.text });
    }
  }
  return out;
}

export async function countDocumentsByExam(): Promise<Record<string, number>> {
  await ensureDir(DATA_ROOT);
  const entries = await fs.readdir(DATA_ROOT, { withFileTypes: true });
  const counts: Record<string, number> = {};
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const docs = await listDocuments(entry.name);
    counts[entry.name] = docs.length;
  }
  return counts;
}
