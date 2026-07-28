import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated, unauthorized } from "@/lib/admin-auth";
import { getExamById } from "@/lib/exams";
import { extractTextFromFile } from "@/lib/rag/extract";
import {
  deleteDocument,
  getDocument,
  listDocuments,
  saveDocument,
  updateDocumentMeta,
} from "@/lib/rag/store";
import type { RagDocType } from "@/lib/rag/types";

interface Params {
  params: Promise<{ examId: string }>;
}

export async function GET(_request: NextRequest, { params }: Params) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  const { examId } = await params;
  if (!getExamById(examId)) {
    return NextResponse.json({ error: "Invalid exam." }, { status: 400 });
  }
  const documents = await listDocuments(examId);
  return NextResponse.json({ documents });
}

export async function POST(request: NextRequest, { params }: Params) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  const { examId } = await params;
  if (!getExamById(examId)) {
    return NextResponse.json({ error: "Invalid exam." }, { status: 400 });
  }

  const contentType = request.headers.get("content-type") || "";

  try {
    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      const file = form.get("file");
      const title = String(form.get("title") || "");
      const type = (String(form.get("type") || "textbook") as RagDocType) || "textbook";

      if (!(file instanceof File)) {
        return NextResponse.json({ error: "File is required." }, { status: 400 });
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const text = await extractTextFromFile(buffer, file.name, file.type);
      if (!text || text.length < 20) {
        return NextResponse.json(
          { error: "Could not extract enough text from this file." },
          { status: 400 }
        );
      }

      const doc = await saveDocument({
        examId,
        title: title || file.name.replace(/\.[^.]+$/, ""),
        type,
        content: text,
        fileName: file.name,
        mimeType: file.type,
      });

      return NextResponse.json({
        document: {
          id: doc.id,
          title: doc.title,
          type: doc.type,
          chunkCount: doc.chunks.length,
          charCount: doc.content.length,
        },
      });
    }

    const body = await request.json();
    const content = String(body.content || "").trim();
    if (!content) {
      return NextResponse.json({ error: "Content is required." }, { status: 400 });
    }

    const doc = await saveDocument({
      examId,
      title: String(body.title || "Untitled"),
      type: (body.type as RagDocType) || "notes",
      content,
    });

    return NextResponse.json({
      document: {
        id: doc.id,
        title: doc.title,
        type: doc.type,
        chunkCount: doc.chunks.length,
        charCount: doc.content.length,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  const { examId } = await params;
  const body = await request.json();
  const docId = String(body.id || "");
  if (!docId) return NextResponse.json({ error: "Document id required." }, { status: 400 });

  const updated = await updateDocumentMeta(examId, docId, {
    title: body.title,
    type: body.type,
    content: body.content,
  });

  if (!updated) return NextResponse.json({ error: "Document not found." }, { status: 404 });
  return NextResponse.json({
    document: {
      id: updated.id,
      title: updated.title,
      type: updated.type,
      chunkCount: updated.chunks.length,
      charCount: updated.content.length,
      content: updated.content,
    },
  });
}

export async function DELETE(request: NextRequest, { params }: Params) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  const { examId } = await params;
  const { searchParams } = new URL(request.url);
  const docId = searchParams.get("id");
  if (!docId) return NextResponse.json({ error: "Document id required." }, { status: 400 });

  const ok = await deleteDocument(examId, docId);
  if (!ok) return NextResponse.json({ error: "Document not found." }, { status: 404 });
  return NextResponse.json({ ok: true });
}

export async function PATCH(request: NextRequest, { params }: Params) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  const { examId } = await params;
  const body = await request.json();
  const docId = String(body.id || "");
  const doc = await getDocument(examId, docId);
  if (!doc) return NextResponse.json({ error: "Document not found." }, { status: 404 });
  return NextResponse.json({ document: doc });
}
