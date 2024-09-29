import React from "react";
import CartItemView from "./cart-item-view";
import WishlistItemView from "./wishlist-item-view";
import CheckoutSummary from "./checkout-summary";

export default function CartPage() {
  const CartItemViewWrapper = (
    <>
      <h1 className="font-semibold text-2xl my-8">Your Cart</h1>
      <CartItemView />
    </>
  );

  return (
    <div className="w-full">
      {CartItemViewWrapper}
      <WishlistItemView />
      <CheckoutSummary />
    </div>
  );
}
