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
    .map((word) => word[0].toUpperCase() + word.slice(1))
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
      <div>
        <h1>Products</h1>
        <p>Total Products: {data.total}</p>
        <ProductSort />
        <div className="flex gap-4 flex-wrap">
          {data?.products.map((item, index) => (
            <ProductCard cardData={item} key={index} />
          ))}
        </div>
        {isMultiplePages && (
          <ProductPagination total={data.total} limit={limit} />
        )}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
