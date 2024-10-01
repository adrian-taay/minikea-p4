"use client";

import clsx from "clsx";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function ProductPagination({
  total,
  limit,
}: {
  total: number;
  limit: number;
}) {
  const [currentPage, setCurrentPage] = useState(String(1));
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const totalPages = Math.ceil(total / limit);

  function handleClickPage(page: string = currentPage) {
    if (Number(page) < 1 || Number(page) > totalPages) return;

    setCurrentPage(page);
    const params = new URLSearchParams(searchParams);

    params.set("page", page);

    const queryString: string[] = [];

    params.forEach((value, key) => {
      queryString.push(`${key}=${value}`);
    });

    replace(`${pathname}?${queryString.join("&")}`);
  }

  const previousButton = (
    <span
      onClick={() => handleClickPage(String(Number(currentPage) - 1))}
      className="cursor-pointer">
      Prev
    </span>
  );

  const nextButton = (
    <span
      onClick={() => handleClickPage(String(Number(currentPage) + 1))}
      className="cursor-pointer">
      Next
    </span>
  );

  const pageButtons = [...Array(totalPages)].map((_, index) => {
    index += 1;
    return (
      <span
        key={index}
        onClick={() => handleClickPage(String(index))}
        className={clsx(
          "cursor-pointer",
          currentPage === String(index) &&
            "font-bold ring-1 px-2 ring-neutral-800 rounded-md"
        )}>
        {index}
      </span>
    );
  });

  return (
    <div className="flex gap-4 text-lg">
      {previousButton}
      {pageButtons}
      {nextButton}
    </div>
  );
}
