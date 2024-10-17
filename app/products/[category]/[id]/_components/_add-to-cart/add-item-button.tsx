"use client";

import { useUserStore } from "@/lib/useUserStore";
import { DummyProductType } from "@/types/dummy-products-type";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { PiCheckLight } from "react-icons/pi";

export default function AddItemBtn({
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
      <Button
        bgColor="#404040"
        _hover={{ bg: "#535353" }}
        textColor="#E3E3E3"
        rounded="none"
        onClick={handleClick}
      >
        Add Item to Cart
      </Button>

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
