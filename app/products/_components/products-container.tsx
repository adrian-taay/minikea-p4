import { ProductFetchResponseType } from "@/types/dummy-products-type";
import axios from "axios";
import React from "react";
import ProductSort from "./product-sort";
import ProductCard from "./product-card";
import ProductLimit from "./product-limit";

export default async function ProductsContainer({
  determineSkip,
  limit,
  addSortQuery,
}: {
  determineSkip: number;
  limit: string;
  addSortQuery: string;
}) {
  const addLimit = limit === "all" ? "0" : String(limit);

  try {
    const response = await axios(
      `https://dummyjson.com/products?skip=${determineSkip}&limit=${addLimit}${addSortQuery}`
    );

    console.log(
      `https://dummyjson.com/products?skip=${determineSkip}&limit=${addLimit}${addSortQuery}`
    );

    const data: ProductFetchResponseType = response.data;

    return (
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p>
            Products Found: {data.total} {data.total === 1 ? "item" : "items"}
          </p>
          <div className="flex gap-3">
            <ProductSort />
            <ProductLimit />
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:gap-4 py-4 lg:grid-cols-4 xl:grid-cols-5">
          {data?.products.map((item, index) => (
            <ProductCard cardData={item} key={index} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
