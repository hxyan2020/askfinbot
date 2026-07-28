import { NextResponse } from "next/server";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import { cancelMembershipAtPeriodEnd, findUserById, toPublic } from "@/lib/users";
import { getStripe, isStripeCheckoutReady } from "@/lib/stripe";

export async function POST() {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) {
    return NextResponse.json({ error: "Please log in." }, { status: 401 });
  }

  const record = await findUserById(userId);
  if (!record) {
    return NextResponse.json({ error: "Account not found." }, { status: 404 });
  }

  const user = toPublic(record);
  const membership = user.membership;
  if (membership.status === "none") {
    return NextResponse.json(
      { error: "You do not have an active plan to cancel." },
      { status: 400 }
    );
  }

  if (membership.stripeSubscriptionId && isStripeCheckoutReady()) {
    try {
      await getStripe().subscriptions.update(membership.stripeSubscriptionId, {
        cancel_at_period_end: true,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Could not cancel the subscription with the payment provider.";
      return NextResponse.json({ error: message }, { status: 500 });
    }
  }

  const result = await cancelMembershipAtPeriodEnd(userId);
  if (!result.user) {
    return NextResponse.json({ error: "Account not found." }, { status: 404 });
  }

  const endsOn = result.user.membership.renewsAt
    ? new Date(result.user.membership.renewsAt).toLocaleDateString()
    : "the end of this billing cycle";

  return NextResponse.json({
    membership: result.user.membership,
    alreadyCanceling: result.alreadyCanceling,
    message: result.alreadyCanceling
      ? "Your plan is already set to end after the current billing cycle."
      : `Your plan will remain active until ${endsOn}. It will not renew after that.`,
  });
}
