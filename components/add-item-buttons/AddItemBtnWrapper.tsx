"use client";

import React, { useState } from "react";
import InputQuantity from "./InputQuantity";
import AddItemBtn from "./AddItemBtn";
import { DummyProductType } from "@/types";
import { useUserStore } from "@/lib/useUserStore";

export default function AddItemBtnWrapper({
  item,
}: {
  item: DummyProductType;
}) {
  const cart = useUserStore((state) => state.cart);
  const [itemQty, setItemQty] = useState(1);

  const cartItemQty = cart.find(
    (cartItem) => cartItem.id === item.sku
  )?.quantity;

  return (
    <div>
      <InputQuantity
        stock={item.stock}
        itemQty={itemQty}
        setItemQty={setItemQty}
        cartItemQty={cartItemQty || 0}
      />
      <AddItemBtn item={item} qty={itemQty} />
    </div>
  );
}
