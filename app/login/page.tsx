"use client";

import { useUserStore } from "@/lib/useUserStore";
import { UserItem } from "@/types/dummy-users-type";
import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const userLogin = useUserStore(state => state.userLogin);
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
    <section className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/5 border rounded-md shadow-md flex flex-col bg-slate-100 p-5 gap-4 my-20">
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
          onChange={e => setUsername(e.target.value)}
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
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <Button
        placeSelf="center"
        mt={4}
        textColor="#E5E5E5"
        bg="#222222"
        onClick={() => loginUser(username, password)}>
        Login
      </Button>
    </section>
  );

  return (
    <div className="w-full flex-center h-full md:bg-slate-300">{LoginForm}</div>
  );
}
