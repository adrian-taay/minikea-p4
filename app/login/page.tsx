"use client";

import axios from "axios";
import React from "react";

export default function LoginPage() {
  async function loginUser() {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: "emilys",
        password: "emilyspass",
      });

      console.log(response);
    } catch (error) {
      console.log("Error logging in...", error);
    }
  }

  return (
    <div>
      <button onClick={() => loginUser()}>Login</button>
    </div>
  );
}
