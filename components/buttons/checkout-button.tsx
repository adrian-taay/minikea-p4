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
      <Button onClick={handleCheckout} disabled={cart.length < 1}>
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

        <AlertDialogContent>
          <AlertDialogHeader>Proceed to Checkout</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>You must login to continue.</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              I&apos;ll do it later
            </Button>
            <Button
              colorScheme="gray"
              ml={3}
              onClick={() => router.push("/user/login")}
            >
              Login
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
