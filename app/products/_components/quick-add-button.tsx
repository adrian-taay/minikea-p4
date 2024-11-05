"use client";

import { useUserStore } from "@/lib/useUserStore";
import { DummyProductType } from "@/types/dummy-products-type";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { GoPlus } from "react-icons/go";
import { PiCheckLight } from "react-icons/pi";

export default function QuickAddButton({
  item,
  qty,
}: {
  item: DummyProductType;
  qty: number;
}) {
  const addItem = useUserStore((state) => state.addToCart);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  function handleClick() {
    addItem(item, qty);
    onOpen();

    setTimeout(() => onClose(), 1500);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="ring-1 ring-neutral-800 bg-neutral-600 text-neutral-200 rounded-full"
      >
        <GoPlus size={24} />
      </button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent rounded="none" p={4}>
            <AlertDialogBody>
              <p className="flex gap-3 items-center">
                <PiCheckLight size={24} />
                <span>Item successfully added to cart!</span>
              </p>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
