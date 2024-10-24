import { StateCreator } from "zustand";
import { TransactionSlice } from "./createTransactionSlice";
import { CartSlice } from "./createCartSlice";
import { UserItem } from "@/types/dummy-users-type";
import { CartItem } from "@/types/dummy-products-type";
import { WishlistSlice } from "./createWishlistSlice";

export type AuthSlice = {
  user: UserItem;
  isLoggedIn: 0 | 1;
  transactions: [];
  userLogin: (user: UserItem) => void;
  userLogout: () => void;
  userCheckout: (cart: CartItem[], user: UserItem) => void;
};

export const createAuthSlice: StateCreator<
  AuthSlice & TransactionSlice & CartSlice & WishlistSlice,
  [],
  [],
  AuthSlice
> = (set, get) => ({
  user: {} as UserItem,
  isLoggedIn: 0,
  transactions: [],
  userLogin: (user: UserItem) => {
    set(() => ({
      user: user,
      isLoggedIn: 1,
    }));
    get().transferTempToUserWishlist();
  },
  userLogout: () => set({ user: {} as UserItem, isLoggedIn: 0 }),
  userCheckout: (cart: CartItem[], user: UserItem) => {
    get().addToTransactions(cart, user);
    // get().clearCart();
  },
});
