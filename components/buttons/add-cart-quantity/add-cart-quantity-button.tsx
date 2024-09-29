"use client";

import React, { useState } from "react";
import InputQuantity from "./qty-control-buttons";
import AddItemBtn from "./add-item-button";
import { useUserStore } from "@/lib/useUserStore";
import { DummyProductType } from "@/types/dummy-products-type";

export default function AddItemBtnWrapper({
  item,
}: {
  item: DummyProductType;
}) {
  const cart = useUserStore((state) => state.cart);
  const [itemQty, setItemQty] = useState(1);

  const cartItemQty = cart.find(
    (cartItem) => cartItem.id === item.id
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
