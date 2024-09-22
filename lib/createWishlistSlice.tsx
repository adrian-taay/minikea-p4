import { DummyProductType } from "@/types";
import { StateCreator } from "zustand";

export type WishlistItem = {
  id: string;
  title: string;
  stock: number;
};

export type WishlistSlice = {
  wishlist: WishlistItem[];
  addToWishlist: (wishItem: DummyProductType) => void;
  removeFromWishlist: (wishId: string) => void;
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
      wishlist: [
        ...state.wishlist,
        {
          id: wishItem.sku,
          title: wishItem.title,
          stock: wishItem.stock,
        },
      ],
    })),
  removeFromWishlist: (wishId: string) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== wishId),
    })),
});
