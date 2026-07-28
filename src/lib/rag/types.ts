export type RagDocType = "textbook" | "testbank" | "notes" | "other";

export interface RagChunk {
  id: string;
  text: string;
  index: number;
}

export interface RagDocument {
  id: string;
  examId: string;
  title: string;
  type: RagDocType;
  fileName?: string;
  mimeType?: string;
  content: string;
  chunks: RagChunk[];
  createdAt: string;
  updatedAt: string;
}

export interface RagDocumentSummary {
  id: string;
  examId: string;
  title: string;
  type: RagDocType;
  fileName?: string;
  chunkCount: number;
  charCount: number;
  createdAt: string;
  updatedAt: string;
}
