const MENTOR_PHOTO_COUNT = 76;
const STORAGE_KEY = "askfinbot_bot_avatar_day";

function todayKey(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function randomAvatarPath(): string {
  const index = Math.floor(Math.random() * MENTOR_PHOTO_COUNT) + 1;
  return `/mentors/mentor-${index}.jpg`;
}

/** Tutor photo that stays the same for the calendar day, then rotates next day. */
export function pickBotAvatar(): string {
  if (typeof window === "undefined") {
    return "/mentors/mentor-1.jpg";
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { day?: string; path?: string };
      if (parsed.day === todayKey() && typeof parsed.path === "string" && parsed.path) {
        return parsed.path;
      }
    }
  } catch {
    /* ignore corrupt storage */
  }

  const path = randomAvatarPath();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ day: todayKey(), path }));
  } catch {
    /* ignore quota / private mode */
  }
  return path;
}
