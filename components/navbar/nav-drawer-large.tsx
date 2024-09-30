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
import { ProductSearchBar } from "../products/product-search-bar";
import { productCategoryLinks } from "./menuLinks";
import Link from "next/link";

const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function NavDrawerLarge() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchBarRef = useRef<HTMLInputElement>(null);

  const SearchSection = (
    <div className="w-3/4 mx-auto text-center space-y-8">
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
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          {productCategoryLinks.map((item) => (
            <TabPanel key={item.groupTitle}>
              <div className="w-full flex-center gap-8 mt-4">
                {item.links.map((item, index) => (
                  <Link
                    href={`/products/${item.href}`}
                    key={index}
                    className="flex-center w-[250px] h-[250px] bg-slate-500 rounded-md text-white"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );

  const NavFooter = (
    <Link
      href={"https://github.com/Ovi/DummyJSON"}
      target="_blank"
      className="text-neutral-400 underline text-xs"
    >
      This project is powered by DummyJSON APIs.
    </Link>
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
          <DrawerHeader>
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
          <DrawerBody className="w-full flex-between flex-col gap-6">
            {SearchSection}
            {TabbedCategories}
            {NavFooter}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
