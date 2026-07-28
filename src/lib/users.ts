import bcrypt from "bcryptjs";
import { promises as fs } from "fs";
import path from "path";
import { FREE_TOKENS } from "@/lib/constants";
import {
  addOneMonth,
  type MembershipSnapshot,
  type MembershipStatus,
} from "@/lib/membership";

export interface UserRecord {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  examId: string | null;
  tokens: number;
  createdAt: string;
  updatedAt: string;
  stripeCustomerId?: string | null;
  stripeSubscriptionId?: string | null;
  membershipPackageId?: string | null;
  membershipPackageName?: string | null;
  membershipRenewsAt?: string | null;
  membershipCancelAtPeriodEnd?: boolean;
  creditedPurchaseIds?: string[];
  resetTokenHash?: string | null;
  resetTokenExpiresAt?: string | null;
}

export type PublicUser = {
  id: string;
  email: string;
  name: string;
  examId: string | null;
  tokens: number;
  membership: MembershipSnapshot;
};

const USERS_FILE = path.join(process.cwd(), "data", "users.json");
let mutationQueue: Promise<unknown> = Promise.resolve();

async function ensureStore() {
  await fs.mkdir(path.dirname(USERS_FILE), { recursive: true });
  try {
    await fs.access(USERS_FILE);
  } catch {
    await fs.writeFile(USERS_FILE, "[]", "utf8");
  }
}

async function readUsers(): Promise<UserRecord[]> {
  await ensureStore();
  const raw = await fs.readFile(USERS_FILE, "utf8");
  try {
    return JSON.parse(raw) as UserRecord[];
  } catch {
    return [];
  }
}

async function writeUsers(users: UserRecord[]) {
  await ensureStore();
  const temp = `${USERS_FILE}.tmp`;
  await fs.writeFile(temp, JSON.stringify(users, null, 2), "utf8");
  await fs.rename(temp, USERS_FILE);
}

function mutateUsers<T>(fn: (users: UserRecord[]) => T | Promise<T>): Promise<T> {
  const operation = mutationQueue.then(async () => {
    const users = await readUsers();
    const result = await fn(users);
    await writeUsers(users);
    return result;
  });
  mutationQueue = operation.then(
    () => undefined,
    () => undefined
  );
  return operation;
}

function membershipOf(user: UserRecord): MembershipSnapshot {
  const renewsAt = user.membershipRenewsAt || null;
  const cancelAtPeriodEnd = Boolean(user.membershipCancelAtPeriodEnd);
  const stillActive = renewsAt ? new Date(renewsAt).getTime() > Date.now() : false;
  let status: MembershipStatus = "none";
  if (stillActive && cancelAtPeriodEnd) status = "canceling";
  else if (stillActive) status = "active";
  return {
    status,
    packageId: stillActive ? user.membershipPackageId || null : null,
    packageName: stillActive ? user.membershipPackageName || null : null,
    renewsAt: stillActive ? renewsAt : null,
    cancelAtPeriodEnd: stillActive ? cancelAtPeriodEnd : false,
    stripeSubscriptionId: user.stripeSubscriptionId || null,
  };
}

function toPublic(user: UserRecord): PublicUser {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    examId: user.examId,
    tokens: user.tokens,
    membership: membershipOf(user),
  };
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export async function findUserByEmail(email: string): Promise<UserRecord | null> {
  const users = await readUsers();
  return users.find((u) => u.email === normalizeEmail(email)) || null;
}

export async function findUserById(id: string): Promise<UserRecord | null> {
  const users = await readUsers();
  return users.find((u) => u.id === id) || null;
}

export const PASSWORD_REQUIREMENTS =
  "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, and a number.";

export function validatePassword(password: string): void {
  const strongEnough =
    password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
  if (!strongEnough) throw new Error(PASSWORD_REQUIREMENTS);
}

export async function createUser(input: {
  email: string;
  password: string;
  name: string;
}): Promise<PublicUser> {
  const email = normalizeEmail(input.email);
  if (!email) {
    throw new Error("A valid email is required.");
  }
  validatePassword(input.password || "");

  const now = new Date().toISOString();
  const user: UserRecord = {
    id: crypto.randomUUID(),
    email,
    name: input.name.trim() || email.split("@")[0],
    passwordHash: await bcrypt.hash(input.password, 10),
    examId: null,
    tokens: FREE_TOKENS,
    createdAt: now,
    updatedAt: now,
  };

  return mutateUsers((users) => {
    if (users.some((item) => item.email === email)) {
      throw new Error("An account with this email already exists.");
    }
    users.push(user);
    return toPublic(user);
  });
}

export async function verifyUserPassword(email: string, password: string): Promise<UserRecord | null> {
  const user = await findUserByEmail(email);
  if (!user) return null;
  const ok = await bcrypt.compare(password, user.passwordHash);
  return ok ? user : null;
}

export async function updateUser(
  userId: string,
  patch: Partial<Pick<UserRecord, "name" | "examId" | "tokens" | "passwordHash" | "resetTokenHash" | "resetTokenExpiresAt">>
): Promise<PublicUser | null> {
  return mutateUsers((users) => {
    const idx = users.findIndex((u) => u.id === userId);
    if (idx < 0) return null;
    users[idx] = {
      ...users[idx],
      ...patch,
      updatedAt: new Date().toISOString(),
    };
    return toPublic(users[idx]);
  });
}

/** Atomically spend 1 token. Returns updated public user or null if none left. */
export async function consumeToken(userId: string): Promise<PublicUser | null> {
  return mutateUsers((users) => {
    const idx = users.findIndex((u) => u.id === userId);
    if (idx < 0 || users[idx].tokens <= 0) return null;
    users[idx] = {
      ...users[idx],
      tokens: users[idx].tokens - 1,
      updatedAt: new Date().toISOString(),
    };
    return toPublic(users[idx]);
  });
}

