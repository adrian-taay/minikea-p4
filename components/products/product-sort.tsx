"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProductSort() {
  const [sortProductParams, setSortProductParams] = useState("");
  const sortParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    function handleSelection() {
      if (!sortProductParams) return;

      const params = new URLSearchParams(sortParams);

      const [sortOption, sortOrder] = sortProductParams.split("-");

      params.set("sortBy", sortOption);
      params.set("order", sortOrder);

      const queryString: string[] = [];

      params.forEach((value, key) => {
        queryString.push(`${key}=${value}`);
      });

      replace(`${pathname}?${queryString.join("&")}`);
    }

    handleSelection();
  }, [sortProductParams, pathname, replace, sortParams]);

  return (
    <div className="flex gap-4">
      <label htmlFor="product-sort">Sort Products by:</label>
      <select
        id="product-sort"
        name="product-sort"
        value={sortProductParams}
        onChange={(e) => setSortProductParams(e.target.value)}
      >
        <option value="title-asc">Alphabetical, A-Z</option>
        <option value="title-desc">Alphabetical, Z-A</option>
        <option value="price-asc">Price, low to high</option>
        <option value="price-desc">Price, high to low</option>
      </select>
    </div>
  );
}
