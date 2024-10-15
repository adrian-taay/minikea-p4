"use client";

import { useRouter } from "next/navigation";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { forwardRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

type DrawerProps = {
  onClose: () => void;
};

export const ProductSearchBar = forwardRef<HTMLInputElement, DrawerProps>(
  ({ onClose }, ref) => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleSearchInput = () => {
      onClose();
      router.push(`/products/search?q=${searchTerm}`);
      setSearchTerm("");
    };

    return (
      <div className="flex flex-col bg-white">
        <h1 className="max-sm:block hidden text-xs mb-4 antialiased">
          Search Products:
        </h1>
        <InputGroup>
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
            <button onClick={handleSearchInput}>
              <CiSearch />
            </button>
          </InputRightElement>
        </InputGroup>
      </div>
    );
  }
);

ProductSearchBar.displayName = "Product Search";
