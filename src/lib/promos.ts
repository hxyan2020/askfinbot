import { promises as fs } from "fs";
import path from "path";

export type PromoTier = "percent_20" | "percent_100";

export interface PromoCodeRecord {
  id: string;
  /** Normalized uppercase code users type */
  code: string;
  tier: PromoTier;
  label: string;
  active: boolean;
  /** null = unlimited redemptions */
  maxRedemptions: number | null;
  redemptionCount: number;
  /** User ids that have redeemed (for 100% and uniqueness tracking) */
  redeemedByUserIds: string[];
  note?: string;
  createdAt: string;
  updatedAt: string;
}

export type PublicPromoCode = Omit<PromoCodeRecord, "redeemedByUserIds"> & {
  remainingRedemptions: number | null;
};

const PROMO_FILE = path.join(process.cwd(), "data", "promo-codes.json");
let mutationQueue: Promise<unknown> = Promise.resolve();

async function ensureStore() {
  await fs.mkdir(path.dirname(PROMO_FILE), { recursive: true });
  try {
    await fs.access(PROMO_FILE);
  } catch {
    const now = new Date().toISOString();
    const seed: PromoCodeRecord[] = [
      {
        id: crypto.randomUUID(),
        code: "ASKFIN20",
        tier: "percent_20",
        label: "20% off any plan",
        active: true,
        maxRedemptions: null,
        redemptionCount: 0,
        redeemedByUserIds: [],
        note: "Default 20% discount code — rotate or disable in Admin.",
        createdAt: now,
        updatedAt: now,
      },
      {
        id: crypto.randomUUID(),
        code: "ASKFINFREE",
        tier: "percent_100",
        label: "100% off · unlimited tokens (auto-renews)",
        active: true,
        maxRedemptions: null,
        redemptionCount: 0,
        redeemedByUserIds: [],
        note: "Default free unlimited code — rotate or disable in Admin.",
        createdAt: now,
        updatedAt: now,
      },
    ];
    await fs.writeFile(PROMO_FILE, JSON.stringify(seed, null, 2), "utf8");
  }
}

async function readPromos(): Promise<PromoCodeRecord[]> {
  await ensureStore();
  try {
    return JSON.parse(await fs.readFile(PROMO_FILE, "utf8")) as PromoCodeRecord[];
  } catch {
    return [];
  }
}

async function writePromos(items: PromoCodeRecord[]) {
  await ensureStore();
  const temp = `${PROMO_FILE}.tmp`;
  await fs.writeFile(temp, JSON.stringify(items, null, 2), "utf8");
  await fs.rename(temp, PROMO_FILE);
}

function mutate<T>(fn: (items: PromoCodeRecord[]) => T | Promise<T>): Promise<T> {
  const operation = mutationQueue.then(async () => {
    const items = await readPromos();
    const result = await fn(items);
    await writePromos(items);
    return result;
  });
  mutationQueue = operation.then(
    () => undefined,
    () => undefined
  );
  return operation;
}

export function normalizePromoCode(code: string): string {
  return code.trim().toUpperCase().replace(/\s+/g, "");
}

export function discountPercentForTier(tier: PromoTier): 20 | 100 {
  return tier === "percent_100" ? 100 : 20;
}

export function applyDiscountCents(amountCents: number, tier: PromoTier): number {
  const pct = discountPercentForTier(tier);
  return Math.max(0, Math.round(amountCents * (1 - pct / 100)));
}

function toPublic(promo: PromoCodeRecord): PublicPromoCode {
  const remaining =
    promo.maxRedemptions === null
      ? null
      : Math.max(0, promo.maxRedemptions - promo.redemptionCount);
  const { redeemedByUserIds: _ids, ...rest } = promo;
  void _ids;
  return { ...rest, remainingRedemptions: remaining };
}

export async function listPromoCodes(): Promise<PublicPromoCode[]> {
  const items = await readPromos();
  return items
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .map(toPublic);
}

export async function getPromoByCode(code: string): Promise<PromoCodeRecord | null> {
  const normalized = normalizePromoCode(code);
  if (!normalized) return null;
  const items = await readPromos();
  return items.find((item) => item.code === normalized) || null;
}

export type PromoValidation =
  | {
      ok: true;
      promo: PublicPromoCode;
      tier: PromoTier;
      discountPercent: 20 | 100;
      message: string;
    }
  | { ok: false; error: string };

