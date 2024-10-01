"use client";

import { useUserStore } from "@/lib/useUserStore";
import { DummyProductType } from "@/types/dummy-products-type";
import { Button } from "@chakra-ui/react";
import React from "react";

export default function AddItemBtn({
  item,
  qty,
}: {
  item: DummyProductType;
  qty: number;
}) {
  const addItem = useUserStore(state => state.addToCart);

  return (
    <Button
      bgColor="#404040"
      textColor="#E3E3E3"
      onClick={() => addItem(item, qty)}>
      Add Item to Cart
    </Button>
  );
}
