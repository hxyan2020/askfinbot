import { MENTOR_ACCESS_MONTHS } from "@/lib/purchases";

export type MembershipStatus = "none" | "active" | "canceling";

export type MembershipSnapshot = {
  status: MembershipStatus;
  packageId: string | null;
  packageName: string | null;
  renewsAt: string | null;
  cancelAtPeriodEnd: boolean;
  stripeSubscriptionId: string | null;
};

export function addOneMonth(isoDate: string): string {
  const date = new Date(isoDate);
  date.setMonth(date.getMonth() + MENTOR_ACCESS_MONTHS);
  return date.toISOString();
}

export function emptyMembership(): MembershipSnapshot {
  return {
    status: "none",
    packageId: null,
    packageName: null,
    renewsAt: null,
    cancelAtPeriodEnd: false,
    stripeSubscriptionId: null,
  };
}
