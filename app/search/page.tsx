import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

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
  };
}) {
  const query = searchParams?.q || "";

  return (
    <div>
      <SearchBar />
      <SearchResults query={query} />
    </div>
  );
}
