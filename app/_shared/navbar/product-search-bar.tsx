"use client";

import { useRouter } from "next/navigation";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { forwardRef, useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

type DrawerProps = {
  onClose: () => void;
};

export const ProductSearchBar = forwardRef<HTMLInputElement, DrawerProps>(
  ({ onClose }, ref) => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();
    const searchButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      function handleEnterKeyPress(e: KeyboardEvent) {
        if (e.key === "Enter") {
          searchButtonRef.current?.click();
        }
      }

      window.addEventListener("keypress", handleEnterKeyPress);

      return () => window.removeEventListener("keypress", handleEnterKeyPress);
    }, []);

    const handleSearchInput = () => {
      onClose();
      router.push(`/search?q=${searchTerm}`);
      setSearchTerm("");
    };

    return (
      <div className="flex flex-col bg-white">
        <h1 className="max-sm:block hidden text-xs mb-4 antialiased">
          Search Products:
        </h1>
        <InputGroup size="lg">
          <Input
            placeholder="Search for products..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            size={"lg"}
            focusBorderColor="white"
            className="font-extralight"
            rounded={"none"}
            ref={ref}
          />
          <InputRightElement>
            <button onClick={handleSearchInput} ref={searchButtonRef}>
              <CiSearch />
            </button>
          </InputRightElement>
        </InputGroup>
      </div>
    );
  }
);

ProductSearchBar.displayName = "Product Search";
