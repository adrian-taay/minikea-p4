import ProductCard from "@/components/products/product-card";
import ProductPagination from "@/components/products/product-pagination";
import { DummyProductType } from "@/types";
import axios from "axios";
import React from "react";

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
  };
}) {
  const pageQuery = searchParams?.page || 1;

  const limit = 6;
  const determineSkip =
    Number(pageQuery) === 1 ? 0 : (Number(pageQuery) - 1) * limit;

  try {
    const response = await axios(
      `https://dummyjson.com/products/category/${params.category}?skip=${determineSkip}&limit=${limit}`
    );

    const data: ResponseType = response.data;
    const isMultiplePages = data.total / data.limit > 1;

    return (
      <div>
        <h1>Products</h1>
        <p>Total Products: {data.total}</p>
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
