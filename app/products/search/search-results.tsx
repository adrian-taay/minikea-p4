import { DummyProductType } from "@/types/dummy-products-type";
import axios from "axios";
import React from "react";
import SearchCard from "./search-card";
import ShowMoreProducts from "@/components/buttons/show-more-products";

export default async function SearchResults({
  query,
  limit,
}: {
  query: string;
  limit: string;
}) {
  const response = await axios(
    `https://dummyjson.com/products/search?q=${query}&skip=0&limit=${limit}`
  );
  const products: DummyProductType[] = response.data.products;
  const totalFetchedProducts: number = response.data.total;

  const TotalProductsFound = (
    <p>
      Products Found: {totalFetchedProducts}{" "}
      {totalFetchedProducts === 1 ? "item" : "items"}
    </p>
  );

  const ShowMoreProductsWrapper = (
    <div className="w-full flex justify-center py-8">
      <ShowMoreProducts />
    </div>
  );

  const SearchResultsWrapper = (
    <div className="w-full lg:w-3/4 mx-auto h-auto space-y-4">
      {TotalProductsFound}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((item) => (
          <SearchCard key={item.id} item={item} />
        ))}
      </div>
      {totalFetchedProducts <= Number(limit) ? null : ShowMoreProductsWrapper}
    </div>
  );

  const EnterKeyword = (
    <div className="w-full lg:w-3/4 mx-auto flex justify-center items-center py-20 border border-dashed text-neutral-200 rounded-lg">
      Products go here
    </div>
  );

  return <>{query ? SearchResultsWrapper : EnterKeyword}</>;
}
