"use client";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearchInput = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
      params.delete("limit");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-full lg:w-3/4 flex flex-col items-center gap-4">
      <h1 className="text-2xl">Search Products</h1>
      <InputGroup className="flex items-center" size="lg">
        <InputLeftElement pointerEvents="none">
          <CiSearch color="#E3E3E3" size={24} />
        </InputLeftElement>
        <Input
          placeholder="shirt, shoes, etc..."
          onChange={(e) => handleSearchInput(e.target.value)}
          defaultValue={searchParams.get("q")?.toString()}
          size={"lg"}
          className="font-light"
          rounded={"none"}
        />
      </InputGroup>
    </div>
  );
}
