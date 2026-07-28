import type { LLMProvider } from "./constants";

/** Mainland China timezones (excludes Hong Kong, Macau, Taiwan). */
const MAINLAND_CHINA_TIMEZONES = new Set([
  "Asia/Shanghai",
  "Asia/Chongqing",
  "Asia/Harbin",
  "Asia/Urumqi",
  "Asia/Kashgar",
]);

/**
 * Best-effort client-side signal that the user is in mainland China,
 * where Gemini is typically unreachable without a VPN.
 */
export function isLikelyMainlandChina(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone && MAINLAND_CHINA_TIMEZONES.has(timeZone)) return true;
  } catch {
    /* ignore */
  }

  const languages = [
    navigator.language,
    ...(navigator.languages ?? []),
  ]
    .filter(Boolean)
    .map((lang) => lang.toLowerCase());

  // zh-CN alone is weak (diaspora), so require it plus an Asia/* timezone
  // that is not HK/TW/MO.
  const hasZhCn = languages.some(
    (lang) => lang === "zh-cn" || lang.startsWith("zh-cn-") || lang === "zh"
  );
  if (!hasZhCn) return false;

  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (
      timeZone.startsWith("Asia/") &&
      !["Asia/Hong_Kong", "Asia/Macau", "Asia/Taipei"].includes(timeZone)
    ) {
      return MAINLAND_CHINA_TIMEZONES.has(timeZone) || timeZone === "Asia/Shanghai";
    }
  } catch {
    /* ignore */
  }

  return false;
}

export function preferredProviderForLocale(
  stored: LLMProvider | null
): LLMProvider {
  if (stored === "deepseek" || stored === "gemini") return stored;
  return isLikelyMainlandChina() ? "deepseek" : "gemini";
}
