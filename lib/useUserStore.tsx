import { create } from "zustand";
import { createWishlistSlice, WishlistSlice } from "./createWishlistSlice";
import { CartSlice, createCartSlice } from "./createCartSlice";
import { persist } from "zustand/middleware";
import { AuthSlice, createAuthSlice } from "./createAuthSlice";

export const useUserStore = create<WishlistSlice & CartSlice & AuthSlice>()(
  persist(
    (...a) => ({
      ...createWishlistSlice(...a),
      ...createCartSlice(...a),
      ...createAuthSlice(...a),
    }),
    { name: "minikea-user-store" }
  )
);
