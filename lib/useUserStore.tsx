import { create } from "zustand";
import { createWishlistSlice, WishlistSlice } from "./createWishlistSlice";
import { CartSlice, createCartSlice } from "./createCartSlice";
import { persist } from "zustand/middleware";

export const useUserStore = create<WishlistSlice & CartSlice>()(
  persist(
    (...a) => ({
      ...createWishlistSlice(...a),
      ...createCartSlice(...a),
    }),
    { name: "minikea-user-store" }
  )
);
