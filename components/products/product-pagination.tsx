"use client";

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

    replace(`${pathname}?${params.toString()}`);
  }

  const previousButton = (
    <span
      onClick={() => handleClickPage(String(Number(currentPage) - 1))}
      className="cursor-pointer"
    >
      Prev
    </span>
  );

  const nextButton = (
    <span
      onClick={() => handleClickPage(String(Number(currentPage) + 1))}
      className="cursor-pointer"
    >
      Next
    </span>
  );

  const pageButtons = [...Array(totalPages)].map((_, index) => {
    index += 1;
    return (
      <span
        key={index}
        onClick={() => handleClickPage(String(index))}
        className="cursor-pointer"
      >
        {index}
      </span>
    );
  });

  return (
    <div className="flex gap-4">
      {previousButton}
      {pageButtons}
      {nextButton}
    </div>
  );
}
