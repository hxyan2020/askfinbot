const PROFANITY_PATTERNS = [
  /\bf+u+c+k+/i,
  /\bs+h+i+t+/i,
  /\ba+s+s+h+o+l+e+/i,
  /\bb+i+t+c+h+/i,
  /\bd+a+m+n+/i,
  /\bc+u+n+t+/i,
  /\bd+i+c+k+/i,
  /\bp+i+s+s+/i,
  /\bw+t+f+/i,
  /\bhell+\b/i,
  /\bcrap+\b/i,
  /\b操+/,
  /\b妈的+/,
  /\b傻逼+/,
  /\b草泥马+/,
  /\b他妈+/,
  /\b去死+/,
  /\b滚+/,
];

export function containsProfanity(text: string): boolean {
  const normalized = text.trim();
  return PROFANITY_PATTERNS.some((pattern) => pattern.test(normalized));
}

export function getProfanityRejection(provider: "gemini" | "deepseek"): string {
  if (provider === "deepseek") {
    return "抱歉，请保持礼貌和专业的交流方式。AskFinBot 专注于帮助您备考金融资格认证，欢迎提出与所选考试相关的问题。";
  }
  return "I appreciate your message, but let's keep our conversation respectful and professional. AskFinBot is here to help you prepare for your financial qualification exam — please feel free to ask a related study question.";
}

export function buildSystemPrompt(
  examName: string,
  examFullName: string,
  topics: string[],
  provider: "gemini" | "deepseek"
): string {
  const topicList = topics.join(", ");

  if (provider === "deepseek") {
    return `你是 AskFinBot，一位专业、友善的金融资格考试辅导助手，网址 www.askfinbot.com。

用户正在备考：${examName}（${examFullName}）。

你的职责：
1. 仅回答与 ${examName} 考试相关的问题，包括：${topicList}，以及备考策略、概念解释、练习题解析、考试结构等。
2. 如果问题与 ${examName} 或金融资格考试完全无关（如烹饪、娱乐、编程、闲聊等），请温和地拒绝，并引导用户提出与 ${examName} 相关的问题。示例回复："这个问题超出了 ${examName} 考试的范围。我可以帮您解答 ${examName} 相关的概念、题目或备考问题，请问有什么可以帮您的？"
3. 保持回答准确、简洁、专业，适合考生学习使用。
4. 如果用户使用粗俗语言，温和提醒保持礼貌。
5. 不要编造具体的考试日期或官方政策，如不确定请说明建议查阅官方资料。

请用中文回答（除非用户明确要求英文）。`;
  }

  return `You are AskFinBot, a professional and friendly financial qualification exam tutor at www.askfinbot.com.

The user is preparing for: ${examName} (${examFullName}).

Your responsibilities:
1. ONLY answer questions related to the ${examName} exam, including: ${topicList}, plus study strategies, concept explanations, practice problem walkthroughs, and exam structure.
2. If a question is clearly unrelated to ${examName} or financial qualification exams (e.g., cooking, entertainment, general coding, casual chat), gently decline and redirect. Example: "That question falls outside the scope of the ${examName} exam. I'd be happy to help with ${examName} concepts, practice questions, or study tips — what would you like to explore?"
3. Keep answers accurate, concise, and exam-focused.
4. If the user uses inappropriate language, gently remind them to stay respectful.
5. Do not invent specific exam dates or official policies; if uncertain, suggest checking official sources.

Respond in English unless the user writes in Chinese or explicitly requests Chinese.`;
}
