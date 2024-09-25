"use client";

import { useUserStore } from "@/lib/useUserStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserAuthButton() {
  const user = useUserStore((state) => state.user);
  const SignInButton = <Link href={"/login"}>Sign in</Link>;

  const UserAccountButton = (
    <div className="flex gap-2">
      <span>{user.firstName}</span>
      <div className="rounded-full overflow-hidden bg-slate-400">
        <Image src={user.image} width={25} height={25} alt={user.username} />
      </div>
    </div>
  );

  return (
    <div>
      {Object.entries(user).length > 0 ? UserAccountButton : SignInButton}
    </div>
  );
}
