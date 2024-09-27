"use client";

import { CartItem } from "@/lib/createCartSlice";
import { useUserStore } from "@/lib/useUserStore";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function CheckoutButton() {
  const router = useRouter();
  const cart = useUserStore((state) => state.cart);
  const userCheckout = useUserStore((state) => state.userCheckout);

  function handleCheckout() {
    if (cart.length < 1) return;

    userCheckout(cart);

    router.push("/user/purchases");
  }

  return (
    <Button onClick={handleCheckout} disabled={cart.length < 1}>
      Proceed to Checkout
    </Button>
  );
}
