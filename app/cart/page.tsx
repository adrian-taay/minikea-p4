"use client";

import { useUserStore } from "@/lib/useUserStore";
import React from "react";

export default function CartPage() {
  const cart = useUserStore((state) => state.cart);
  const removeFromCart = useUserStore((state) => state.removeFromCart);
  const incrementCartItemQty = useUserStore(
    (state) => state.incrementCartItemQty
  );
  const decrementCartItemQty = useUserStore(
    (state) => state.decrementCartItemQty
  );
  const clearCart = useUserStore((state) => state.clearCart);

  return (
    <div>
      <h1 className="h1-bold">Shopping Cart</h1>
      {cart.map((item, index) => (
        <div key={index}>
          <span>{item.id}</span>
          <span>{item.title}</span>
          <span className="font-bold px-3">{item.quantity}</span>
          <span>{item.price}</span>
          <button onClick={() => decrementCartItemQty(item.id)}>-</button>
          <button onClick={() => incrementCartItemQty(item.id)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
}
