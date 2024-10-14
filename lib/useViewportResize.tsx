"use client";

import { useEffect, useState } from "react";

export default function useViewportResize() {
  const [isWidthSmall, setIsWdithSmall] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsWdithSmall(window.innerWidth <= 768);
    }

    if (typeof window !== undefined) {
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return isWidthSmall;
}
