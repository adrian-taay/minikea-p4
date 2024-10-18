import { useLayoutEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useUserStore } from "@/lib/useUserStore";

export default function useAuthGuard() {
  const user = useUserStore((state) => state.user);
  const [isInitialLoad, setIsInitialLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (user) {
      setIsInitialLoad(true);
    }

    if (!isInitialLoad) return;

    if (Object.keys(user).length === 0) {
      redirect("/login");
    } else {
      setIsLoading(false);
    }
  }, [isInitialLoad, user]);

  return isLoading;
}
