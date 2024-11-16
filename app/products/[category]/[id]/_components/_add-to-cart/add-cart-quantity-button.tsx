"use client";

import React, { useState } from "react";
import InputQuantity from "./qty-control-buttons";
import AddItemBtn from "./add-item-button";
import { useUserStore } from "@/lib/useUserStore";
import { DummyProductType } from "@/types/dummy-products-type";
import ToggleWishlistButton from "@/app/user/wishlist/toggle-wishlist-button";
import ToggleTempWishlistButton from "@/app/user/wishlist/toggle-temp-wishlist-button";

export default function AddItemBtnWrapper({
  item,
}: {
  item: DummyProductType;
}) {
  const cart = useUserStore(state => state.cart);
  const [itemQty, setItemQty] = useState(1);

  const cartItemQty = cart.find(cartItem => cartItem.id === item.id)?.quantity;

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
      <InputQuantity
        stock={item.stock}
        itemQty={itemQty}
        setItemQty={setItemQty}
        cartItemQty={cartItemQty || 0}
      />
      <AddItemBtn
        item={item}
        qty={itemQty}
      />
      <ToggleWishlistButton cardData={item} />
      <ToggleTempWishlistButton cardData={item} />
    </div>
  );
}
