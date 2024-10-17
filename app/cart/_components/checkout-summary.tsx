"use client";

import { useUserStore } from "@/lib/useUserStore";
import { Divider } from "@chakra-ui/react";
import React from "react";
import CheckoutButton from "./checkout-button";

export default function CheckoutSummary() {
  const cart = useUserStore((state) => state.cart);
  const shippingFee = Number(0);
  const subtotal = cart.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);
  const totalCost = subtotal + shippingFee;

  return (
    <div className="w-full lg:w-3/5 flex h-full flex-col p-8 text-lg space-y-8 max-md:my-8 bg-stone-100">
      <div className="space-y-8">
        <h1 className="font-bold text-xl">Summary</h1>
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex-between">
            <span>Subtotal</span>
            <span>{subtotal ? `$${subtotal.toFixed(2)}` : "--"}</span>
          </div>
          <div className="flex-between">
            <span>Shipping & Delivery</span>
            <span>{shippingFee ? `$${shippingFee.toFixed(2)}` : "Free"}</span>
          </div>
          <div className="flex-between">
            <span className="font-bold text-lg">Total</span>
            <span className="font-bold text-lg">
              {totalCost ? `$${totalCost.toFixed(2)}` : "--"}
            </span>
          </div>
        </div>
      </div>
      <div>
        <Divider />
        <div className="w-full text-right pt-8">
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
}
