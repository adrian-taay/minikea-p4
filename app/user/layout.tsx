"use client";

import UserAvatarCard from "@/app/user/(profile)/user-avatar-card";
import Link from "next/link";
import DeliveryBanner from "../_shared/delivery-banner/delivery-banner";
import { useUserStore } from "@/lib/useUserStore";
import { useLayoutEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function UserPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

  const Sidebar = (
    <div className="hidden md:flex flex-col gap-8 px-16 pt-8 justify-start font-bold border-r">
      <UserAvatarCard />
      <Link href={"/user"} className="hover:underline">
        My Profile
      </Link>
      <Link href={"/user/transactions"} className="hover:underline">
        My Transactions
      </Link>
      <Link href={"/user/wishlist"} className="hover:underline">
        My Wishlist
      </Link>
    </div>
  );

  return (
    <>
      {!isLoading && (
        <section className="w-full flex-col gap-8 max-w-screen-2xl mx-auto">
          <div className="w-full flex border-b">
            {Sidebar}
            <div className="w-full p-8 mb-10 flex-1">{children}</div>
          </div>
          <div className="p-8">
            <DeliveryBanner />
          </div>
        </section>
      )}
    </>
  );
}
