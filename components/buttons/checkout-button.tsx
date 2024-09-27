"use client";

import { useUserStore } from "@/lib/useUserStore";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function CheckoutButton() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const cart = useUserStore((state) => state.cart);
  const userCheckout = useUserStore((state) => state.userCheckout);

  function handleCheckout() {
    if (cart.length < 1) return;

    userCheckout(cart, user);

    router.push("/user");
  }

  return (
    <Button onClick={handleCheckout} disabled={cart.length < 1}>
      Proceed to Checkout
    </Button>
  );
}
