import { NextRequest, NextResponse } from "next/server";
import { buildMindmap, listMindmapExams } from "@/lib/mindmaps";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const examId = searchParams.get("examId");
  const levelId = searchParams.get("levelId") || undefined;

  if (!examId) {
    return NextResponse.json({ exams: listMindmapExams() });
  }

  const payload = buildMindmap(examId, levelId);
  if (!payload) {
    return NextResponse.json({ error: "Mind map not found for that qualification." }, { status: 404 });
  }
  return NextResponse.json(payload);
}
