"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserAuthButton from "../buttons/user-auth-button";
import ShoppingCartIcon from "../buttons/shopping-cart-button";
import { Titillium_Web } from "next/font/google";
import NavDrawerLarge from "./nav-drawer-large";
import NavDrawerSmall from "./nav-drawer-small";

const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

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

  const LeftSideWrapper = (
    <section className="flex-start flex-1">
      <div className="max-md:block hidden">
        <NavDrawerSmall />
      </div>
      <div className="hidden md:block">
        <NavDrawerLarge />
      </div>
    </section>
  );

  const LogoWrapper = (
    <Link
      href={"/"}
      className={clsx(
        "flex-center",
        "flex-col",
        "flex-1",
        "-space-y-2",
        titillium.className,
        "tracking-widest"
      )}>
      <span className="font-semibold text-3xl">MINIKEA</span>
      <span className="">Superstore</span>
    </Link>
  );

  const RightSideWrapper = (
    <section className="flex-end flex-1 gap-4">
      <ShoppingCartIcon />
      <UserAuthButton />
    </section>
  );

  return (
    <nav
      className={clsx(
        "w-full",
        "px-7",
        "bg-white",
        "border-b",
        "transition-all",
        "ease-in-out",
        "z-10",
        isFloatingNavbar && "fixed top-0 shadow-md"
      )}>
      <div className="flex-between py-2 max-w-screen-2xl mx-auto">
        {LeftSideWrapper}
        {LogoWrapper}
        {RightSideWrapper}
      </div>
    </nav>
  );
}
