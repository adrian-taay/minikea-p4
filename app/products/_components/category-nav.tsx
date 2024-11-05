"use client";

import { productCategoryLinks } from "@/app/_shared/navbar/menuLinks";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { PiArrowBendDownRightThin } from "react-icons/pi";

export default function CategoryNav() {
  const pathname = usePathname();

  return (
    <div className="text-sm flex flex-col gap-6 pr-8">
      <Link
        href={"/products"}
        className={clsx(
          "text-xs font-semibold tracking-wider uppercase underline",
          pathname.split("/").length <= 2 && "bg-neutral-400/20 p-1 rounded-sm"
        )}
      >
        All Products
      </Link>
      {productCategoryLinks.map((item) => (
        <div key={item.groupTitle}>
          <h3 className="text-xs font-semibold tracking-wider mb-4 uppercase underline">
            {item.groupTitle}
          </h3>
          <ul className="flex flex-col gap-2">
            {item.links.map((item) => (
              <li key={item.title}>
                <Link
                  href={`/products/${item.href}`}
                  className={clsx(
                    pathname === `/products/${item.href}`
                      ? "bg-neutral-400/20 p-1 rounded-sm"
                      : "pl-1",
                    "flex-start",
                    "gap-2",
                    "tracking-wider"
                  )}
                >
                  <PiArrowBendDownRightThin />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
