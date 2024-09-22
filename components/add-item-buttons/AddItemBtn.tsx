"use client";

import { useUserStore } from "@/lib/useUserStore";
import { DummyProductType } from "@/types";
import React from "react";

export default function AddItemBtn({
  item,
  qty,
}: {
  item: DummyProductType;
  qty: number;
}) {
  // const addItem = useShoppingCart((state) => state.addItem);
  const addItem = useUserStore((state) => state.addToCart);

  return <button onClick={() => addItem(item, qty)}>Add Item to Cart</button>;
}
