"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";

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
      className="cursor-pointer hover:ring-1 px-2 ring-neutral-400 py-1.5 flex gap-3 items-center text-sm"
    >
      <MdChevronLeft /> PREV
    </span>
  );

  const nextButton = (
    <span
      onClick={() => handleClickPage(String(Number(currentPage) + 1))}
      className="cursor-pointer hover:ring-1 px-2 ring-neutral-400 py-1.5 flex gap-3 items-center text-sm"
    >
      NEXT <MdChevronRight />
    </span>
  );

  const firstPage = (
    <span
      onClick={() => handleClickPage(String(1))}
      className="cursor-pointer hover:ring-1 px-2 ring-neutral-400 py-1.5"
    >
      <MdFirstPage />
    </span>
  );

  const lastPage = (
    <span
      onClick={() => handleClickPage(String(totalPages))}
      className="cursor-pointer hover:ring-1 px-2 ring-neutral-400 py-1.5"
    >
      <MdLastPage />
    </span>
  );

  return (
    <div className="flex gap-4 items-center">
      {firstPage}
      {previousButton}
      <span className="text-neutral-400">|</span>
      {nextButton}
      {lastPage}
    </div>
  );
}
