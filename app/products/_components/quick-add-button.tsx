"use client";

import { useUserStore } from "@/lib/useUserStore";
import { DummyProductType } from "@/types/dummy-products-type";
import React from "react";
import { GoPlus } from "react-icons/go";

export default function QuickAddButton({
  item,
  qty,
}: {
  item: DummyProductType;
  qty: number;
}) {
  const addItem = useUserStore(state => state.addToCart);

  return (
    <button
      onClick={() => addItem(item, qty)}
      className="ring-1 ring-neutral-800 bg-neutral-600 text-neutral-200 rounded-full">
      <GoPlus size={24} />
    </button>
  );
}
