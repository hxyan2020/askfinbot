import { NextRequest, NextResponse } from "next/server";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import { validatePromoCode, applyDiscountCents } from "@/lib/promos";
import { getTokenPackage, formatPrice } from "@/lib/token-packages";

export async function POST(request: NextRequest) {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) {
    return NextResponse.json({ error: "Please log in to apply a promo code." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const code = String(body.promoCode || "");
    const packageId = String(body.packageId || "");
    const result = await validatePromoCode(code, userId);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const tokenPackage = packageId ? getTokenPackage(packageId) : undefined;
    const listCents = tokenPackage?.priceCents;
    const discountedCents =
      listCents !== undefined ? applyDiscountCents(listCents, result.tier) : undefined;

    return NextResponse.json({
      ok: true,
      tier: result.tier,
      discountPercent: result.discountPercent,
      message: result.message,
      code: result.promo.code,
      label: result.promo.label,
      packageId: tokenPackage?.id,
      listPrice: listCents !== undefined ? formatPrice(listCents) : undefined,
      discountedPrice:
        discountedCents !== undefined ? formatPrice(discountedCents) : undefined,
      skipPayment: result.tier === "percent_100",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not validate promo code.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
