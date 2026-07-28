import { NextRequest, NextResponse } from "next/server";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import {
  createFlashcard,
  deleteFlashcard,
  listFlashcards,
  updateFlashcard,
} from "@/lib/flashcards";
import { getExamById } from "@/lib/exams";

async function requireUser() {
  return getSessionUserIdFromCookies();
}

export async function GET(request: NextRequest) {
  const userId = await requireUser();
  if (!userId) return NextResponse.json({ error: "Please log in." }, { status: 401 });

  const examId = new URL(request.url).searchParams.get("examId") || undefined;
  if (examId && !getExamById(examId)) {
    return NextResponse.json({ error: "Invalid exam." }, { status: 400 });
  }

  const cards = await listFlashcards(userId, examId);
  return NextResponse.json({ cards });
}

export async function POST(request: NextRequest) {
  const userId = await requireUser();
  if (!userId) {
    return NextResponse.json({ error: "Please log in to save flashcards." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const card = await createFlashcard({
      userId,
      examId: String(body.examId || ""),
      content: String(body.content || ""),
    });
    return NextResponse.json({ card });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not save flashcard.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function PATCH(request: NextRequest) {
  const userId = await requireUser();
  if (!userId) return NextResponse.json({ error: "Please log in." }, { status: 401 });

  try {
    const body = await request.json();
    const card = await updateFlashcard(userId, String(body.id || ""), {
      highlighted: typeof body.highlighted === "boolean" ? body.highlighted : undefined,
      note: typeof body.note === "string" ? body.note : undefined,
    });
    if (!card) return NextResponse.json({ error: "Flashcard not found." }, { status: 404 });
    return NextResponse.json({ card });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Update failed.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const userId = await requireUser();
  if (!userId) return NextResponse.json({ error: "Please log in." }, { status: 401 });

  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing flashcard id." }, { status: 400 });

  const ok = await deleteFlashcard(userId, id);
  if (!ok) return NextResponse.json({ error: "Flashcard not found." }, { status: 404 });
  return NextResponse.json({ ok: true });
}
