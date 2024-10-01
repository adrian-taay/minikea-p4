"use client";

import React from "react";
import { GoDash, GoPlus } from "react-icons/go";

export default function InputQuantity({
  stock,
  itemQty,
  setItemQty,
  cartItemQty,
}: {
  stock: number;
  itemQty: number;
  setItemQty: React.Dispatch<React.SetStateAction<number>>;
  cartItemQty: number;
}) {
  const DecreaseBtn = (
    <button
      className="p-2 md:p-3"
      onClick={() => setItemQty((q) => (q - 1 < 1 ? q : q - 1))}
    >
      <GoDash />
    </button>
  );

  const IncreaseBtn = (
    <button
      className="px-2 md:px-3 py-1.5"
      onClick={() =>
        setItemQty((q) =>
          q + 1 > stock || q + cartItemQty + 1 > stock ? q : q + 1
        )
      }
    >
      <GoPlus />
    </button>
  );

  return (
    <div className="flex-start md:text-2xl border">
      {DecreaseBtn}
      <span className="font-bold px-3 md:px-6">{itemQty}</span>
      {IncreaseBtn}
    </div>
  );
}
