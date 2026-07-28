import type { RagChunk } from "./types";

const CHUNK_SIZE = 900;
const CHUNK_OVERLAP = 120;

export function chunkText(text: string): RagChunk[] {
  const cleaned = text.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
  if (!cleaned) return [];

  const chunks: RagChunk[] = [];
  let start = 0;
  let index = 0;

  while (start < cleaned.length) {
    let end = Math.min(start + CHUNK_SIZE, cleaned.length);
    if (end < cleaned.length) {
      const slice = cleaned.slice(start, end);
      const breakAt = Math.max(slice.lastIndexOf("\n\n"), slice.lastIndexOf(". "), slice.lastIndexOf("\n"));
      if (breakAt > CHUNK_SIZE * 0.4) {
        end = start + breakAt + 1;
      }
    }

    const piece = cleaned.slice(start, end).trim();
    if (piece) {
      chunks.push({
        id: `c${index}`,
        text: piece,
        index,
      });
      index += 1;
    }

    if (end >= cleaned.length) break;
    start = Math.max(end - CHUNK_OVERLAP, start + 1);
  }

  return chunks;
}
