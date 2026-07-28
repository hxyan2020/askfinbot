import { NextRequest, NextResponse } from "next/server";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import { getCourseware, resolveCourseware } from "@/lib/courseware";

export async function GET(request: NextRequest) {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) {
    return NextResponse.json({ error: "Please log in." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const moduleId = searchParams.get("moduleId") || "";
  const examId = searchParams.get("examId") || "";
  const levelId = searchParams.get("levelId") || "";
  const title = searchParams.get("title") || "";

  if (!moduleId && !title) {
    return NextResponse.json({ error: "moduleId or title required." }, { status: 400 });
  }

  const courseware =
    getCourseware(moduleId) ||
    (examId && title ? resolveCourseware(examId, levelId, moduleId, title) : undefined);

  if (!courseware) {
    return NextResponse.json({ error: "No courseware for this module yet." }, { status: 404 });
  }

  return NextResponse.json({ courseware });
}
