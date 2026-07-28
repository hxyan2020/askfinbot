import type { MentorConversation } from "./mentor-conversations";

export async function sendMentorRequestAlert(
  conversation: MentorConversation
): Promise<"sent" | "not-configured" | "failed"> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_ADMIN_CHAT_ID?.trim();
  if (!botToken || !chatId) return "not-configured";

  const latestQuestion = [...conversation.messages]
    .reverse()
    .find((message) => message.role === "user")?.content;
  const appUrl = (
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.APP_URL ||
    "https://www.askfinbots.com"
  ).replace(/\/$/, "");
  const text = [
    "New AskFinBots mentor request",
    `Qualification: ${conversation.examName}`,
    `User: ${conversation.userName} (${conversation.userEmail})`,
    `Question: ${(latestQuestion || "See transcript in admin").slice(0, 1_500)}`,
    `Open: ${appUrl}/admin/mentors?conversation=${encodeURIComponent(conversation.id)}`,
  ].join("\n\n");

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(8_000),
    });
    return response.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}
