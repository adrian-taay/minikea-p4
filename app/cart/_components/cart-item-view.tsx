"use client";

import React from "react";
import { useUserStore } from "@/lib/useUserStore";
import Image from "next/image";
import { GoDash, GoPlus } from "react-icons/go";
import Link from "next/link";
import { createSlug } from "@/utils/createSlug";
import { CartItem } from "@/types/dummy-products-type";
import DeleteEntryAlert from "./delete-entry-alert";

export default function CartItemView() {
  const cart = useUserStore((state) => state.cart);
  const incrementCartItemQty = useUserStore(
    (state) => state.incrementCartItemQty
  );
  const decrementCartItemQty = useUserStore(
    (state) => state.decrementCartItemQty
  );

  const QuantityControlButtons = ({ item }: { item: CartItem }) => {
    return (
      <div className="flex-center text-2xl border">
        <button className="p-3" onClick={() => decrementCartItemQty(item.id)}>
          <GoDash />
        </button>
        <span className="font-bold px-3">{item.quantity}</span>
        <button
          className="px-3 py-1.5"
          onClick={() => incrementCartItemQty(item.id)}
        >
          <GoPlus />
        </button>
      </div>
    );
  };

  const CartItems = cart.map((item) => (
    <div
      key={item.id}
      className="flex gap-4 w-full items-start border p-4 relative"
    >
      <div className="bg-stone-200 p-2">
        <Image src={item.thumbnail} width={100} height={100} alt={item.title} />
      </div>
      <div className="flex flex-col items-start gap-4 flex-1">
        <div className="-space-y-1">
          <Link href={createSlug(item)} className="font-bold text-xl">
            {item.title}
          </Link>
          <p className="text-neutral-400">${item.price.toFixed(2)}</p>
        </div>
        <QuantityControlButtons item={item} />
        <p className="font-semibold text-lg">
          $ {(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <DeleteEntryAlert itemId={item.id} />
    </div>
  ));

  const NoItem = (
    <div className="w-full h-full flex-center border border-dashed text-neutral-400">
      <p>There are no items in your cart.</p>
    </div>
  );

  return (
    <div className="w-full space-y-4">
      {cart.length > 0 ? CartItems : NoItem}
    </div>
  );
}
