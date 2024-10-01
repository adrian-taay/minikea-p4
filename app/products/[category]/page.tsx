import ProductCard from "@/components/cards/product-card";
import ProductPagination from "@/components/products/product-pagination";
import ProductSort from "@/components/products/product-sort";
import { ProductFetchResponseType } from "@/types/dummy-products-type";
import axios from "axios";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const pageTitle = params.category
    .split("-")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Browse ${pageTitle} | Minikea`,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams?: {
    page?: string;
    sortBy?: string;
    order?: string;
  };
}) {
  const pageQuery = searchParams?.page || 1;
  const sortByQuery = searchParams?.sortBy;
  const orderQuery = searchParams?.order;

  const addSortQuery =
    sortByQuery && orderQuery
      ? `&sortBy=${sortByQuery}&order=${orderQuery}`
      : "";

  const limit = 6;
  const determineSkip =
    Number(pageQuery) === 1 ? 0 : (Number(pageQuery) - 1) * limit;

  try {
    const response = await axios(
      `https://dummyjson.com/products/category/${params.category}?skip=${determineSkip}&limit=${limit}${addSortQuery}`
    );

    const data: ProductFetchResponseType = response.data;
    const isMultiplePages = data.total / data.limit > 1;

    return (
      <div className="w-full p-4 lg:p-8 max-w-screen-2xl mx-auto">
        <div className="flex-center py-10 md:py-16 bg-stone-600 text-neutral-200 rounded-sm">
          <h1 className="capitalize text-xl md:text-3xl font-semibold">
            {params.category}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-1 my-4">
          <p>
            Products Found: {data.total} {data.total === 1 ? "item" : "items"}
          </p>
          <ProductSort />
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:gap-4 py-4 lg:grid-cols-3">
          {data?.products.map((item, index) => (
            <ProductCard
              cardData={item}
              key={index}
            />
          ))}
        </div>
        <div className="flex-center py-2 md:py-8 border-t">
          {isMultiplePages && (
            <ProductPagination
              total={data.total}
              limit={limit}
            />
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
