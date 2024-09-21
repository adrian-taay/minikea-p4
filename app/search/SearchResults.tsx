import { DummyProductType } from "@/types";
import axios from "axios";
import React from "react";

export default async function SearchResults({ query }: { query: string }) {
  const response = await axios(
    `https://dummyjson.com/products/search?q=${query}`
  );
  const products: DummyProductType[] = response.data.products;

  // console.log(query);

  return (
    <div className="h-[100px] flex gap-4">
      {products.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
