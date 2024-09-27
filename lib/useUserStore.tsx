import { create } from "zustand";
import { createWishlistSlice, WishlistSlice } from "./createWishlistSlice";
import { CartSlice, createCartSlice } from "./createCartSlice";
import { persist } from "zustand/middleware";
import { AuthSlice, createAuthSlice } from "./createAuthSlice";
import {
  createTransactionSlice,
  TransactionSlice,
} from "./createTransactionSlice";

export const useUserStore = create<
  WishlistSlice & CartSlice & TransactionSlice & AuthSlice
>()(
  persist(
    (...a) => ({
      ...createWishlistSlice(...a),
      ...createCartSlice(...a),
      ...createTransactionSlice(...a),
      ...createAuthSlice(...a),
    }),
    { name: "minikea-user-store" }
  )
);
