"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import UserAuthButton from "./UserAuthButton";
import ShoppingCartIcon from "./ShoppingCartIcon";
import NavbarSearchBar from "../products/product-search";
import { Titillium_Web } from "next/font/google";
import { CiMenuBurger } from "react-icons/ci";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import NavDrawerContents from "./NavDrawerContents";

const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  const [isFloatingNavbar, setIsFloatingNavbar] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

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

  const NavDrawer = (
    <>
      <button ref={btnRef} onClick={onOpen}>
        <CiMenuBurger size={18} />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        isFullHeight={true}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <span
              className={clsx(
                "tracking-widest",
                "font-semibold",
                titillium.className
              )}
            >
              MINIKEA
            </span>
          </DrawerHeader>
          <NavDrawerContents />
        </DrawerContent>
      </Drawer>
    </>
  );

  const LeftSideWrapper = (
    <section className="flex-start flex-1">
      <div className="max-md:block hidden">{NavDrawer}</div>
      <div className="hidden md:block w-3/4">
        <NavbarSearchBar />
      </div>
    </section>
  );

  const LogoWrapper = (
    <Link
      href={"/"}
      className={clsx(
        "flex-center",
        "flex-1",
        titillium.className,
        "font-semibold",
        "text-3xl",
        "tracking-widest"
      )}
    >
      MINIKEA
    </Link>
  );

  const RightSideWrapper = (
    <section className="flex-end flex-1 gap-4">
      <ShoppingCartIcon />
      <UserAuthButton />
    </section>
  );

  return (
    <nav className="z-10">
      <nav
        className={clsx(
          "w-full",
          "flex-between",
          "px-7",
          "bg-white",
          "border-b",
          "transition-all",
          "ease-in-out",
          isFloatingNavbar && "fixed top-0 shadow-md",
          isFloatingNavbar ? "py-3" : "py-5"
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
