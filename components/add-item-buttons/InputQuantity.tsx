"use client";

import React from "react";

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
    <button onClick={() => setItemQty((q) => (q - 1 < 1 ? q : q - 1))}>
      -
    </button>
  );

  const IncreaseBtn = (
    <button
      onClick={() =>
        setItemQty((q) =>
          q + 1 > stock || q + cartItemQty + 1 > stock ? q : q + 1
        )
      }
    >
      +
    </button>
  );

  return (
    <div className="flex gap-2">
      {DecreaseBtn}
      {itemQty}
      {IncreaseBtn}
    </div>
  );
}
