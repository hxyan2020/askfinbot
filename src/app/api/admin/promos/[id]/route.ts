import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated, unauthorized } from "@/lib/admin-auth";
import { deletePromoCode, updatePromoCode, type PromoTier } from "@/lib/promos";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  try {
    const { id } = await context.params;
    const body = await request.json();
    const patch: Parameters<typeof updatePromoCode>[1] = {};
    if (typeof body.code === "string") patch.code = body.code;
    if (body.tier === "percent_20" || body.tier === "percent_100") {
      patch.tier = body.tier as PromoTier;
    }
    if (typeof body.label === "string") patch.label = body.label;
    if (typeof body.active === "boolean") patch.active = body.active;
    if (body.maxRedemptions === null || body.maxRedemptions === "") {
      patch.maxRedemptions = null;
    } else if (body.maxRedemptions !== undefined) {
      patch.maxRedemptions = Number(body.maxRedemptions);
    }
    if (typeof body.note === "string") patch.note = body.note;

    const promo = await updatePromoCode(id, patch);
    if (!promo) return NextResponse.json({ error: "Promo not found." }, { status: 404 });
    return NextResponse.json({ promo });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to update promo code.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  try {
    const { id } = await context.params;
    const ok = await deletePromoCode(id);
    if (!ok) return NextResponse.json({ error: "Promo not found." }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to delete promo code.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
