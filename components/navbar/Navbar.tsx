"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserAuthButton from "../user-auth-buttons/UserAuthButton";

export default function Navbar() {
  const [isFloatingNavbar, setIsFloatingNavbar] = useState(false);

  useEffect(() => {
    function handleScrollNavbar() {
      if (window.scrollY > 100) {
        setIsFloatingNavbar(true);
      } else {
        setIsFloatingNavbar(false);
      }
    }

    window.addEventListener("scroll", handleScrollNavbar);

    return () => window.removeEventListener("scroll", handleScrollNavbar);
  }, []);

  // console.log(isFloatingNavbar);

  const LeftSideWrapper = (
    <section className="flex-start flex-1">
      <Link href={"/search"}>Search</Link>
    </section>
  );

  const LogoWrapper = (
    <Link href={"/"} className="flex-center flex-1">
      MINIKEA
    </Link>
  );

  const RightSideWrapper = (
    <section className="flex-end flex-1">
      <Link href={"/cart"}>Cart</Link>
      <UserAuthButton />
    </section>
  );

  return (
    <nav>
      <nav
        className={clsx(
          "w-full",
          "flex-between",
          "px-7",
          "bg-stone-200",
          "transition-all",
          "ease-in-out",
          isFloatingNavbar && "fixed top-0",
          isFloatingNavbar ? "py-3" : "py-8"
        )}
      >
        {LeftSideWrapper}
        {LogoWrapper}
        {RightSideWrapper}
      </nav>
      <nav className="w-full text-center space-x-4">
        <Link href={"/products/category/furniture"}>Furniture</Link>
        <Link href={"/products/category/kitchen-accessories"}>
          Kitchen Accessories
        </Link>
        <Link href={"/products/category/home-decoration"}>Home Decors</Link>
      </nav>
    </nav>
  );
}
