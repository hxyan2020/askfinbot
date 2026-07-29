import { promises as fs } from "fs";
import path from "path";

export type PurchaseStatus = "pending" | "paid" | "expired" | "failed" | "refunded";

export interface PurchaseRecord {
  id: string;
  userId: string;
  packageId: string;
  packageName: string;
  tokens: number;
  amountCents: number;
  /** Original list price before promo (if discounted) */
  listAmountCents?: number;
  currency: string;
  status: PurchaseStatus;
  promoCodeId?: string;
  promoCode?: string;
  promoTier?: "percent_20" | "percent_100";
  stripeCheckoutSessionId?: string;
  stripePaymentIntentId?: string;
  stripeCustomerId?: string;
  stripeEventId?: string;
  createdAt: string;
  updatedAt: string;
  paidAt?: string;
}

export type PublicPurchase = Omit<PurchaseRecord, "userId" | "stripeEventId">;

const PURCHASES_FILE = path.join(process.cwd(), "data", "purchases.json");
let mutationQueue: Promise<unknown> = Promise.resolve();

async function ensureStore() {
  await fs.mkdir(path.dirname(PURCHASES_FILE), { recursive: true });
  try {
    await fs.access(PURCHASES_FILE);
  } catch {
    await fs.writeFile(PURCHASES_FILE, "[]", "utf8");
  }
}

async function readPurchases(): Promise<PurchaseRecord[]> {
  await ensureStore();
  try {
    return JSON.parse(await fs.readFile(PURCHASES_FILE, "utf8")) as PurchaseRecord[];
  } catch {
    return [];
  }
}

async function writePurchases(items: PurchaseRecord[]) {
  await ensureStore();
  const temp = `${PURCHASES_FILE}.tmp`;
  await fs.writeFile(temp, JSON.stringify(items, null, 2), "utf8");
  await fs.rename(temp, PURCHASES_FILE);
}

function mutate<T>(fn: (items: PurchaseRecord[]) => T | Promise<T>): Promise<T> {
  const operation = mutationQueue.then(async () => {
    const items = await readPurchases();
    const result = await fn(items);
    await writePurchases(items);
    return result;
  });
  mutationQueue = operation.then(
    () => undefined,
    () => undefined
  );
  return operation;
}

export async function createPendingPurchase(input: {
  userId: string;
  packageId: string;
  packageName: string;
  tokens: number;
  amountCents: number;
  currency: string;
  listAmountCents?: number;
  promoCodeId?: string;
  promoCode?: string;
  promoTier?: "percent_20" | "percent_100";
}): Promise<PurchaseRecord> {
  const now = new Date().toISOString();
  const purchase: PurchaseRecord = {
    id: crypto.randomUUID(),
    ...input,
    status: "pending",
    createdAt: now,
    updatedAt: now,
  };
  return mutate((items) => {
    items.push(purchase);
    return purchase;
  });
}

export async function updatePurchase(
  purchaseId: string,
  patch: Partial<Omit<PurchaseRecord, "id" | "userId" | "createdAt">>
): Promise<PurchaseRecord | null> {
  return mutate((items) => {
    const index = items.findIndex((item) => item.id === purchaseId);
    if (index < 0) return null;
    items[index] = {
      ...items[index],
      ...patch,
      updatedAt: new Date().toISOString(),
    };
    return items[index];
  });
}

export async function markPurchasePaid(input: {
  purchaseId: string;
  stripeCheckoutSessionId?: string;
  stripePaymentIntentId?: string;
  stripeCustomerId?: string;
  stripeEventId?: string;
}): Promise<PurchaseRecord | null> {
  return mutate((items) => {
    const index = items.findIndex((item) => item.id === input.purchaseId);
    if (index < 0) return null;
    if (items[index].status === "paid") return items[index];
    const now = new Date().toISOString();
    items[index] = {
      ...items[index],
      status: "paid",
      stripeCheckoutSessionId:
        input.stripeCheckoutSessionId || items[index].stripeCheckoutSessionId,
      stripePaymentIntentId:
        input.stripePaymentIntentId || items[index].stripePaymentIntentId,
      stripeCustomerId: input.stripeCustomerId || items[index].stripeCustomerId,
      stripeEventId: input.stripeEventId || items[index].stripeEventId || `promo:${now}`,
      paidAt: now,
      updatedAt: now,
    };
    return items[index];
  });
}

export async function getPurchaseById(id: string): Promise<PurchaseRecord | null> {
  return (await readPurchases()).find((item) => item.id === id) || null;
}

export async function getPurchasesForUser(userId: string): Promise<PublicPurchase[]> {
  const items = await readPurchases();
  return items
    .filter((item) => item.userId === userId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .map(({ userId: privateUserId, stripeEventId: privateEventId, ...item }) => {
      void privateUserId;
      void privateEventId;
      return item;
    });
}

/** Paid top-ups unlock premium mentor support for one calendar month from payment. */
export const MENTOR_ACCESS_MONTHS = 1;

export function mentorAccessExpiresAt(paidAt: string): Date {
  const expires = new Date(paidAt);
  expires.setMonth(expires.getMonth() + MENTOR_ACCESS_MONTHS);
  return expires;
}

/** A recent completed paid top-up unlocks premium mentor support for 1 month. */
export async function hasPaidPurchase(userId: string): Promise<boolean> {
  const items = await readPurchases();
  const now = Date.now();
  return items.some((item) => {
    if (item.userId !== userId || item.status !== "paid") return false;
    const paidAt = item.paidAt || item.updatedAt || item.createdAt;
    return mentorAccessExpiresAt(paidAt).getTime() > now;
  });
}
