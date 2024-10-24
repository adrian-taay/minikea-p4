"use client";

import QuickAddButton from "@/app/products/_components/quick-add-button";
import { useUserStore } from "@/lib/useUserStore";
import { createSlug } from "@/utils/createSlug";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { GoHeart } from "react-icons/go";

export default function TempWishlistDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const tempWishlist = useUserStore((state) => state.tempWishlist);

  const TempWishlistButton = (
    <div onClick={onOpen} className="relative max-xs:hidden cursor-pointer">
      <GoHeart size={24} />
      {tempWishlist.length > 0 && (
        <Badge
          variant="solid"
          textColor="#E5E5E5"
          bg="#404040"
          rounded="full"
          className="absolute -top-1 -right-1"
        >
          {tempWishlist.length}
        </Badge>
      )}
    </div>
  );

  return (
    <>
      {!isLoggedIn && TempWishlistButton}
      {!isLoggedIn && (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Wishlist</DrawerHeader>

            <DrawerBody className="flex flex-col gap-3">
              {tempWishlist.map((item) => {
                const slug = createSlug(item);
                const lowStock = item.stock < 10;

                return (
                  <div
                    className="w-full relative flex gap-3 justify-between border rounded-md"
                    key={item.id}
                  >
                    <Image
                      src={item.thumbnail}
                      width={100}
                      height={100}
                      alt={item.title}
                      className="bg-stone-200"
                    />
                    <div className="w-full flex flex-col items-start flex-1 py-1">
                      <Link
                        href={`/products/${item.category}/${slug}`}
                        className="font-semibold text-lg"
                      >
                        {item.title}
                      </Link>
                      <div className="text-sm">
                        {lowStock ? `${item.stock} items left!` : "In Stock"}
                      </div>
                      <div className="font-semibold">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                    <div className="absolute right-4 bottom-4">
                      <QuickAddButton item={item} qty={1} />
                    </div>
                  </div>
                );
              })}
            </DrawerBody>

            <DrawerFooter className="flex flex-col gap-4">
              <p>Don&apos;t lose your wishlist. Sign in to your account.</p>
              <Button
                rounded="none"
                size="sm"
                textColor="#E5E5E5"
                bg="#404040"
                _hover={{ bg: "#535353" }}
                className="place-self-start"
              >
                <Link href={"/login"}>Sign in</Link>
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
