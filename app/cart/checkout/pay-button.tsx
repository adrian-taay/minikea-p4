"use client";

import React from "react";
import { useUserStore } from "@/lib/useUserStore";
import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";

export default function PayButton() {
  const router = useRouter();
  const cart = useUserStore((state) => state.cart);
  const user = useUserStore((state) => state.user);
  const userCheckout = useUserStore((state) => state.userCheckout);

  function handlePay() {
    userCheckout(cart, user);

    router.push("/cart");
  }

  return <Button onClick={handlePay}>Complete Payment</Button>;
}
