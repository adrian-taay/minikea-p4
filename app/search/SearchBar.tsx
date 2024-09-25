"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  console.log(pathname);

  const handleSearchInput = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  // console.log("searchParams:", searchParams.toString());

  return (
    <div className="mt-48 bg-red-300">
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Type any keyword..."
        onChange={(e) => handleSearchInput(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
      />
    </div>
  );
}
