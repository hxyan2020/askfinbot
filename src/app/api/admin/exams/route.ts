import { NextResponse } from "next/server";
import { isAdminAuthenticated, unauthorized } from "@/lib/admin-auth";
import { FINANCIAL_EXAMS } from "@/lib/exams";
import { countDocumentsByExam } from "@/lib/rag/store";

export async function GET() {
  if (!(await isAdminAuthenticated())) return unauthorized();

  const counts = await countDocumentsByExam();
  const exams = FINANCIAL_EXAMS.map((exam) => ({
    ...exam,
    documentCount: counts[exam.id] || 0,
  }));

  return NextResponse.json({ exams });
}
