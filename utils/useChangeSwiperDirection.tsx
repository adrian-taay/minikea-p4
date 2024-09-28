import { useEffect, useState } from "react";

export default function useChangeSwiperDirection() {
  const [isWidthSufficient, setIsWidthSufficient] = useState(
    window.innerWidth >= 640
  );

  useEffect(() => {
    function handleResize() {
      setIsWidthSufficient(window.innerWidth >= 640);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.addEventListener("resize", handleResize);
  }, []);

  return { isWidthSufficient };
}
