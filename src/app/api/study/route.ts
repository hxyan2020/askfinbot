import { NextRequest, NextResponse } from "next/server";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import { getSyllabus, buildStudyPlan } from "@/lib/syllabus";
import {
  createPortfolio,
  deletePortfolio,
  getPortfolio,
  updateModuleProgress,
} from "@/lib/portfolio";
import { getDefaultLevelId, getExamById, getExamLevel } from "@/lib/exams";

async function requireUser() {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) return null;
  return userId;
}

export async function GET(request: NextRequest) {
  const userId = await requireUser();
  if (!userId) return NextResponse.json({ error: "Please log in." }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const examId = searchParams.get("examId");
  if (examId) {
    const exam = getExamById(examId);
    if (!exam) {
      return NextResponse.json({ error: "Invalid exam." }, { status: 400 });
    }
    const levelId = searchParams.get("levelId") || getDefaultLevelId(examId);
    if (!getExamLevel(examId, levelId)) {
      return NextResponse.json({ error: "Invalid level." }, { status: 400 });
    }
    const syllabus = getSyllabus(examId, levelId);
    if (!syllabus) {
      return NextResponse.json({ error: "Syllabus not found." }, { status: 400 });
    }
    return NextResponse.json({ syllabus, exam, levelId });
  }

  const portfolio = await getPortfolio(userId);
  return NextResponse.json({ portfolio });
}

export async function POST(request: NextRequest) {
  const userId = await requireUser();
  if (!userId) return NextResponse.json({ error: "Please log in to use Study Path." }, { status: 401 });

  try {
    const body = await request.json();
    const action = String(body.action || "preview");
    const examId = String(body.examId || "");
    const levelId = String(body.levelId || getDefaultLevelId(examId));

    if (action === "preview") {
      const plan = buildStudyPlan({
        examId,
        levelId,
        hoursPerDay: Number(body.hoursPerDay || 0),
        daysUntilExam: Number(body.daysUntilExam || 0),
      });
      return NextResponse.json({ plan });
    }

    if (action === "acknowledge") {
      if (!getExamById(examId) || !getExamLevel(examId, levelId)) {
        return NextResponse.json({ error: "Invalid exam or level." }, { status: 400 });
      }
      const portfolio = await createPortfolio({
        userId,
        examId,
        levelId,
        hoursPerDay: Number(body.hoursPerDay || 2),
        daysUntilExam: Number(body.daysUntilExam || 90),
        examDate: String(body.examDate || ""),
      });
      return NextResponse.json({ portfolio });
    }

    return NextResponse.json({ error: "Unknown action." }, { status: 400 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Request failed.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  const userId = await requireUser();
  if (!userId) return NextResponse.json({ error: "Please log in." }, { status: 401 });

  const body = await request.json();
  const portfolio = await updateModuleProgress(userId, String(body.moduleId || ""), {
    completedHours: body.completedHours,
    done: body.done,
  });
  if (!portfolio) return NextResponse.json({ error: "No portfolio found." }, { status: 404 });
  return NextResponse.json({ portfolio });
}

export async function DELETE() {
  const userId = await requireUser();
  if (!userId) return NextResponse.json({ error: "Please log in." }, { status: 401 });
  await deletePortfolio(userId);
  return NextResponse.json({ ok: true });
}
