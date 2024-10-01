"use client";

import { useUserStore } from "@/lib/useUserStore";
import { Button, Center, Divider } from "@chakra-ui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export default function UserAccountPage() {
  const user = useUserStore(state => state.user);
  const isLoggedIn = useUserStore(state => state.isLoggedIn);

  if (isLoggedIn === false) {
    redirect("/user/login");
  }

  const userDetailObj = {
    email: user.email,
    username: user.username,
    // password: (
    //   <Input
    //     variant="filled"
    //     size={"sm"}
    //     type="password"
    //     disabled
    //   />
    // ),
    first_name: user.firstName,
    last_name: user.lastName,
    gender: user.gender,
  };

  const ProfilePictureWrapper = (
    <div className="flex md:flex-col items-center gap-4 my-4">
      {user.image && (
        <Image
          src={user.image}
          width={150}
          height={150}
          alt={user.firstName}
        />
      )}
      <div className="flex flex-col gap-4">
        <Button size={"sm"}>Select Image</Button>
        <div className="-space-y-1 text-center text-sm text-neutral-400">
          <p>File size: maximum 1 MB</p>
          <p>File extension: .JPEG, .PNG</p>
        </div>
      </div>
    </div>
  );

  const UserDetails = (
    <div className="flex flex-col gap-4">
      {Object.entries(userDetailObj).map(([key, value]) => {
        const capitalized = key
          .split("_")
          .map(word => word[0].toUpperCase() + word.slice(1))
          .join(" ");

        return (
          <div
            key={key}
            className="flex flex-col items-start">
            <span className="font-semibold w-28">{capitalized}:</span>
            <span>{value}</span>
          </div>
        );
      })}
    </div>
  );

  const VerticalDivider = (
    <Center height="inherit">
      <Divider
        orientation="vertical"
        mx={10}
      />
    </Center>
  );

  return (
    <section>
      <h1 className="font-bold text-2xl md:mb-8">Profile</h1>
      <div className="flex-col md:flex-row flex">
        {ProfilePictureWrapper}
        <div className="hidden md:block">{VerticalDivider}</div>
        {UserDetails}
      </div>
      <Button
        bgColor="#404040"
        textColor="#E3E3E3"
        className="mt-8">
        Edit
      </Button>
    </section>
  );
}

// "username": "emilys",
//     "email": "emily.johnson@x.dummyjson.com",
//     "firstName": "Emily",
//     "lastName": "Johnson",
//     "gender": "female",
//     "image": "https://dummyjson.com/icon/emilys/128"
