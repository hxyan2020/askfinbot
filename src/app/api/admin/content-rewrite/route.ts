import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated, unauthorized } from "@/lib/admin-auth";

type ChatTurn = { role: "user" | "assistant"; content: string };

const SYSTEM = `You revise a selected passage from AskFinBots finance-exam study material.
Return JSON only, no markdown fences:
{"suggestion":"<replacement text for the selection only>","note":"<one short sentence on what changed>"}
Rules:
- suggestion replaces the selection exactly. Do not include surrounding text the user did not select.
- Keep exam facts accurate. If asked to double-check and the passage is already correct, return it unchanged and say so in note.
- If asked to sound human, rewrite stiff or robotic wording into clear tutor language without adding hype.
- If asked to enrich, add concrete, syllabus-relevant detail that belongs in this passage.
- Do not invent citations, pass rates, or dollar figures you are not sure about. Flag uncertainty in note.`;

async function callModel(history: ChatTurn[], userMessage: string): Promise<string> {
  const geminiKey = process.env.GEMINI_API_KEY;
  if (geminiKey) {
    const contents = [
      ...history.map((msg) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      })),
      { role: "user", parts: [{ text: userMessage }] },
    ];
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM }] },
          contents,
          generationConfig: { temperature: 0.4, maxOutputTokens: 2048 },
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) return String(text).trim();
    }
  }

  const deepseekKey = process.env.DEEPSEEK_API_KEY;
  if (!deepseekKey) throw new Error("No AI provider is configured.");
  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${deepseekKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: SYSTEM },
        ...history,
        { role: "user", content: userMessage },
      ],
      temperature: 0.4,
      max_tokens: 2048,
    }),
  });
  if (!response.ok) throw new Error("AI rewrite failed.");
  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error("AI returned an empty suggestion.");
  return String(text).trim();
}

function parseSuggestion(raw: string): { suggestion: string; note: string } {
  const trimmed = raw.replace(/^```json\s*/i, "").replace(/```$/, "").trim();
  try {
    const parsed = JSON.parse(trimmed) as { suggestion?: string; note?: string };
    if (parsed.suggestion?.trim()) {
      return { suggestion: parsed.suggestion.trim(), note: String(parsed.note || "").trim() };
    }
  } catch {
    /* fall through */
  }
  return { suggestion: trimmed, note: "" };
}

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) return unauthorized();

  try {
    const body = await request.json();
    const selected = String(body.selected || "").trim();
    const instruction = String(body.instruction || "").trim();
    const history = Array.isArray(body.messages)
      ? (body.messages as ChatTurn[])
          .filter((item) => item && (item.role === "user" || item.role === "assistant") && item.content)
          .slice(-12)
          .map((item) => ({ role: item.role, content: String(item.content).slice(0, 8000) }))
      : [];

    if (!selected) {
      return NextResponse.json({ error: "Select some text first." }, { status: 400 });
    }
    if (!instruction) {
      return NextResponse.json({ error: "Say what to improve." }, { status: 400 });
    }
    if (selected.length > 12000) {
      return NextResponse.json({ error: "Select a shorter passage (under 12,000 characters)." }, { status: 400 });
    }

    const userMessage = `Selected passage:\n"""${selected}"""\n\nRequest:\n${instruction}`;
    const raw = await callModel(history, userMessage);
    const parsed = parseSuggestion(raw);
    return NextResponse.json({
      suggestion: parsed.suggestion,
      note: parsed.note,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Rewrite failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
