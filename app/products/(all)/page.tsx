import { Metadata } from "next";
import DisplayProducts, {
  DisplayProductsType,
} from "../../_shared/display-products/display-products";
import { randomProductIdArray } from "@/utils/randomProductIdArray";
import { Suspense } from "react";
import ProductSkeleton from "../_components/product-skeleton";
import CategoryNav from "../_components/category-nav";
import ProductsContainer from "../_components/products-container";
import Image from "next/image";
import { category_all } from "@/app/_shared/constants/images";

export const metadata: Metadata = {
  title: "Browse All Products | Minikea",
  description: "Shop for furniture, decors, and more - Minikea",
};

export default async function ProductsPage({
  searchParams,
}: {
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

  const randomPicks: DisplayProductsType = {
    headline: "You might like these",
    products: randomProductIdArray(6),
  };

  const ImageBanner = (
    <div className="relative flex-center bg-stone-600 text-neutral-200 rounded-sm">
      <div className="relative w-full h-[300px]">
        <Image
          src={category_all}
          alt="all products splash"
          fill
          sizes="100vw"
          priority
          className="absolute object-cover bg-center"
        />
      </div>
      <h1 className="absolute w-full h-full capitalize text-xl md:text-4xl flex-center bg-neutral-700/70">
        Products
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
