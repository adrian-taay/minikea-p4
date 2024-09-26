import React from "react";
import CartItemView from "./CartItemView";
import WishlistItemView from "./WishlistItemView";
import Link from "next/link";
import CheckoutSummary from "./CheckoutSummary";

export default function CartPage() {
  const CartItemViewWrapper = (
    <>
      <h1 className="font-semibold text-2xl my-8">Your Cart</h1>
      <CartItemView />
    </>
  );

  const WishlistItemViewWrapper = (
    <>
      <h1 className="font-semibold text-xl mt-8">
        It&#39;s about time you bought these!
      </h1>
      <p className="w-4/5">
        Clear your wishlist. Add them to cart. You deserve a clean wishlist!
      </p>
      <WishlistItemView />
      <Link href={"/user/wishlist"}>See your wishlist</Link>
    </>
  );

  return (
    <div className="w-full">
      {CartItemViewWrapper}
      {WishlistItemViewWrapper}
      <CheckoutSummary />
    </div>
  );
}
