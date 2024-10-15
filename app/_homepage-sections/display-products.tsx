import { DummyProductType } from "@/types/dummy-products-type";
import axios from "axios";
import React from "react";
import SearchCard from "../products/search/_components/search-card";
import ActionButton from "./_action-button";

export type DisplayProductsType = {
  headline: string;
  products: number[];
};

export default async function DisplayProducts({
  displayProductObject,
}: {
  displayProductObject: DisplayProductsType;
}) {
  const result = await Promise.all([
    ...displayProductObject.products.map((product) =>
      axios(`https://dummyjson.com/products/${product}`)
    ),
  ]);

  const products: DummyProductType[] = result.map((item) => item.data);

  const DisplayPopularProducts = (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {products.map((product) => (
        <SearchCard item={product} key={product.id} />
      ))}
    </div>
  );

  return (
    <div className="w-full px-4 md:px-8 py-20 flex flex-col gap-8 items-center">
      <h1 className="font-semibold text-3xl place-self-start">
        {displayProductObject.headline}
      </h1>
      {DisplayPopularProducts}
      <ActionButton title="See our Products" href="/products" />
    </div>
  );
}
