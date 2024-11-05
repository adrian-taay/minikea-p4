import React, { Suspense } from "react";
import { productCategoryLinks } from "@/app/_shared/navbar/menuLinks";
import Image from "next/image";
import { feature_gift } from "@/app/_shared/constants/images";
import DisplayProducts, {
  DisplayProductsType,
} from "@/app/_shared/display-products/display-products";
import { randomProductIdArray } from "@/utils/randomProductIdArray";
import CategoryNav from "../_components/category-nav";
import ProductSkeleton from "../_components/product-skeleton";
import ProductsContainer from "../_components/products-container";

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
    limit?: string;
    sortBy?: string;
    order?: string;
  };
}) {
  const pageQuery = searchParams?.page || 1;
  const sortByQuery = searchParams?.sortBy;
  const orderQuery = searchParams?.order;
  const limit = searchParams?.limit || "10";

  const addSortQuery =
    sortByQuery && orderQuery
      ? `&sortBy=${sortByQuery}&order=${orderQuery}`
      : "";

  const determineLimit = limit === "all" ? 0 : Number(limit);

  const determineSkip =
    Number(pageQuery) === 1 ? 0 : (Number(pageQuery) - 1) * determineLimit;

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

  const ImageBanner = (
    <div className="relative flex-center bg-stone-600 text-neutral-200 rounded-sm">
      <div className="relative w-full h-[300px]">
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
    <section
      className="w-full max-w-screen-2xl mx-auto"
      id={Math.random().toString()}
    >
      {ImageBanner}
      <div className="w-full flex p-4 lg:p-8">
        <div className="hidden md:block md:w-2/5 lg:w-1/4 xl:w-1/5">
          <CategoryNav />
        </div>
        <Suspense fallback={<ProductSkeleton />}>
          <ProductsContainer
            category={params.category}
            determineSkip={determineSkip}
            limit={limit}
            addSortQuery={addSortQuery}
          />
        </Suspense>
      </div>
      <div className="px-4 lg:px-8">
        <DisplayProducts displayProductObject={randomPicks} />
      </div>
    </section>
  );
}