export async function validatePromoCode(
  code: string,
  userId?: string
): Promise<PromoValidation> {
  const promo = await getPromoByCode(code);
  if (!promo) return { ok: false, error: "Promo code not found." };
  if (!promo.active) return { ok: false, error: "This promo code is inactive." };
  if (
    promo.maxRedemptions !== null &&
    promo.redemptionCount >= promo.maxRedemptions
  ) {
    return { ok: false, error: "This promo code has reached its redemption limit." };
  }
  if (userId && promo.redeemedByUserIds.includes(userId) && promo.tier === "percent_100") {
    return {
      ok: false,
      error: "You have already redeemed this free unlimited promo on your account.",
    };
  }
  const discountPercent = discountPercentForTier(promo.tier);
  return {
    ok: true,
    promo: toPublic(promo),
    tier: promo.tier,
    discountPercent,
    message:
      discountPercent === 100
        ? "100% off — unlimited tokens for the next month, auto-renewing forever (no payment)."
        : "20% off will be applied at checkout.",
  };
}

export async function createPromoCode(input: {
  code: string;
  tier: PromoTier;
  label?: string;
  active?: boolean;
  maxRedemptions?: number | null;
  note?: string;
}): Promise<PublicPromoCode> {
  const code = normalizePromoCode(input.code);
  if (!code || code.length < 3) {
    throw new Error("Promo code must be at least 3 characters.");
  }
  if (input.tier !== "percent_20" && input.tier !== "percent_100") {
    throw new Error("Tier must be percent_20 or percent_100.");
  }
  const now = new Date().toISOString();
  return mutate((items) => {
    if (items.some((item) => item.code === code)) {
      throw new Error("A promo code with this value already exists.");
    }
    const record: PromoCodeRecord = {
      id: crypto.randomUUID(),
      code,
      tier: input.tier,
      label:
        input.label?.trim() ||
        (input.tier === "percent_100" ? "100% off · unlimited" : "20% off"),
      active: input.active !== false,
      maxRedemptions:
        input.maxRedemptions === undefined ? null : input.maxRedemptions,
      redemptionCount: 0,
      redeemedByUserIds: [],
      note: input.note?.trim() || undefined,
      createdAt: now,
      updatedAt: now,
    };
    items.push(record);
    return toPublic(record);
  });
}

export async function updatePromoCode(
  id: string,
  patch: Partial<
    Pick<PromoCodeRecord, "label" | "active" | "maxRedemptions" | "note" | "tier" | "code">
  >
): Promise<PublicPromoCode | null> {
  return mutate((items) => {
    const index = items.findIndex((item) => item.id === id);
    if (index < 0) return null;
    const next = { ...items[index] };
    if (patch.code !== undefined) {
      const code = normalizePromoCode(patch.code);
      if (!code || code.length < 3) throw new Error("Promo code must be at least 3 characters.");
      if (items.some((item, i) => i !== index && item.code === code)) {
        throw new Error("A promo code with this value already exists.");
      }
      next.code = code;
    }
    if (patch.tier !== undefined) {
      if (patch.tier !== "percent_20" && patch.tier !== "percent_100") {
        throw new Error("Tier must be percent_20 or percent_100.");
      }
      next.tier = patch.tier;
    }
    if (patch.label !== undefined) next.label = patch.label.trim() || next.label;
    if (patch.active !== undefined) next.active = Boolean(patch.active);
    if (patch.maxRedemptions !== undefined) next.maxRedemptions = patch.maxRedemptions;
    if (patch.note !== undefined) next.note = patch.note.trim() || undefined;
    next.updatedAt = new Date().toISOString();
    items[index] = next;
    return toPublic(next);
  });
}

export async function deletePromoCode(id: string): Promise<boolean> {
  return mutate((items) => {
    const index = items.findIndex((item) => item.id === id);
    if (index < 0) return false;
    items.splice(index, 1);
    return true;
  });
}

/** Record a successful redemption (call after grant/checkout succeeds). */
export async function recordPromoRedemption(
  promoId: string,
  userId: string
): Promise<PromoCodeRecord | null> {
  return mutate((items) => {
    const index = items.findIndex((item) => item.id === promoId);
    if (index < 0) return null;
    const promo = items[index];
    if (!promo.redeemedByUserIds.includes(userId)) {
      promo.redeemedByUserIds.push(userId);
    }
    promo.redemptionCount += 1;
    promo.updatedAt = new Date().toISOString();
    items[index] = promo;
    return promo;
  });
}
