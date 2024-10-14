"use client";

import { useUserStore } from "@/lib/useUserStore";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { userAccountLinks } from "./menuLinks";

export default function UserAuthButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const userLogout = useUserStore((state) => state.userLogout);

  const SignInButton = (
    <Button size="sm">
      <Link href={"/login"}>Sign in</Link>
    </Button>
  );

  const UserAccountButton = (
    <div className="flex gap-2 items-center">
      <span className="text-sm font-semibold">Hi, {user.firstName}</span>
      <div className="rounded-full overflow-hidden bg-slate-400">
        <Image src={user.image} width={25} height={25} alt={user.username} />
      </div>
    </div>
  );

  const UserMenuLinks = userAccountLinks.map((link) => (
    <MenuItem as="a" href={link.href} key={link.title}>
      {link.title}
    </MenuItem>
  ));

  function handleLogout() {
    userLogout();
    router.push("/");
  }

  const UserMenu = (
    <Menu isOpen={isOpen} gutter={4}>
      <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
        {UserAccountButton}
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        {UserMenuLinks}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );

  return (
    <div className="hidden md:block">
      {Object.entries(user).length > 0 ? UserMenu : SignInButton}
    </div>
  );
}
