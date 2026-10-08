/** One-time order used to test checkout, preferences, and shipping updates. */
export const ORDER_TEST_PRODUCT = {
  id: "order-test",
  name: "Order placement test",
  description:
    "A one-time item for testing payment, preferences, and shipping updates. Stripe does not accept a card charge under US$0.50, so this test item uses that minimum.",
  priceCents: 50,
  currency: "usd" as const,
  maxQuantity: 3,
};

export function isOrderTestProduct(id: string): boolean {
  return id === ORDER_TEST_PRODUCT.id;
}

export function orderTestAmountCents(quantity: number): number {
  const qty = Math.floor(quantity);
  if (!Number.isFinite(qty) || qty < 1 || qty > ORDER_TEST_PRODUCT.maxQuantity) {
    throw new Error(`Quantity must be between 1 and ${ORDER_TEST_PRODUCT.maxQuantity}.`);
  }
  return ORDER_TEST_PRODUCT.priceCents * qty;
}
