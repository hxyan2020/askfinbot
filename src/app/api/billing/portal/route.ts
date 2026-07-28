import { NextRequest, NextResponse } from "next/server";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import { findUserById } from "@/lib/users";
import { getAppUrl, getStripe, isStripeCheckoutReady } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  if (!isStripeCheckoutReady()) {
    return NextResponse.json({ error: "Secure billing is not enabled yet." }, { status: 503 });
  }
  const userId = await getSessionUserIdFromCookies();
  if (!userId) {
    return NextResponse.json({ error: "Please log in." }, { status: 401 });
  }

  try {
    const user = await findUserById(userId);
    if (!user?.stripeCustomerId) {
      return NextResponse.json(
        { error: "Complete your first purchase before managing payment methods." },
        { status: 400 }
      );
    }

    const session = await getStripe().billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: `${getAppUrl(request.url)}/profile?tab=billing`,
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not open billing portal.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
