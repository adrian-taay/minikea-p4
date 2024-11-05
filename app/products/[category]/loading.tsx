import React from "react";
import CategoryNav from "../_components/category-nav";
import ProductsContainerSkeleton from "../_components/products-container-skeleton";
import DisplayProductsSkeleton from "@/app/_shared/display-products/display-products-skeleton";

export default function CategoryPageLoading() {
  const ImageBannerSkeleton = (
    <div className="flex-center w-full h-[300px] bg-neutral-400 animate-pulse">
      <h1 className="bg-neutral-300 animate-pulse h-10 w-4/12 rounded-full"></h1>
    </div>
  );

  return (
    <section className="w-full max-w-screen-2xl mx-auto">
      {ImageBannerSkeleton}
      <div className="w-full flex p-4 lg:p-8">
        <div className="hidden md:block md:w-2/5 lg:w-1/4 xl:w-1/5">
          <CategoryNav />
        </div>
        <ProductsContainerSkeleton />
      </div>
      <div className="px-4 lg:px-8">
        <DisplayProductsSkeleton />
      </div>
    </section>
  );
}
