import clsx from "clsx";
import { Titillium_Web } from "next/font/google";
import Link from "next/link";
import React from "react";

const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function MinikeaLogo() {
  return (
    <Link
      href={"/"}
      className={clsx(
        "flex-center",
        "flex-col",
        "flex-1",
        "-space-y-2",
        titillium && titillium.className,
        "tracking-widest"
      )}
    >
      <span className="font-semibold text-3xl">MINIKEA</span>
      <span className="">Superstore</span>
    </Link>
  );
}
