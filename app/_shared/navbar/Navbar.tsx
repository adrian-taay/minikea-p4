"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "./shopping-cart-button";
import NavDrawerLarge from "./nav-drawer-large";
import NavDrawerSmall from "./nav-drawer-small";
import UserAuthButton from "./user-auth-button";
import MinikeaLogo from "../constants/minikea-logo";
import { usePathname } from "next/navigation";
import TempWishlistDrawer from "./temp-wishlist-button";

export default function Navbar() {
  const [isFloatingNavbar, setIsFloatingNavbar] = useState(false);
  const currentUrl = usePathname();

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

  const RightSideWrapper = (
    <section className="flex-end flex-1 gap-6">
      <TempWishlistDrawer />
      <ShoppingCartIcon />
      <UserAuthButton />
    </section>
  );

  return currentUrl === "/cart/checkout" ? null : (
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
      )}
    >
      <div className="flex-between py-2 max-w-screen-2xl mx-auto">
        {LeftSideWrapper}
        <MinikeaLogo />
        {RightSideWrapper}
      </div>
    </nav>
  );
}
