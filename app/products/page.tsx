"use client";

import ProductCard from "@/components/products/product-card";
import { useUserStore } from "@/lib/useUserStore";
import { DummyProductType } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
  const cart = useUserStore((state) => state.cart);
  const [offset, setOffset] = useState(0);
  const limit = 8;
  const [data, setData] = useState([] as DummyProductType[]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios(
          `https://dummyjson.com/products/category/mens-shirts?limit=${limit}&skip=${offset}`
        );

        setData((d) => [...d, ...response.data.products]);
        return;
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, [offset]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="flex bg-slate-400 h-[50px]">
        {cart.map((item, index) => (
          <span key={index}>{item.title}</span>
        ))}
      </div>
      <div className="flex gap-4 flex-wrap">
        {data?.map((item, index) => (
          <ProductCard cardData={item} key={index} />
        ))}
      </div>
      <button onClick={() => setOffset((o) => o + limit)}>Show More</button>
    </div>
  );
}
