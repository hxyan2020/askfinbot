import { promises as fs } from "fs";
import path from "path";

export type MentorConversationStatus = "pending" | "matched" | "closed";
export type MentorMessageRole = "user" | "assistant" | "mentor";

export interface MentorConversationMessage {
  id: string;
  role: MentorMessageRole;
  content: string;
  createdAt: string;
}

export interface MentorConversation {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  examId: string;
  examName: string;
  status: MentorConversationStatus;
  messages: MentorConversationMessage[];
  createdAt: string;
  updatedAt: string;
  matchedAt?: string;
  closedAt?: string;
  telegramAlert: "sent" | "not-configured" | "failed";
}

export type PublicMentorConversation = Omit<
  MentorConversation,
  "userId" | "userName" | "userEmail" | "telegramAlert"
>;

const STORE_FILE = path.join(process.cwd(), "data", "mentor-conversations.json");
const MAX_ACTIVE_PER_USER = 1;
const MAX_TRANSCRIPT_MESSAGES = 50;
const MAX_MESSAGE_LENGTH = 8_000;
let mutationQueue: Promise<unknown> = Promise.resolve();

async function ensureStore() {
  await fs.mkdir(path.dirname(STORE_FILE), { recursive: true });
  try {
    await fs.access(STORE_FILE);
  } catch {
    await fs.writeFile(STORE_FILE, "[]", "utf8");
  }
}

async function readAll(): Promise<MentorConversation[]> {
  await ensureStore();
  try {
    return JSON.parse(await fs.readFile(STORE_FILE, "utf8")) as MentorConversation[];
  } catch {
    return [];
  }
}

async function writeAll(items: MentorConversation[]) {
  await ensureStore();
  const temporaryFile = `${STORE_FILE}.${process.pid}.tmp`;
  await fs.writeFile(temporaryFile, JSON.stringify(items, null, 2), "utf8");
  await fs.rename(temporaryFile, STORE_FILE);
}

function mutate<T>(fn: (items: MentorConversation[]) => T | Promise<T>): Promise<T> {
  const operation = mutationQueue.then(async () => {
    const items = await readAll();
    const result = await fn(items);
    await writeAll(items);
    return result;
  });
  mutationQueue = operation.then(
    () => undefined,
    () => undefined
  );
  return operation;
}

function cleanContent(content: string): string {
  return content.trim().slice(0, MAX_MESSAGE_LENGTH);
}

function toMessage(
  role: MentorMessageRole,
  content: string,
  createdAt = new Date().toISOString()
): MentorConversationMessage {
  return { id: crypto.randomUUID(), role, content: cleanContent(content), createdAt };
}

export function toPublicMentorConversation(
  item: MentorConversation
): PublicMentorConversation {
  return {
    id: item.id,
    examId: item.examId,
    examName: item.examName,
    status: item.status,
    messages: item.messages,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    matchedAt: item.matchedAt,
    closedAt: item.closedAt,
  };
}

export async function createMentorConversation(input: {
  userId: string;
  userName: string;
  userEmail: string;
  examId: string;
  examName: string;
  transcript: Array<{ role: "user" | "assistant"; content: string }>;
}): Promise<{ conversation: MentorConversation; created: boolean }> {
  const transcript = input.transcript
    .slice(-MAX_TRANSCRIPT_MESSAGES)
    .map((message) => toMessage(message.role, message.content))
    .filter((message) => message.content);
  if (!transcript.some((message) => message.role === "user")) {
    throw new Error("Ask at least one question before requesting a mentor.");
  }

  return mutate((items) => {
    const active = items.find(
      (item) => item.userId === input.userId && item.status !== "closed"
    );
    if (active) {
      if (active.examId !== input.examId) {
        throw new Error(
          `Close your active ${active.examName} mentor conversation before starting another.`
        );
      }
      return { conversation: active, created: false };
    }
    if (
      items.filter((item) => item.userId === input.userId && item.status !== "closed")
        .length >= MAX_ACTIVE_PER_USER
    ) {
      throw new Error("You already have an active mentor conversation.");
    }
    const now = new Date().toISOString();
    const item: MentorConversation = {
      id: crypto.randomUUID(),
      userId: input.userId,
      userName: input.userName,
      userEmail: input.userEmail,
      examId: input.examId,
      examName: input.examName,
      status: "pending",
      messages: transcript,
      createdAt: now,
      updatedAt: now,
      telegramAlert: "not-configured",
    };
    items.push(item);
    return { conversation: item, created: true };
  });
}

export async function setTelegramAlertStatus(
  id: string,
  status: MentorConversation["telegramAlert"]
): Promise<void> {
  await mutate((items) => {
    const item = items.find((candidate) => candidate.id === id);
    if (!item) return;
    item.telegramAlert = status;
    item.updatedAt = new Date().toISOString();
  });
}

export async function getMentorConversationForUser(
  id: string,
  userId: string
): Promise<MentorConversation | null> {
  return (await readAll()).find((item) => item.id === id && item.userId === userId) ?? null;
}

export async function getMentorConversationsForUser(
  userId: string
): Promise<PublicMentorConversation[]> {
  return (await readAll())
    .filter((item) => item.userId === userId)
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .map(toPublicMentorConversation);
}

export async function getAllMentorConversations(): Promise<MentorConversation[]> {
  return (await readAll()).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function getMentorConversationById(
  id: string
): Promise<MentorConversation | null> {
  return (await readAll()).find((item) => item.id === id) ?? null;
}

export async function startMentorConversation(id: string): Promise<MentorConversation | null> {
  return mutate((items) => {
    const item = items.find((candidate) => candidate.id === id);
    if (!item) return null;
    if (item.status === "pending") {
      item.status = "matched";
      item.matchedAt = new Date().toISOString();
      item.updatedAt = item.matchedAt;
    }
    return item;
  });
}

export async function closeMentorConversation(id: string): Promise<MentorConversation | null> {
  return mutate((items) => {
    const item = items.find((candidate) => candidate.id === id);
    if (!item) return null;
    item.status = "closed";
    item.closedAt = new Date().toISOString();
    item.updatedAt = item.closedAt;
    return item;
  });
}

export async function addMentorMessage(input: {
  id: string;
  role: "user" | "mentor";
  content: string;
  userId?: string;
}): Promise<MentorConversation | null> {
  const content = cleanContent(input.content);
  if (!content) throw new Error("Message cannot be empty.");
  return mutate((items) => {
    const item = items.find((candidate) => candidate.id === input.id);
    if (!item || (input.userId && item.userId !== input.userId)) return null;
    if (item.status === "closed") throw new Error("This mentor conversation is closed.");
    if (item.status !== "matched") {
      throw new Error("Please wait until a mentor starts the conversation.");
    }
    if (item.messages.length >= 500) {
      throw new Error("This conversation has reached its message limit. Ask the mentor to close it and start a new request.");
    }
    const now = new Date().toISOString();
    item.messages.push(toMessage(input.role, content, now));
    item.updatedAt = now;
    return item;
  });
}
