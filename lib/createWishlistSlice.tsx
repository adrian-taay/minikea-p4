import { DummyProductType } from "@/types";
import { StateCreator } from "zustand";

export type WishlistItem = {
  id: number;
  title: string;
  price: number;
  stock: number;
  thumbnail: string;
};

export type WishlistSlice = {
  wishlist: WishlistItem[];
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
      wishlist: [
        ...state.wishlist,
        {
          id: wishItem.id,
          title: wishItem.title,
          price: wishItem.price,
          stock: wishItem.stock,
          thumbnail: wishItem.thumbnail,
        },
      ],
    })),
  removeFromWishlist: (wishId: number) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== wishId),
    })),
});
