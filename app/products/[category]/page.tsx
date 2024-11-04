import ProductPagination from "@/app/products/_components/product-pagination";
import ProductSort from "@/app/products/_components/product-sort";
import { ProductFetchResponseType } from "@/types/dummy-products-type";
import axios from "axios";
import React from "react";
import ProductCard from "../_components/product-card";
import { productCategoryLinks } from "@/app/_shared/navbar/menuLinks";
import Image from "next/image";
import { feature_gift } from "@/app/_shared/constants/images";
import DisplayProducts, {
  DisplayProductsType,
} from "@/app/_shared/display-products/display-products";
import { randomProductIdArray } from "@/utils/randomProductIdArray";
import CategoryNav from "../_components/category-nav";

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

  const productGroup = productCategoryLinks.find((item) =>
    item.links.some((obj) => obj.href === params.category)
  );
  const productCategory = productGroup?.links.find(
    (item) => item.href === params.category
  );

  const randomPicks: DisplayProductsType = {
    headline: "You might like these",
    products: randomProductIdArray(6),
  };

  try {
    const response = await axios(
      `https://dummyjson.com/products/category/${params.category}?skip=${determineSkip}&limit=${limit}${addSortQuery}`
    );

    const data: ProductFetchResponseType = response.data;
    const isMultiplePages = data.total / data.limit > 1;

    const ImageBanner = (
      <div className="relative flex-center bg-stone-600 text-neutral-200 rounded-sm">
        <div className="relative w-full h-[450px] lg:h-[300px]">
          <Image
            src={productCategory?.img ?? feature_gift}
            alt={productCategory?.title ?? params.category}
            fill
            sizes="100vw"
            priority
            className="absolute object-cover bg-center"
          />
        </div>
        <h1 className="absolute w-full h-full capitalize text-xl md:text-4xl flex-center bg-neutral-700/70">
          {productCategory?.title}
        </h1>
      </div>
    );

    return (
      <section className="w-full max-w-screen-2xl mx-auto">
        {ImageBanner}
        <div className="w-full flex p-4 lg:p-8">
          <div className="hidden md:block md:w-2/5 lg:w-1/4 xl:w-1/5">
            <CategoryNav />
          </div>
          <div className="w-full flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-between gap-1">
              <p>
                Products Found: {data.total}{" "}
                {data.total === 1 ? "item" : "items"}
              </p>
              <ProductSort />
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:gap-4 py-4 lg:grid-cols-4 xl:grid-cols-5">
              {data?.products.map((item, index) => (
                <ProductCard cardData={item} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-center py-2 md:py-8 border-t">
          {isMultiplePages && (
            <ProductPagination total={data.total} limit={limit} />
          )}
        </div>
        <div className="px-4 lg:px-8">
          <DisplayProducts displayProductObject={randomPicks} />
        </div>
      </section>
    );
  } catch (error) {
    console.log(error);
  }
}
