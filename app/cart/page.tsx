"use client";

import { useShoppingCart } from "@/lib/useShoppingCart";
import React from "react";

export default function CartPage() {
  const cart = useShoppingCart((state) => state.cart);
  const removeItem = useShoppingCart((state) => state.removeItem);
  const incrementItemQty = useShoppingCart((state) => state.incrementItemQty);
  const decrementItemQty = useShoppingCart((state) => state.decrementItemQty);
  const clearCart = useShoppingCart((state) => state.clearCart);

  return (
    <div>
      <h1 className="h1-bold">Shopping Cart</h1>
      {cart.map((item, index) => (
        <div key={index}>
          <span>{item.id}</span>
          <span>{item.title}</span>
          <span className="font-bold px-3">{item.quantity}</span>
          <span>{item.price}</span>
          <button onClick={() => decrementItemQty(item.id)}>-</button>
          <button onClick={() => incrementItemQty(item.id)}>+</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
}
