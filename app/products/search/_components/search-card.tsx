import { DummyProductType } from "@/types/dummy-products-type";
import { createSlug } from "@/utils/createSlug";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SearchCard({ item }: { item: DummyProductType }) {
  const slug = createSlug(item);

  return (
    <Link
      href={`/products/${item.category}/${slug}`}
      className="w-full flex flex-col gap-2"
    >
      <div className="relative w-full aspect-square overflow-hidden bg-stone-200">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="absolute object-cover bg-center bg-stone-200 hover:scale-125 transition-transform ease-in-out"
        />
      </div>
      <div className="leading-snug -space-y-1">
        <p className="text-sm">{item.brand ? item.brand : "Minikea"}</p>
        <h1 className="font-bold">{item.title}</h1>
      </div>
    </Link>
  );
}
