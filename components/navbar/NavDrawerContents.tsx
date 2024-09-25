"use client";

import React from "react";
import {
  DrawerBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import NavbarSearchBar from "../products/product-search";
import Link from "next/link";
import { menuLinks, productCategoryLinks } from "./menuLinks";
import { useUserStore } from "@/lib/useUserStore";

export default function NavDrawerContents() {
  const user = useUserStore((state) => state.user);
  const userLogout = useUserStore((state) => state.userLogout);
  const isUserLoggedIn = Object.entries(user).length > 0;

  const MyAccountToggle = (
    <div>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton className="font-semibold">
            My Account
          </AccordionButton>
          <AccordionPanel className="flex flex-col gap-2">
            {menuLinks.map((item) => (
              <Link
                href={`/user/${item.href}`}
                key={item.title}
                className="ml-4"
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
    <Link href={"/user/login"} className="px-4 py-2 font-semibold">
      Sign in
    </Link>
  );

  const ProductCategories = (
    <div className="flex-1 my-8">
      <h1 className="text-xs mb-4">Browse by Category:</h1>
      <div className="flex flex-col">
        {productCategoryLinks.map((item) => (
          <Link
            href={`/products/category/${item.href}`}
            key={item.title}
            className="px-4 py-2 font-semibold border-t hover:bg-slate-100"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <DrawerBody className="flex flex-col justify-between">
      <NavbarSearchBar />
      {ProductCategories}
      {isUserLoggedIn ? MyAccountToggle : SignIn}
    </DrawerBody>
  );
}
