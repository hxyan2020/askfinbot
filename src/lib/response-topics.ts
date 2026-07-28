const STOP_WORDS = new Set([
  "about",
  "advanced",
  "analysis",
  "and",
  "applied",
  "basics",
  "concepts",
  "current",
  "exam",
  "foundations",
  "introduction",
  "management",
  "other",
  "professional",
  "strategic",
  "the",
  "topics",
  "with",
]);

const NON_EXAM_CHITCHAT =
  /^(hi|hello|hey|yo|sup|hola|你好|嗨|哈喽|您好|早上好|晚上好|午安|thanks|thank you|thx|ty|ok|okay|k|bye|goodbye|good morning|good afternoon|good evening|good night|how are you|how r you|what'?s up|whats up|nice to meet you|greetings)[\s!.?？！。]*$/i;

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function scoreTopic(topic: string, text: string): number {
  const normalizedTopic = normalize(topic);
  if (!normalizedTopic) return 0;

  let score = text.includes(normalizedTopic) ? 20 : 0;
  const words = normalizedTopic
    .split(" ")
    .filter((word) => word.length >= 4 && !STOP_WORDS.has(word));

  for (const word of new Set(words)) {
    if (text.includes(word)) score += 2;
  }

  return score;
}

export function isNonExamChitchat(userMessage: string): boolean {
  const text = userMessage.trim();
  if (!text) return true;
  if (NON_EXAM_CHITCHAT.test(text)) return true;
  // Very short messages with no letters that look like study content
  if (text.length <= 12 && !/[a-z]{4,}/i.test(text) && !/[\u4e00-\u9fff]{2,}/.test(text)) {
    return true;
  }
  return false;
}

function stripRelevantTopicsFooter(reply: string, examName: string): string {
  const heading = `Relevant ${examName} topics`;
  const pattern = new RegExp(
    `(?:\\n+|^)(?:#{1,6}\\s*)?${escapeRegExp(heading)}\\s*:?\\s*[\\s\\S]*$`,
    "i"
  );
  return reply.replace(pattern, "").trimEnd();
}

export function ensureRelevantTopicsFooter(
  reply: string,
  examName: string,
  topics: string[],
  userMessage: string
): string {
  const heading = `Relevant ${examName} topics`;

  // Greetings / small talk should never show a syllabus footer.
  if (isNonExamChitchat(userMessage)) {
    return stripRelevantTopicsFooter(reply, examName);
  }

  if (reply.toLowerCase().includes(heading.toLowerCase())) return reply;

  const text = normalize(`${userMessage} ${reply}`);
  const ranked = topics
    .map((topic, index) => ({ topic, index, score: scoreTopic(topic, text) }))
    .sort((a, b) => b.score - a.score || a.index - b.index);

  const matched = ranked.filter((item) => item.score > 0).slice(0, 3);
  // Only attach topics when the turn actually matches syllabus content.
  if (matched.length === 0) return reply.trim();

  const topicLines = matched.map(({ topic }) => `- ${topic}`).join("\n");
  return `${reply.trim()}\n\n### ${heading}\n${topicLines}`;
}
