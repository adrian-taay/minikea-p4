"use client";

import { useUserStore } from "@/lib/useUserStore";
import Image from "next/image";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function ShoppingCartIcon() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useUserStore((state) => state.cart);
  const router = useRouter();

  const CartIcon = (
    <div className="relative">
      <CiShoppingCart size={28} />
      {cart.length > 0 && (
        <Badge
          variant="solid"
          colorScheme="green"
          className="absolute -top-1 -right-1"
        >
          {cart.length}
        </Badge>
      )}
    </div>
  );

  const CartList = cart.map((item) => (
    <MenuItem key={item.id} as="a" href={`/products/${item.id}`}>
      <div className="w-full flex gap-8 justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={50}
            height={50}
            className="bg-cover bg-center rounded-full"
          />
          <span>{item.title}</span>
        </div>
        <span className="text-neutral-400">${item.price}</span>
      </div>
    </MenuItem>
  ));

  const ViewCartLink = (
    <MenuItem _hover={{ backgroundColor: "transparent" }} as="a" href={"/cart"}>
      <span className="bg-neutral-700 text-white text-center px-4 py-1 mt-2 w-full">
        View Cart
      </span>
    </MenuItem>
  );

  return (
    <div onClick={() => router.push("/cart")} className="flex items-center">
      <Menu isOpen={isOpen} gutter={4}>
        <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
          {CartIcon}
        </MenuButton>
        <MenuList
          className="w-full"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          {CartList}
          {ViewCartLink}
        </MenuList>
      </Menu>
    </div>
  );
}
