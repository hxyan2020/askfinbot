import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated, unauthorized } from "@/lib/admin-auth";
import { createPromoCode, listPromoCodes, type PromoTier } from "@/lib/promos";

export async function GET() {
  if (!(await isAdminAuthenticated())) return unauthorized();
  try {
    const promos = await listPromoCodes();
    return NextResponse.json({ promos });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to list promo codes.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  try {
    const body = await request.json();
    const tier = String(body.tier || "") as PromoTier;
    const promo = await createPromoCode({
      code: String(body.code || ""),
      tier,
      label: typeof body.label === "string" ? body.label : undefined,
      active: body.active !== false,
      maxRedemptions:
        body.maxRedemptions === null || body.maxRedemptions === ""
          ? null
          : body.maxRedemptions === undefined
            ? null
            : Number(body.maxRedemptions),
      note: typeof body.note === "string" ? body.note : undefined,
    });
    return NextResponse.json({ promo }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create promo code.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
