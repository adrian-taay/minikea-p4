"use client";

import { useShoppingCart } from "@/lib/useShoppingCart";
import { DummyProductType } from "@/types";
import React from "react";

export default function AddItemBtn({ item }: { item: DummyProductType }) {
  const addItem = useShoppingCart((state) => state.addItem);

  return <button onClick={() => addItem(item)}>Add Item to Cart</button>;
}
