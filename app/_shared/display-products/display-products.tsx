import { DummyProductType } from "@/types/dummy-products-type";
import axios from "axios";
import React from "react";
import ActionButton from "../../_homepage-sections/_action-button";
import SearchCard from "@/app/search/_components/search-card";

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
    <div className="w-full flex flex-col gap-8 items-center">
      <h1 className="text-2xl place-self-center md:place-self-start">
        {displayProductObject.headline}
      </h1>
      {DisplayPopularProducts}
      <ActionButton
        title="See more"
        href="/products"
        style={{
          rounded: "none",
        }}
      />
    </div>
  );
}
