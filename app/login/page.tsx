"use client";

import { UserItem } from "@/lib/createAuthSlice";
import { useUserStore } from "@/lib/useUserStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";

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

  return (
    <div>
      <label htmlFor="username-input">Enter Username:</label>
      <input
        type="text"
        value={username}
        name="username-input"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password-input">Enter Password:</label>
      <input
        type="text"
        value={password}
        name="password-input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => loginUser(username, password)}>Login</button>
    </div>
  );
}
