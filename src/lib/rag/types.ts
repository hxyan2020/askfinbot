export type RagDocType = "textbook" | "testbank" | "notes" | "other";
export type ContentAuthor = "human" | "ai";

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
  /** Who first saved this material. */
  createdBy?: ContentAuthor;
  /** Who last changed the body text. */
  lastModifiedBy?: ContentAuthor;
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
  createdBy: ContentAuthor;
  lastModifiedBy: ContentAuthor;
}
