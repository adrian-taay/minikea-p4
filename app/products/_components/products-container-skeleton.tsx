import React, { Suspense } from "react";
import ProductSort from "./product-sort";
import ProductLimit from "./product-limit";
import ProductSkeleton from "./product-skeleton";

export default function ProductsContainerSkeleton() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between mb-4 gap-3">
        <p className="bg-neutral-300 animate-pulse h-6 w-3/12 rounded-full"></p>
        <div className="flex flex-col md:flex-row gap-3">
          <Suspense>
            <ProductSort />
            <ProductLimit />
          </Suspense>
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 md:gap-4 py-4 lg:grid-cols-4 xl:grid-cols-5">
        {[...Array(10)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
