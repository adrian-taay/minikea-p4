"use client";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import clsx from "clsx";
import { Titillium_Web } from "next/font/google";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { productCategoryLinks } from "./menuLinks";
import Link from "next/link";
import { ProductSearchBar } from "./product-search-bar";
import Image from "next/image";
import { search_splash } from "../constants/images";

const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function NavDrawerLarge() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchBarRef = useRef<HTMLInputElement>(null);

  const SearchSection = (
    <div className="w-1/2 mx-auto text-center space-y-8 py-8 border bg-white/80 z-10">
      <h1 className="text-2xl">Search Our Products</h1>
      <div className="w-7/12 mx-auto">
        <ProductSearchBar ref={searchBarRef} onClose={onClose} />
      </div>
    </div>
  );

  const TabbedCategories = (
    <div className="text-center">
      <h1 className="text-2xl mb-4">Search By Category</h1>
      <Tabs align="center" position="relative" variant="unstyled">
        <TabList>
          {productCategoryLinks.map((item) => (
            <Tab key={item.groupTitle}>{item.groupTitle}</Tab>
          ))}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="gray.600"
          borderRadius="1px"
        />
        <TabPanels>
          {productCategoryLinks.map((item) => (
            <TabPanel key={item.groupTitle}>
              <div className="w-full flex-center flex-wrap gap-8 mt-4">
                {item.links.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col h-full shadow-md"
                  >
                    <div className="relative h-full aspect-square w-[150px] lg:w-[200px]">
                      <Image
                        src={item.img}
                        alt={item.href}
                        fill
                        sizes="150px, (min-width: 1024px) 200px"
                        className="absolute object-cover bg-center"
                      />
                    </div>
                    <Link
                      href={`/products/${item.href}`}
                      className="absolute w-full h-full z-10 text-white flex items-center justify-center bg-neutral-700/40 font-semibold text-lg"
                      onClick={onClose}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );

  return (
    <>
      <button
        onClick={onOpen}
        className="flex-start gap-2 hover:bg-stone-50 px-3 py-2 rounded-md"
      >
        <CiSearch size={20} />
        <span className="text-sm">Browse Products</span>
      </button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        isFullHeight
        onClose={onClose}
        initialFocusRef={searchBarRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="shadow-md border-b">
            <div
              className={clsx(
                "flex-center",
                "flex-col",
                "flex-1",
                "-space-y-2",
                titillium.className,
                "tracking-widest"
              )}
            >
              <span className="font-semibold text-3xl">MINIKEA</span>
              <span className="font-light">Superstore</span>
            </div>
          </DrawerHeader>
          <DrawerBody className="relative w-full flex flex-col justify-center gap-5">
            <Image
              src={search_splash}
              alt="Search splash image"
              fill
              sizes="0px, (min-width) 100vw"
              className="object-cover bg-center absolute opacity-40"
            />
            {SearchSection}
            {TabbedCategories}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
