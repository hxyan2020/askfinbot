import { buildSystemPrompt } from "./moderation";
import type { LLMProvider } from "./constants";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface GenerateReplyParams {
  provider: LLMProvider;
  examName: string;
  examFullName: string;
  topics: string[];
  messages: ChatMessage[];
  userMessage: string;
  ragContext?: string;
}

export async function generateReply({
  provider,
  examName,
  examFullName,
  topics,
  messages,
  userMessage,
  ragContext,
}: GenerateReplyParams): Promise<{ reply: string; providerUsed: LLMProvider; fellBack: boolean }> {
  const makePrompt = (p: LLMProvider) => {
    let systemPrompt = buildSystemPrompt(examName, examFullName, topics, p);
    if (ragContext?.trim()) {
      systemPrompt += `\n\nUse the following retrieved excerpts from uploaded textbooks/test banks as primary evidence. Prefer these materials when answering. If they are insufficient, you may use general ${examName} knowledge and note uncertainty.\n\n${ragContext}`;
    }
    return systemPrompt;
  };

  if (provider === "deepseek") {
    const reply = await callDeepSeek(makePrompt("deepseek"), messages, userMessage);
    return { reply, providerUsed: "deepseek", fellBack: false };
  }

  try {
    const reply = await callGemini(makePrompt("gemini"), messages, userMessage);
    return { reply, providerUsed: "gemini", fellBack: false };
  } catch (error) {
    if (!process.env.DEEPSEEK_API_KEY) {
      throw error;
    }
    // Fall back on any Gemini failure (regional blocks, quota, outages, network).
    console.warn("Gemini failed; falling back to DeepSeek:", error instanceof Error ? error.message : error);
    const reply = await callDeepSeek(makePrompt("deepseek"), messages, userMessage);
    return { reply, providerUsed: "deepseek", fellBack: true };
  }
}

async function callGemini(
  systemPrompt: string,
  history: ChatMessage[],
  userMessage: string
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const contents = [
    ...history.map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    })),
    { role: "user", parts: [{ text: userMessage }] },
  ];

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1800,
        },
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("No response from Gemini.");
  }

  return text.trim();
}

async function callDeepSeek(
  systemPrompt: string,
  history: ChatMessage[],
  userMessage: string
): Promise<string> {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    throw new Error("DEEPSEEK_API_KEY is not configured.");
  }

  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: systemPrompt },
        ...history.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
        { role: "user", content: userMessage },
      ],
      temperature: 0.7,
      max_tokens: 1800,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`DeepSeek API error: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content;

  if (!text) {
    throw new Error("No response from DeepSeek.");
  }

  return text.trim();
}
