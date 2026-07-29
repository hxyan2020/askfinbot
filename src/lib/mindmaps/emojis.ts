/** Sparse emoji hints for important mindmap nodes only. */
const RULES: { match: RegExp; emoji: string }[] = [
  { match: /\bethics?\b|\bconduct\b|\bfiduciary\b|\bgovernance\b/i, emoji: "⚖️" },
  { match: /\bportfolio\b|\basset allocation\b|\binvestment\b/i, emoji: "📊" },
  { match: /\bfixed.?income\b|\bbond\b|\bduration\b/i, emoji: "📈" },
  { match: /\bequity\b|\bstock\b|\bvaluation\b/i, emoji: "💹" },
  { match: /\bderivative|\boption|\bfuture|\bswap\b/i, emoji: "📉" },
  { match: /\brisk\b|\bvar\b|\bmarket risk\b|\bcredit risk\b/i, emoji: "🛡️" },
  { match: /\baudit\b|\bassuranc|\binternal control\b/i, emoji: "🔍" },
  { match: /\btax\b|\btaxation\b/i, emoji: "🧾" },
  { match: /\bfinancial.?report|\baccount|\bifrs\b|\bgap\b/i, emoji: "📚" },
  { match: /\beconomics?\b|\bmacro\b|\bmicro\b/i, emoji: "🌐" },
  { match: /\bquant|\bstatistic|\bprobability\b/i, emoji: "🔢" },
  { match: /\balternative|\bhedge fund|\bprivate equity|\breal estate\b/i, emoji: "🏛️" },
  { match: /\besg\b|\bsustainab|\bclimate\b/i, emoji: "🌱" },
  { match: /\bstrategy\b|\bleadership\b|\bbusiness\b/i, emoji: "🧭" },
  { match: /\btechnical|\bchart|\bcandlestick|\btrend\b/i, emoji: "📡" },
  { match: /\bcorporate.?finance|\bwacc\b|\bcapital\b/i, emoji: "🏢" },
  { match: /\bmoney\b|\bbanking\b|\bliquidity\b/i, emoji: "🏦" },
  { match: /\bexam\b|\btest point\b|\bscoring\b/i, emoji: "🎯" },
];

const EXAM_EMOJI: Record<string, string> = {
  cfa: "🎓",
  frm: "🛡️",
  cpa: "📋",
  acca: "🌍",
  caia: "🏛️",
  cfp: "🧭",
  sie: "🏛️",
  cima: "📐",
  cmt: "📡",
  "cfa-esg": "🌱",
};

export function emojiForExam(examId: string): string | undefined {
  return EXAM_EMOJI[examId];
}

export function emojiForLabel(
  label: string,
  kind: "module" | "area" | "test-group"
): string | undefined {
  if (kind === "test-group") return "🎯";
  for (const rule of RULES) {
    if (rule.match.test(label)) return rule.emoji;
  }
  return undefined;
}
