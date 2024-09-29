import React from "react";
import CartItemView from "./CartItemView";
import WishlistItemView from "./WishlistItemView";
import CheckoutSummary from "./CheckoutSummary";

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
