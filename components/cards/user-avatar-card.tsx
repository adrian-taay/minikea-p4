"use client";

import { useUserStore } from "@/lib/useUserStore";
import { Avatar } from "@chakra-ui/react";

export default function UserAvatarCard() {
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex items-center gap-2">
      <Avatar src={user.image} />
      <div className="-space-y-1">
        <h1 className="font-semibold">{user.username}</h1>
        <h1 className="text-xs text-neutral-500 font-thin">Edit Profile</h1>
      </div>
    </div>
  );
}
