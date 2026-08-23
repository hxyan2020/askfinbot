import { MENTORS, getMentorsByExam, type MentorProfile } from "@/lib/mentors";

const STORAGE_KEY = "askfinbot_bot_avatar_day";

function todayKey(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Photos shown on About — the only allowed bot avatars. */
function mentorPhotoSet(): Set<string> {
  return new Set(MENTORS.map((m) => m.photo).filter(Boolean));
}

function poolForExam(examId?: string | null): MentorProfile[] {
  if (examId) {
    const focused = getMentorsByExam(examId).filter((m) => m.photo);
    if (focused.length) return focused;
  }
  return MENTORS.filter((m) => m.photo);
}

function pickRandom(pool: MentorProfile[]): MentorProfile {
  return pool[Math.floor(Math.random() * pool.length)] || MENTORS[0];
}

/**
 * Daily-stable tutor face chosen only from About-page mentor profiles.
 * Prefers mentors whose focusExamIds include the active exam.
 */
export function pickBotAvatar(examId?: string | null): string {
  const pool = poolForExam(examId);
  const fallback = pool[0]?.photo || MENTORS[0]?.photo || "/mentors/mentor-1.jpg";
  const allowed = mentorPhotoSet();

  if (typeof window === "undefined") {
    return fallback;
  }

  const storageKey = examId ? `${STORAGE_KEY}:${examId}` : STORAGE_KEY;

  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      const parsed = JSON.parse(raw) as { day?: string; path?: string };
      if (
        parsed.day === todayKey() &&
        typeof parsed.path === "string" &&
        allowed.has(parsed.path) &&
        pool.some((m) => m.photo === parsed.path)
      ) {
        return parsed.path;
      }
    }
  } catch {
    /* ignore corrupt storage */
  }

  const mentor = pickRandom(pool);
  const path = mentor.photo || fallback;
  try {
    localStorage.setItem(storageKey, JSON.stringify({ day: todayKey(), path }));
  } catch {
    /* ignore quota / private mode */
  }
  return path;
}

/** Deterministic mentor photo for marketing demos (still from MENTORS only). */
export function demoBotAvatar(examId = "frm"): string {
  const pool = poolForExam(examId);
  return pool[0]?.photo || MENTORS[0]?.photo || "/mentors/mentor-1.jpg";
}
