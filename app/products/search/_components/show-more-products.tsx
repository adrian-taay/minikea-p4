"use client";

import { Button } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShowMoreProducts() {
  const [limit, setLimit] = useState(6);
  const limitParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    if (!limitParams) return;

    const params = new URLSearchParams(limitParams);

    params.set("limit", String(limit));

    const queryString: string[] = [];

    params.forEach((value, key) => {
      queryString.push(`${key}=${value}`);
    });

    replace(`${pathname}?${queryString.join("&")}`);

    console.log(params);
  }, [limit, limitParams, pathname, replace]);

  return (
    <Button
      bgColor="#404040"
      _hover={{ bg: "#535353" }}
      textColor="#E3E3E3"
      onClick={() => setLimit((l) => l + 6)}
    >
      Show More
    </Button>
  );
}
