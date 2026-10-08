import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated, unauthorized } from "@/lib/admin-auth";
import { getPurchaseById, listPurchases, updatePurchase } from "@/lib/purchases";
import { findUserById } from "@/lib/users";
import { sendShippingConfirmation } from "@/lib/fulfill-order";

export async function GET() {
  if (!(await isAdminAuthenticated())) return unauthorized();
  const purchases = await listPurchases();
  const orders = await Promise.all(
    purchases.map(async (purchase) => {
      const user = await findUserById(purchase.userId);
      return {
        id: purchase.id,
        orderNumber: purchase.orderNumber || purchase.id.slice(0, 8).toUpperCase(),
        userEmail: purchase.customerEmail || user?.email || "",
        userName: user?.name || "",
        packageName: purchase.packageName,
        kind: purchase.kind || "membership",
        quantity: purchase.quantity || 1,
        preference: purchase.preference || "",
        tokens: purchase.tokens,
        amountCents: purchase.amountCents,
        currency: purchase.currency,
        status: purchase.status,
        shippingNumber: purchase.shippingNumber || "",
        createdAt: purchase.createdAt,
        paidAt: purchase.paidAt || "",
        confirmationEmailAt: purchase.confirmationEmailAt || "",
        shippingEmailAt: purchase.shippingEmailAt || "",
        emailError: purchase.emailError || "",
      };
    })
  );
  return NextResponse.json({ orders });
}

export async function PATCH(request: NextRequest) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  const body = await request.json();
  const id = String(body.id || "");
  const shippingNumber = String(body.shippingNumber || "").trim();
  if (!id) return NextResponse.json({ error: "Order id required." }, { status: 400 });
  if (shippingNumber.length < 2 || shippingNumber.length > 80) {
    return NextResponse.json({ error: "Enter a shipping number." }, { status: 400 });
  }

  const existing = await getPurchaseById(id);
  if (!existing) return NextResponse.json({ error: "Order not found." }, { status: 404 });
  if (existing.status !== "paid") {
    return NextResponse.json({ error: "Add a shipping number after the order is paid." }, { status: 400 });
  }

  const updated = await updatePurchase(id, {
    shippingNumber,
    shippingUpdatedAt: new Date().toISOString(),
  });
  if (!updated) return NextResponse.json({ error: "Order not found." }, { status: 404 });

  if (shippingNumber !== (existing.shippingNumber || "")) {
    await sendShippingConfirmation(updated);
  }
  const saved = await getPurchaseById(id);
  return NextResponse.json({
    order: {
      id,
      shippingNumber: saved?.shippingNumber || shippingNumber,
      shippingEmailAt: saved?.shippingEmailAt || "",
      emailError: saved?.emailError || "",
    },
  });
}
