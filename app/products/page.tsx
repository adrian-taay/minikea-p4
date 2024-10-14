import ProductPagination from "@/app/products/_components/product-pagination";
import ProductSort from "@/app/products/_components/product-sort";
import { ProductFetchResponseType } from "@/types/dummy-products-type";
import axios from "axios";
import { Metadata } from "next";
import ProductCard from "./_components/product-card";

export const metadata: Metadata = {
  title: "Browse All Products | Minikea",
  description: "Shop for furniture, decors, and more - Minikea",
};

export default async function ProductsPage({
  searchParams,
}: {
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
      `https://dummyjson.com/products?skip=${determineSkip}&limit=${limit}${addSortQuery}`
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
