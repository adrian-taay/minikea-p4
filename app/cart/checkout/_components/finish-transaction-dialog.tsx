"use client";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

import React from "react";
import { useUserStore } from "@/lib/useUserStore";

export default function FinishTransactionDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const cart = useUserStore((state) => state.cart);
  const userCheckout = useUserStore((state) => state.userCheckout);
  const cancelRef = useRef(null);

  function handlePay() {
    if (!cart) return;

    userCheckout(cart, user);

    setTimeout(() => onOpen(), 1000);
  }

  return (
    <>
      <Button
        bgColor="#404040"
        textColor="#E3E3E3"
        rounded="none"
        onClick={handlePay}
      >
        Complete Payment
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <AlertDialogOverlay />

        <AlertDialogContent rounded="none" py={2}>
          <AlertDialogHeader>Payment Complete!</AlertDialogHeader>
          <AlertDialogBody>Thank you for your purchase.</AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={() => router.push("/user/transactions")}>
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
