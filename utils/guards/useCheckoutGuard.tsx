import { useLayoutEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useUserStore } from "@/lib/useUserStore";

export default function useCheckoutGuard() {
  const user = useUserStore((state) => state.user);
  const payStatus = useUserStore((state) => state.payStatus);
  const [isInitialLoad, setIsInitialLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (user) {
      setIsInitialLoad(true);
    }

    if (!isInitialLoad) return;

    if (Object.keys(user).length === 0 || payStatus === 0) {
      redirect("/unauthorized");
    } else {
      setIsLoading(false);
    }
  }, [isInitialLoad, user, payStatus]);

  return isLoading;
}
