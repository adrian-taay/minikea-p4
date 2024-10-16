"use client";

import { useUserStore } from "@/lib/useUserStore";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function CheckoutButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const cart = useUserStore((state) => state.cart);

  const cancelRef = useRef(null);

  function handleCheckout() {
    if (cart.length < 1) return;

    if (!isLoggedIn) {
      return onOpen();
    }

    router.push("/cart/checkout");
  }

  return (
    <>
      <Button
        bgColor="#404040"
        textColor="#E3E3E3"
        rounded="none"
        onClick={handleCheckout}
        disabled={cart.length < 1}
      >
        Proceed to Checkout
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent rounded="none" py={2}>
          <AlertDialogHeader>Proceed to Checkout</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>You must login to continue.</AlertDialogBody>
          <AlertDialogFooter>
            <Button rounded="none" ref={cancelRef} onClick={onClose}>
              I&apos;ll do it later
            </Button>
            <Button
              bgColor="#404040"
              textColor="#E3E3E3"
              rounded="none"
              ml={3}
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
