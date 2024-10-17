import { CartItem } from "@/types/dummy-products-type";
import { createSlug } from "@/utils/createSlug";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TransactionItemsCard({ item }: { item: CartItem }) {
  const slug = createSlug(item);

  return (
    <div
      className={clsx(
        "w-full",
        "flex",
        "gap-3",
        // "justify-between",
        // "items-stretch",
        "border-b",
        "p-3",
        "xs:p-4",
        "text-neutral-500"
      )}
    >
      <div className="relative bg-stone-200 w-20 aspect-square">
        <Image
          src={item.thumbnail}
          fill
          alt={item.title}
          sizes="80px"
          className="absolute object-cover bg-center"
        />
      </div>
      <div className="flex flex-col items-start flex-1">
        <Link
          href={`/products/${item.category}/${slug}`}
          className="font-semibold"
        >
          {item.title}
        </Link>
        <p className="text-sm">
          Qty: {item.quantity} {item.quantity === 1 ? "item" : "items"}
        </p>
        <div className={clsx("font-semibold")}>
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
}