export async function refundToken(userId: string): Promise<PublicUser | null> {
  return mutateUsers((users) => {
    const idx = users.findIndex((u) => u.id === userId);
    if (idx < 0) return null;
    users[idx].tokens += 1;
    users[idx].updatedAt = new Date().toISOString();
    return toPublic(users[idx]);
  });
}

/** Credit a paid purchase exactly once, even when Stripe retries its webhook. */
export async function addTokensForPurchase(
  userId: string,
  purchaseId: string,
  tokens: number,
  stripeCustomerId?: string
): Promise<{ user: PublicUser | null; credited: boolean }> {
  return mutateUsers((users) => {
    const idx = users.findIndex((u) => u.id === userId);
    if (idx < 0) return { user: null, credited: false };
    const creditedIds = users[idx].creditedPurchaseIds || [];
    if (creditedIds.includes(purchaseId)) {
      return { user: toPublic(users[idx]), credited: false };
    }
    users[idx].tokens += Math.max(0, Math.floor(tokens));
    users[idx].creditedPurchaseIds = [...creditedIds, purchaseId];
    if (stripeCustomerId) users[idx].stripeCustomerId = stripeCustomerId;
    users[idx].updatedAt = new Date().toISOString();
    return { user: toPublic(users[idx]), credited: true };
  });
}

export async function activateMembership(input: {
  userId: string;
  packageId: string;
  packageName: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  renewsFrom?: string;
}): Promise<PublicUser | null> {
  return mutateUsers((users) => {
    const idx = users.findIndex((u) => u.id === input.userId);
    if (idx < 0) return null;
    const from = input.renewsFrom || new Date().toISOString();
    users[idx].membershipPackageId = input.packageId;
    users[idx].membershipPackageName = input.packageName;
    users[idx].membershipRenewsAt = addOneMonth(from);
    users[idx].membershipCancelAtPeriodEnd = false;
    if (input.stripeCustomerId) users[idx].stripeCustomerId = input.stripeCustomerId;
    if (input.stripeSubscriptionId) users[idx].stripeSubscriptionId = input.stripeSubscriptionId;
    users[idx].updatedAt = new Date().toISOString();
    return toPublic(users[idx]);
  });
}

export async function cancelMembershipAtPeriodEnd(
  userId: string
): Promise<{ user: PublicUser | null; alreadyCanceling: boolean }> {
  return mutateUsers((users) => {
    const idx = users.findIndex((u) => u.id === userId);
    if (idx < 0) return { user: null, alreadyCanceling: false };
    const membership = membershipOf(users[idx]);
    if (membership.status === "none") {
      return { user: toPublic(users[idx]), alreadyCanceling: false };
    }
    if (users[idx].membershipCancelAtPeriodEnd) {
      return { user: toPublic(users[idx]), alreadyCanceling: true };
    }
    users[idx].membershipCancelAtPeriodEnd = true;
    users[idx].updatedAt = new Date().toISOString();
    return { user: toPublic(users[idx]), alreadyCanceling: false };
  });
}

export async function setStripeCustomerId(
  userId: string,
  stripeCustomerId: string
): Promise<boolean> {
  return mutateUsers((users) => {
    const user = users.find((item) => item.id === userId);
    if (!user) return false;
    user.stripeCustomerId = stripeCustomerId;
    user.updatedAt = new Date().toISOString();
    return true;
  });
}

export async function clearStripeSubscription(userId: string): Promise<boolean> {
  return mutateUsers((users) => {
    const user = users.find((item) => item.id === userId);
    if (!user) return false;
    user.stripeSubscriptionId = null;
    user.updatedAt = new Date().toISOString();
    return true;
  });
}

export async function changePassword(userId: string, currentPassword: string, newPassword: string) {
  const user = await findUserById(userId);
  if (!user) throw new Error("User not found.");
  const ok = await bcrypt.compare(currentPassword, user.passwordHash);
  if (!ok) throw new Error("Current password is incorrect.");
  validatePassword(newPassword);
  await updateUser(userId, { passwordHash: await bcrypt.hash(newPassword, 10) });
}

export async function createPasswordResetToken(email: string): Promise<string> {
  const user = await findUserByEmail(email);
  if (!user) {
    // Don't reveal whether email exists
    throw new Error("If that email exists, a reset code has been created.");
  }
  const token = Math.random().toString(36).slice(2, 8).toUpperCase() + Math.random().toString(36).slice(2, 6).toUpperCase();
  await updateUser(user.id, {
    resetTokenHash: await bcrypt.hash(token, 8),
    resetTokenExpiresAt: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
  });
  return token;
}

export async function resetPasswordWithToken(email: string, token: string, newPassword: string) {
  const user = await findUserByEmail(email);
  if (!user || !user.resetTokenHash || !user.resetTokenExpiresAt) {
    throw new Error("Invalid or expired reset code.");
  }
  if (new Date(user.resetTokenExpiresAt).getTime() < Date.now()) {
    throw new Error("Reset code has expired. Please request a new one.");
  }
  const ok = await bcrypt.compare(token.trim().toUpperCase(), user.resetTokenHash);
  if (!ok) throw new Error("Invalid or expired reset code.");
  validatePassword(newPassword);

  await updateUser(user.id, {
    passwordHash: await bcrypt.hash(newPassword, 10),
    resetTokenHash: null,
    resetTokenExpiresAt: null,
  });
}

export { toPublic };
