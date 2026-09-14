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
  /** Null/empty for Google-only accounts until they set a password. */
  passwordHash: string | null;
  googleId?: string | null;
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
  /** Promo-granted unlimited answers while membership is active */
  unlimitedTokens?: boolean;
  /** When true, expired promo unlimited membership auto-extends forever */
  promoUnlimitedAutoRenew?: boolean;
  promoCodeId?: string | null;
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
  unlimitedTokens: boolean;
  membership: MembershipSnapshot;
  hasPassword: boolean;
  hasGoogle: boolean;
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

function hasActiveUnlimited(user: UserRecord): boolean {
  const membership = membershipOf(user);
  return Boolean(user.unlimitedTokens && membership.status !== "none");
}

function toPublic(user: UserRecord): PublicUser {
  const unlimited = hasActiveUnlimited(user);
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    examId: user.examId,
    tokens: unlimited ? Math.max(user.tokens, 999999) : user.tokens,
    unlimitedTokens: unlimited,
    membership: membershipOf(user),
    hasPassword: Boolean(user.passwordHash),
    hasGoogle: Boolean(user.googleId),
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

export async function findUserByGoogleId(googleId: string): Promise<UserRecord | null> {
  const users = await readUsers();
  return users.find((u) => u.googleId === googleId) || null;
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
  if (!user?.passwordHash) return null;
  const ok = await bcrypt.compare(password, user.passwordHash);
  return ok ? user : null;
}

/** Create or link a user from a verified Google profile (email must be verified by Google). */
export async function upsertGoogleUser(input: {
  googleId: string;
  email: string;
  name: string;
}): Promise<PublicUser> {
  const email = normalizeEmail(input.email);
  const googleId = String(input.googleId || "").trim();
  if (!email || !googleId) {
    throw new Error("Google account is missing a verified email.");
  }
  const displayName = input.name.trim() || email.split("@")[0];
  const now = new Date().toISOString();

  return mutateUsers((users) => {
    const byGoogle = users.find((u) => u.googleId === googleId);
    if (byGoogle) {
      byGoogle.name = byGoogle.name || displayName;
      byGoogle.email = email;
      byGoogle.updatedAt = now;
      return toPublic(byGoogle);
    }

    const byEmail = users.find((u) => u.email === email);
    if (byEmail) {
      byEmail.googleId = googleId;
      if (!byEmail.name) byEmail.name = displayName;
      byEmail.updatedAt = now;
      return toPublic(byEmail);
    }

    const user: UserRecord = {
      id: crypto.randomUUID(),
      email,
      name: displayName,
      passwordHash: null,
      googleId,
      examId: null,
      tokens: FREE_TOKENS,
      createdAt: now,
      updatedAt: now,
    };
    users.push(user);
    return toPublic(user);
  });
}

export async function updateUser(
  userId: string,
  patch: Partial<
    Pick<
      UserRecord,
      "name" | "examId" | "tokens" | "passwordHash" | "googleId" | "resetTokenHash" | "resetTokenExpiresAt"
    >
  >
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
    if (idx < 0) return null;
    if (hasActiveUnlimited(users[idx])) {
      users[idx].updatedAt = new Date().toISOString();
      return toPublic(users[idx]);
    }
    if (users[idx].tokens <= 0) return null;
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
    if (hasActiveUnlimited(users[idx])) {
      return toPublic(users[idx]);
    }
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
  unlimitedTokens?: boolean;
  promoUnlimitedAutoRenew?: boolean;
  promoCodeId?: string | null;
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
    if (input.unlimitedTokens !== undefined) {
      users[idx].unlimitedTokens = input.unlimitedTokens;
    } else if (input.packageId !== "promo-unlimited") {
      // Paid plans replace promo unlimited
      users[idx].unlimitedTokens = false;
      users[idx].promoUnlimitedAutoRenew = false;
    }
    if (input.promoUnlimitedAutoRenew !== undefined) {
      users[idx].promoUnlimitedAutoRenew = input.promoUnlimitedAutoRenew;
    }
    if (input.promoCodeId !== undefined) {
      users[idx].promoCodeId = input.promoCodeId;
    }
    users[idx].updatedAt = new Date().toISOString();
    return toPublic(users[idx]);
  });
}

/**
 * Grant 100% promo: unlimited tokens for one month, auto-renewing forever
 * until the user cancels membership at period end.
 */
export async function grantPromoUnlimited(input: {
  userId: string;
  promoCodeId: string;
  packageName?: string;
}): Promise<PublicUser | null> {
  return activateMembership({
    userId: input.userId,
    packageId: "promo-unlimited",
    packageName: input.packageName || "Unlimited (promo)",
    unlimitedTokens: true,
    promoUnlimitedAutoRenew: true,
    promoCodeId: input.promoCodeId,
  });
}

/**
 * If a promo-unlimited membership expired and auto-renew is on (and not canceling),
 * extend another month. Call on session/chat so renewals need no payment page.
 */
export async function ensurePromoUnlimitedRenewal(
  userId: string
): Promise<PublicUser | null> {
  return mutateUsers((users) => {
    const idx = users.findIndex((u) => u.id === userId);
    if (idx < 0) return null;
    const user = users[idx];
    if (!user.promoUnlimitedAutoRenew || !user.unlimitedTokens) {
      return toPublic(user);
    }
    if (user.membershipCancelAtPeriodEnd) {
      // Let period end naturally; clear unlimited when expired
      const renewsAt = user.membershipRenewsAt;
      if (renewsAt && new Date(renewsAt).getTime() <= Date.now()) {
        user.unlimitedTokens = false;
        user.promoUnlimitedAutoRenew = false;
        user.membershipPackageId = null;
        user.membershipPackageName = null;
        user.membershipRenewsAt = null;
        user.updatedAt = new Date().toISOString();
      }
      return toPublic(user);
    }
    const renewsAt = user.membershipRenewsAt;
    if (!renewsAt) {
      user.membershipRenewsAt = addOneMonth(new Date().toISOString());
      user.membershipPackageId = user.membershipPackageId || "promo-unlimited";
      user.membershipPackageName = user.membershipPackageName || "Unlimited (promo)";
      user.updatedAt = new Date().toISOString();
      return toPublic(user);
    }
    if (new Date(renewsAt).getTime() > Date.now()) {
      return toPublic(user);
    }
    // Expired — roll forward one month from previous renewsAt (or now if far past)
    const base =
      new Date(renewsAt).getTime() > Date.now() - 1000 * 60 * 60 * 24 * 40
        ? renewsAt
        : new Date().toISOString();
    user.membershipRenewsAt = addOneMonth(base);
    user.membershipPackageId = "promo-unlimited";
    user.membershipPackageName = user.membershipPackageName || "Unlimited (promo)";
    user.unlimitedTokens = true;
    user.updatedAt = new Date().toISOString();
    return toPublic(user);
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
  if (user.passwordHash) {
    const ok = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!ok) throw new Error("Current password is incorrect.");
  }
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
