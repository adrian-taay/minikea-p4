"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";

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
      <span>Search</span>
    </section>
  );

  const LogoWrapper = <span className="flex-center flex-1">MINIKEA</span>;

  const RightSideWrapper = (
    <section className="flex-end flex-1">
      <span>Sign in</span>
      <span>Cart</span>
    </section>
  );

  return (
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
  );
}
