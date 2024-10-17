"use client";

import { useUserStore } from "@/lib/useUserStore";
import { UserItem } from "@/types/dummy-users-type";
import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { login_splash } from "../_shared/constants/images";

export default function LoginPage() {
  const router = useRouter();
  const userLogin = useUserStore((state) => state.userLogin);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(username: string, password: string) {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      if (response.status === 200) {
        const userData: UserItem = response.data;

        userLogin(userData);
        enqueueSnackbar("User login successful!", { variant: "success" });
        return router.back();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data.message;

        return enqueueSnackbar(errorMessage, { variant: "error" });
      }

      return console.log("Unexpected error", error);
    }
  }

  const LoginForm = (
    <section className="absolute w-full md:w-1/2 lg:w-1/3 2xl:w-1/5 border shadow-md flex flex-col bg-white p-5 gap-4 my-20">
      <h1 className="text-center text-xl font-semibold pb-4 border-b">
        Member Login
      </h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="username-input">Username:</label>
        <Input
          bg="white"
          type="text"
          value={username}
          name="username-input"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password-input">Password:</label>
        <Input
          bg="white"
          type="password"
          value={password}
          name="password-input"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <Button
        placeSelf="center"
        rounded="none"
        mt={4}
        textColor="#E5E5E5"
        bg="#404040"
        _hover={{ bg: "#535353" }}
        onClick={() => loginUser(username, password)}
      >
        Login
      </Button>
    </section>
  );

  return (
    <div className="w-full flex-center h-full relative">
      <div className="relative w-full aspect-[16/7] h-full">
        <Image
          src={login_splash}
          alt="Login splash image"
          fill
          className="object-cover bg-center absolute"
        />
      </div>
      {LoginForm}
    </div>
  );
}
