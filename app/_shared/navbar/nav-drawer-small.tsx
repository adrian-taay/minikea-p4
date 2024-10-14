"use client";

import React, { useRef } from "react";
import {
  DrawerBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { userAccountLinks, productCategoryLinks } from "./menuLinks";
import { useUserStore } from "@/lib/useUserStore";
import { CiMenuBurger } from "react-icons/ci";
import clsx from "clsx";
import { Titillium_Web } from "next/font/google";
import { ProductSearchBar } from "./product-search-bar";

const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function NavDrawerSmall() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchBarRef = useRef<HTMLInputElement>(null);
  const user = useUserStore((state) => state.user);
  const userLogout = useUserStore((state) => state.userLogout);
  const isUserLoggedIn = Object.entries(user).length > 0;

  const MyAccountToggle = (
    <div>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton className="font-semibold flex justify-between">
            <span>My Account</span>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel className="flex flex-col gap-2">
            {userAccountLinks.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="ml-4"
                onClick={onClose}
              >
                {item.title}
              </Link>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <div onClick={() => userLogout()} className="px-4 py-2 font-semibold">
        Logout
      </div>
    </div>
  );

  const SignIn = (
    <Link href={"/login"} className="px-4 py-2 font-semibold" onClick={onClose}>
      Sign in
    </Link>
  );

  const ProductCategories = (
    <div className="flex-1 my-8">
      <h1 className="text-xs mb-4">Browse by Category:</h1>
      <div className="flex flex-col">
        {productCategoryLinks.map((item) => (
          <Accordion allowToggle key={item.groupTitle}>
            <AccordionItem>
              <AccordionButton className="font-semibold flex justify-between">
                <span>{item.groupTitle}</span>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel className="flex flex-col gap-2">
                {item.links.map((item) => (
                  <Link
                    href={`/products/${item.href}`}
                    key={item.title}
                    className="ml-4"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <button onClick={onOpen}>
        <CiMenuBurger size={18} />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        initialFocusRef={searchBarRef}
        isFullHeight={true}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <span
              className={clsx(
                "tracking-widest",
                "flex",
                "items-end",
                "gap-1",
                titillium.className
              )}
            >
              <span className="font-semibold leading-none">MINIKEA</span>
              <span className="text-sm font-light leading-none">
                Superstore
              </span>
            </span>
          </DrawerHeader>
          <DrawerBody className="flex flex-col justify-between">
            <DrawerCloseButton />
            <ProductSearchBar ref={searchBarRef} onClose={onClose} />
            {ProductCategories}
            {isUserLoggedIn ? MyAccountToggle : SignIn}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
