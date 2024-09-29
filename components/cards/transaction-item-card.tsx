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
        "flex",
        "gap-3",
        "justify-between",
        "items-stretch",
        "border-b",
        "p-4",
        "text-neutral-500"
      )}
    >
      <div className="bg-stone-200">
        <Image src={item.thumbnail} width={75} height={75} alt={item.title} />
      </div>
      <div className="flex flex-col items-start flex-1">
        <div>
          <Link
            href={`/products/${item.category}/${slug}`}
            className="font-semibold"
          >
            {item.title}
          </Link>
        </div>
        <p className="text-sm">Qty: {item.quantity} items</p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div className={clsx("font-semibold")}>
          $ {(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
}
