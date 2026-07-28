import { NextRequest, NextResponse } from "next/server";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import { getPurchaseById } from "@/lib/purchases";
import { findUserById } from "@/lib/users";

export async function GET(request: NextRequest) {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) {
    return NextResponse.json({ error: "Please log in." }, { status: 401 });
  }

  const orderId = new URL(request.url).searchParams.get("orderId") || "";
  const purchase = await getPurchaseById(orderId);
  if (!purchase || purchase.userId !== userId) {
    return NextResponse.json({ error: "Order not found." }, { status: 404 });
  }
  const user = await findUserById(userId);
  return NextResponse.json({
    order: {
      id: purchase.id,
      status: purchase.status,
      packageName: purchase.packageName,
      tokens: purchase.tokens,
      amountCents: purchase.amountCents,
      currency: purchase.currency,
      paidAt: purchase.paidAt,
    },
    tokenBalance: user?.tokens ?? 0,
  });
}
