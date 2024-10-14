"use client";

import { useUserStore } from "@/lib/useUserStore";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { CiTrash } from "react-icons/ci";

export default function DeleteEntryAlert({ itemId }: { itemId: number }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const removeFromCart = useUserStore((state) => state.removeFromCart);
  const cancelRef = useRef(null);

  return (
    <>
      <button
        onClick={onOpen}
        className="absolute text-neutral-400 bottom-4 right-4"
      >
        <CiTrash size={28} />
      </button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Item from Cart
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this item?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                bgColor="#404040"
                textColor="#E3E3E3"
                onClick={() => removeFromCart(itemId)}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
