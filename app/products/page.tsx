import ProductPagination from "@/app/products/_components/product-pagination";
import ProductSort from "@/app/products/_components/product-sort";
import { ProductFetchResponseType } from "@/types/dummy-products-type";
import axios from "axios";
import { Metadata } from "next";
import ProductCard from "./_components/product-card";
import DisplayProducts, {
  DisplayProductsType,
} from "../_shared/display-products/display-products";
import { randomProductIdArray } from "@/utils/randomProductIdArray";
import DeliveryBanner from "../_shared/delivery-banner/delivery-banner";
import { Suspense } from "react";
import ProductSkeleton from "./_components/product-skeleton";

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

  const randomPicks: DisplayProductsType = {
    headline: "You might like these",
    products: randomProductIdArray(6),
  };

  try {
    const response = await axios(
      `https://dummyjson.com/products?skip=${determineSkip}&limit=${limit}${addSortQuery}`
    );

    const data: ProductFetchResponseType = response.data;
    const isMultiplePages = data.total / data.limit > 1;

    return (
      <section className="w-full max-w-screen-2xl mx-auto">
        {/* <h1>Products</h1>
        <p>Total Products: {data.total}</p> */}
        <div className="p-4 lg:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-1 my-4 ">
            <p>
              Products Found: {data.total} {data.total === 1 ? "item" : "items"}
            </p>
            <ProductSort />
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-4 py-4 lg:grid-cols-4 xl:grid-cols-5">
            {data?.products.map((item, index) => (
              <Suspense key={index} fallback={<ProductSkeleton />}>
                <ProductCard cardData={item} />
              </Suspense>
            ))}
          </div>
          <div className="flex-center py-2 md:py-8 border-t">
            {isMultiplePages && (
              <ProductPagination total={data.total} limit={limit} />
            )}
          </div>
          <DisplayProducts displayProductObject={randomPicks} />
          <div className="mt-8">
            <DeliveryBanner />
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.log(error);
  }
}
