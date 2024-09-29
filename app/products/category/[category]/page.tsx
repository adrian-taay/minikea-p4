import ProductCard from "@/components/cards/product-card";
import ProductFilter from "@/components/products/product-filter";
import ProductPagination from "@/components/products/product-pagination";
import ProductSort from "@/components/products/product-sort";
import { DummyProductType } from "@/types/dummy-products-type";
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

type ResponseType = {
  products: DummyProductType[];
  total: number;
  skip: number;
  limit: number;
};

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams?: {
    page?: string;
    sortBy?: string;
    order?: string;
    avail?: string;
  };
}) {
  const pageQuery = searchParams?.page || 1;
  const sortByQuery = searchParams?.sortBy;
  const orderQuery = searchParams?.order;
  const availQuery = searchParams?.avail;

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

    let data: ResponseType = response.data;

    if (availQuery) {
      const filtered = data.products.filter((item) => {
        if (availQuery === "true") return item.stock > 0;
        if (availQuery === "false") return item.stock === 0;
      });

      data = { ...data, total: filtered.length, products: filtered };
    }

    const isMultiplePages = data.total / data.limit > 1;

    return (
      <div>
        <h1>Products</h1>
        <p>Total Products: {data.total}</p>
        <ProductSort />
        <ProductFilter />
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
