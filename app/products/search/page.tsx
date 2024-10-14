import React from "react";
import SearchBar from "./search-bar";
import SearchResults from "./search-results";
import WishlistItemView from "@/app/cart/wishlist-item-view";

export async function generateMetadata() {
  return {
    title: `Search Products | Minikea`,
  };
}

export default function SearchPage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    page?: string;
    limit?: string;
  };
}) {
  const query = searchParams?.q || "";
  const limit = searchParams?.limit || "6";

  return (
    <div className="w-full flex flex-col items-center gap-8 p-4 md:p-8 max-w-screen-2xl mx-auto">
      <SearchBar />
      <div className="flex-1 w-full">
        <SearchResults query={query} limit={limit} />
      </div>
      <div className="w-full lg:w-3/4">
        <WishlistItemView />
      </div>
    </div>
  );
}
