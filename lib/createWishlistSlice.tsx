import { DummyProductType } from "@/types/dummy-products-type";
import { StateCreator } from "zustand";

export type WishlistSlice = {
  wishlist: DummyProductType[];
  tempWishlist: DummyProductType[];
  addToWishlist: (wishItem: DummyProductType) => void;
  removeFromWishlist: (wishId: number) => void;
  addToTempWishlist: (wishItem: DummyProductType) => void;
  removeFromTempWishlist: (wishId: number) => void;
  transferTempToUserWishlist: () => void;
};

export const createWishlistSlice: StateCreator<WishlistSlice> = (set) => ({
  wishlist: [],
  tempWishlist: [],
  addToWishlist: (wishItem: DummyProductType) =>
    set((state) => ({
      wishlist: [...state.wishlist, wishItem],
    })),
  removeFromWishlist: (wishId: number) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== wishId),
    })),
  addToTempWishlist: (wishItem: DummyProductType) =>
    set((state) => ({
      tempWishlist: [...state.tempWishlist, wishItem],
    })),
  removeFromTempWishlist: (wishId: number) =>
    set((state) => ({
      tempWishlist: state.tempWishlist.filter((item) => item.id !== wishId),
    })),
  transferTempToUserWishlist: () => {
    set((state) => {
      const merged = [
        ...state.wishlist,
        ...state.tempWishlist.filter(
          (tempItem) => !state.wishlist.some((item) => item.id === tempItem.id)
        ),
      ];

      return {
        wishlist: merged,
        tempWishlist: [],
      };
    });
  },
});
