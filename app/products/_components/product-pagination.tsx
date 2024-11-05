"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function ProductPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    function handleClickPage() {
      const params = new URLSearchParams(pageParams);

      params.set("page", String(currentPage));

      const queryString: string[] = [];

      params.forEach((value, key) => {
        queryString.push(`${key}=${value}`);
      });

      replace(`${pathname}?${queryString.join("&")}`);
    }

    handleClickPage();
  }, [currentPage, pathname, replace, pageParams]);

  const previousButton = (
    <span
      onClick={() => setCurrentPage((p) => p - 1)}
      className="cursor-pointer hover:ring-1 px-2 ring-neutral-400 py-1.5 flex items-center"
    >
      <MdChevronLeft /> PREV
    </span>
  );

  const nextButton = (
    <span
      onClick={() => setCurrentPage((p) => p + 1)}
      className="cursor-pointer hover:ring-1 px-2 ring-neutral-400 py-1.5 flex items-center"
    >
      NEXT <MdChevronRight />
    </span>
  );

  return (
    <div className="flex gap-8 items-center justify-center text-sm">
      {previousButton}
      {nextButton}
    </div>
  );
}
