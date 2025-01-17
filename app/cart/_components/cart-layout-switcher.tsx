"use client";

import React from "react";
import WishlistItemView from "../../_shared/wishlist-item-view/wishlist-item-view";
import CheckoutSummary from "./checkout-summary";
import useViewportResize from "@/lib/useViewportResize";
import CartItemView from "./cart-item-view";

export default function CartLayoutSwitcher() {
  const isWidthSmall = useViewportResize();

  return (
    <>
      <h1 className="font-semibold text-2xl my-4 ">Your Cart</h1>
      <div className="w-full flex flex-col lg:flex-row lg:gap-10 ">
        <CartItemView />
        {isWidthSmall && <WishlistItemView />}
        {!isWidthSmall && <CheckoutSummary />}
      </div>
      <div className="w-full">
        {isWidthSmall && <CheckoutSummary />}
        {!isWidthSmall && <WishlistItemView />}
      </div>
    </>
  );
}
