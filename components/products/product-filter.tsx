"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProductFilter() {
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [minPrice, maxPrice] = [0, 0];
  const [priceSlider, setPriceSlider] = useState([minPrice, maxPrice]);
  const filterParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // useEffect(() => {
  //   if (inStock === true && outOfStock === true) {
  //     setInStock(false);
  //     setOutOfStock(false);
  //   }
  // }, [inStock, outOfStock]);

  useEffect(() => {
    function handleFilter() {
      const params = new URLSearchParams(filterParams);

      if (inStock === true && outOfStock === true) {
        setInStock(false);
        setOutOfStock(false);
      }

      if (inStock === outOfStock) {
        params.delete("avail");
      }

      if (inStock) {
        // params.delete("avail");
        params.set("avail", "true");
        // params.delete("outOfStock");
      }

      if (outOfStock) {
        // params.delete("avail");
        params.set("avail", "false");
        // params.delete("inStock");
      }

      const queryString: string[] = [];

      params.forEach((value, key) => {
        queryString.push(`${key}=${value}`);
      });

      replace(`${pathname}?${queryString.join("&")}`);
    }

    handleFilter();
  }, [inStock, outOfStock, pathname, replace, filterParams]);

  const AvailabilityFilter = (
    <>
      <h1>Availability</h1>
      <div>
        <input
          type="checkbox"
          id="in-stock"
          name="in-stock"
          checked={inStock}
          onChange={() => setInStock(!inStock)}
        />
        <label htmlFor="scales">In Stock</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="out-of-stock"
          name="in-stock"
          checked={outOfStock}
          onChange={() => setOutOfStock(!outOfStock)}
        />
        <label htmlFor="horns">Out of Stock</label>
      </div>
    </>
  );

  return <div>{AvailabilityFilter}</div>;
}
