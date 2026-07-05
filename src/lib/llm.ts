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
}

export async function generateReply({
  provider,
  examName,
  examFullName,
  topics,
  messages,
  userMessage,
}: GenerateReplyParams): Promise<string> {
  const systemPrompt = buildSystemPrompt(examName, examFullName, topics, provider);

  if (provider === "deepseek") {
    return callDeepSeek(systemPrompt, messages, userMessage);
  }

  return callGemini(systemPrompt, messages, userMessage);
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
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
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
      max_tokens: 1024,
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
