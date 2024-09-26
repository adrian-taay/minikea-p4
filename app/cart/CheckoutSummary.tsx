"use client";

import { useUserStore } from "@/lib/useUserStore";
import { Button, Divider } from "@chakra-ui/react";
import React from "react";

export default function CheckoutSummary() {
  const cart = useUserStore((state) => state.cart);
  const shippingFee = Number(0);
  const subtotal = cart.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);
  const totalCost = subtotal + shippingFee;

  return (
    <div className="w-full px-4 py-8 text-lg my-8 space-y-4 bg-stone-100">
      <h1 className="font-bold text-2xl">Summary</h1>
      <div className="flex flex-col gap-4">
        <div className="flex-between">
          <span>Subtotal</span>
          <span>{subtotal ? `$${subtotal.toFixed(2)}` : "--"}</span>
        </div>
        <div className="flex-between">
          <span>Shipping & Delivery</span>
          <span>{shippingFee ? `$${shippingFee.toFixed(2)}` : "Free"}</span>
        </div>
        <div className="flex-between">
          <span className="font-bold text-xl">Total</span>
          <span className="font-bold text-xl">
            {totalCost ? `$${totalCost.toFixed(2)}` : "--"}
          </span>
        </div>
      </div>
      <Divider />
      <div className="w-full text-right pt-2">
        <Button>Checkout</Button>
      </div>
    </div>
  );
}
