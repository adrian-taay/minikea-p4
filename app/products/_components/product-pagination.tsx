"use client";

import clsx from "clsx";
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
      className="cursor-pointer hover:ring-1 px-2 ring-neutral-400 py-1.5"
    >
      <MdChevronLeft />
    </span>
  );

  const nextButton = (
    <span
      onClick={() => handleClickPage(String(Number(currentPage) + 1))}
      className="cursor-pointer hover:ring-1 px-2 ring-neutral-400 py-1.5"
    >
      <MdChevronRight />
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

  const pageButtons = [...Array(totalPages)].map((_, index) => {
    index += 1;

    if (index > Number(currentPage) + 2 || index < Number(currentPage) - 2)
      return;

    return (
      <span
        key={index}
        onClick={() => handleClickPage(String(index))}
        className={clsx(
          "cursor-pointer",
          "hover:ring-1 px-2 ring-neutral-400",
          currentPage === String(index) &&
            "font-bold ring-1 px-2 ring-neutral-800"
        )}
      >
        {index < 10 ? `0${index}` : index}
      </span>
    );
  });

  return (
    <div className="flex gap-4 items-center">
      {firstPage}
      {previousButton}
      {pageButtons}
      {nextButton}
      {lastPage}
    </div>
  );
}
