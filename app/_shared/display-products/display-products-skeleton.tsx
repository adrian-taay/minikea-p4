import ActionButton from "@/app/_homepage-sections/_action-button";
import ProductSkeleton from "@/app/products/_components/product-skeleton";
import React from "react";

export default function DisplayProductsSkeleton() {
  const DisplayPopularProducts = (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {[...Array(6)].map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );

  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <h1 className="text-2xl place-self-center md:place-self-start bg-neutral-300 animate-pulse h-6 w-3/12 rounded-full"></h1>
      {DisplayPopularProducts}
      <ActionButton
        title="See more"
        href="/products"
        style={{
          rounded: "none",
        }}
      />
    </div>
  );
}
