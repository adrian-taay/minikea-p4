import { DummyProductType } from "@/types";
import { StateCreator } from "zustand";

export type WishlistSlice = {
  wishlist: DummyProductType[];
  addToWishlist: (wishItem: DummyProductType) => void;
  removeFromWishlist: (wishId: number) => void;
};

export const createWishlistSlice: StateCreator<
  // WishlistSlice & CartSlice,
  // [["zustand/persist", WishlistSlice]],
  // [],
  WishlistSlice
> = (set) => ({
  wishlist: [],
  addToWishlist: (wishItem: DummyProductType) =>
    set((state) => ({
      wishlist: [...state.wishlist, wishItem],
    })),
  removeFromWishlist: (wishId: number) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== wishId),
    })),
});
