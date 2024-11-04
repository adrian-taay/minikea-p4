"use client";

import { Select } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductLimit() {
  const [limitProductParams, setLimitProductParams] = useState("");
  const limitParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    function handleSelection() {
      if (!limitProductParams) return;

      const params = new URLSearchParams(limitParams);

      params.set("limit", limitProductParams);

      const queryString: string[] = [];

      params.forEach((value, key) => {
        queryString.push(`${key}=${value}`);
      });

      replace(`${pathname}?${queryString.join("&")}`);
    }

    handleSelection();
  }, [limitProductParams, pathname, replace, limitParams]);

  return (
    <div className="flex-start flex-col md:flex-row gap-1 md:gap-3">
      <label htmlFor="product-limit" className="text-nowrap">
        No. of Items to Show:
      </label>
      <Select
        rounded="none"
        id="product-limit"
        name="product-limit"
        value={limitProductParams}
        onChange={(e) => setLimitProductParams(e.target.value)}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="all">All</option>
      </Select>
    </div>
  );
}
