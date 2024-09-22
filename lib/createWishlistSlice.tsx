import React from "react";

export type WishlistItem = {
  id: string;
  title: string;
  stock: number;
};

export type WishlistState = {
  wishlist: WishlistItem[];
};

export type WishlistActions = {
  addToWishlist: () => void;
  removeFromWishlist: () => void;
};

export const createWishlistSlice = (set) => ({
  wishlist: [],
});
