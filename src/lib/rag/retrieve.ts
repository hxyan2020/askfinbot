import { loadExamChunks } from "./store";

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);
}

function scoreChunk(queryTokens: string[], chunkText: string): number {
  const chunkTokens = tokenize(chunkText);
  if (!chunkTokens.length || !queryTokens.length) return 0;

  const freq = new Map<string, number>();
  for (const t of chunkTokens) freq.set(t, (freq.get(t) || 0) + 1);

  let score = 0;
  for (const q of queryTokens) {
    const f = freq.get(q) || 0;
    if (f > 0) score += 1 + Math.log(1 + f);
  }

  // Prefer denser overlap
  const uniqueHits = new Set(queryTokens.filter((q) => freq.has(q))).size;
  score += uniqueHits * 0.5;
  return score;
}

export async function retrieveContext(
  examId: string,
  query: string,
  topK = 4
): Promise<string> {
  const chunks = await loadExamChunks(examId);
  if (!chunks.length) return "";

  const queryTokens = tokenize(query);
  const ranked = chunks
    .map((chunk) => ({
      ...chunk,
      score: scoreChunk(queryTokens, chunk.text),
    }))
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);

  if (!ranked.length) {
    // Fallback: first chunks from materials so RAG still helps a bit
    return chunks
      .slice(0, 2)
      .map((c, i) => `[Source ${i + 1}: ${c.docTitle}]\n${c.text}`)
      .join("\n\n");
  }

  return ranked
    .map((c, i) => `[Source ${i + 1}: ${c.docTitle}]\n${c.text}`)
    .join("\n\n");
}
