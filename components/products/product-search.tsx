"use client";

import { useRouter } from "next/navigation";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function NavbarSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearchInput = () => {
    router.push(`/search?q=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div className="flex flex-col">
      <h1 className="max-sm:block hidden text-xs mb-4">Search Products:</h1>
      <InputGroup>
        <Input
          placeholder="Search for products..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
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
