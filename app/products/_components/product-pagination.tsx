"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";

export default function ProductPagination({
  total,
  limit,
  pageQuery,
}: {
  total: number;
  limit: number;
  pageQuery: number;
}) {
  const [currentPage, setCurrentPage] = useState(pageQuery ?? 1);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    function handleClickPage() {
      if (Number(currentPage) < 1 || Number(currentPage) > totalPages) return;

      const params = new URLSearchParams(searchParams);

      params.set("page", String(currentPage));

      const queryString: string[] = [];

      params.forEach((value, key) => {
        queryString.push(`${key}=${value}`);
      });

      replace(`${pathname}?${queryString.join("&")}`);
    }

    handleClickPage();
  }, [currentPage, searchParams, pathname, replace, totalPages]);

  const previousButton = (
    <span
      onClick={() => setCurrentPage((p) => p - 1)}
      className="cursor-pointer hover:ring-1 px-2 ring-neutral-400 py-1.5 flex gap-3 items-center text-sm"
    >
      <MdChevronLeft /> PREV
    </span>
  );

  const nextButton = (
    <span
      onClick={() => setCurrentPage((p) => p + 1)}
      className="cursor-pointer hover:ring-1 px-2 ring-neutral-400 py-1.5 flex gap-3 items-center text-sm"
    >
      NEXT <MdChevronRight />
    </span>
  );

  const firstPage = (
    <span
      onClick={() => setCurrentPage(1)}
      className="cursor-pointer hover:ring-1 px-2 ring-neutral-400 py-1.5"
    >
      <MdFirstPage />
    </span>
  );

  const lastPage = (
    <span
      onClick={() => setCurrentPage(totalPages)}
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
