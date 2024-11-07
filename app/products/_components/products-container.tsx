import { ProductFetchResponseType } from "@/types/dummy-products-type";
import axios from "axios";
import React from "react";
import ProductSort from "./product-sort";
import ProductCard from "./product-card";
import ProductLimit from "./product-limit";
import ProductPagination from "./product-pagination";

export default async function ProductsContainer({
  category,
  determineSkip,
  limit,
  addSortQuery,
  pageQuery,
}: {
  category?: string;
  determineSkip: number;
  limit: string;
  addSortQuery: string;
  pageQuery: number;
}) {
  const addLimit = limit === "all" ? "0" : String(limit);

  const apiUrl = category
    ? `https://dummyjson.com/products/category/${category}?skip=${determineSkip}&limit=${addLimit}${addSortQuery}`
    : `https://dummyjson.com/products?skip=${determineSkip}&limit=${addLimit}${addSortQuery}`;

  // try {
  const response = await axios(apiUrl);

  const data: ProductFetchResponseType = response.data;

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between mb-4 gap-3">
        <p>
          Products Found: {data.total} {data.total === 1 ? "item" : "items"}
        </p>
        <div className="flex flex-col md:flex-row gap-3">
          <ProductSort />
          <ProductLimit />
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="grid gap-8 xs:grid-cols-2 xs:gap-4 py-4 lg:grid-cols-4 xl:grid-cols-5">
          {data?.products.map((item, index) => (
            <ProductCard
              cardData={item}
              key={index}
            />
          ))}
        </div>
        <div className="w-full flex-center">
          <ProductPagination
            total={data.total}
            limit={10}
            pageQuery={pageQuery}
          />
        </div>
      </div>
    </div>
  );
  // } catch (error) {
  //   console.log(error);
  // }
}
