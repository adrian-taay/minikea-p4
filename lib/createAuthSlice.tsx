import { StateCreator } from "zustand";
import { TransactionSlice } from "./createTransactionSlice";
import { CartItem, CartSlice } from "./createCartSlice";

export type UserItem = {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

export type AuthSlice = {
  user: UserItem;
  isLoggedIn: boolean;
  transactions: [];
  userLogin: (user: UserItem) => void;
  userLogout: () => void;
  userCheckout: (cart: CartItem[], user: UserItem) => void;
};

export const createAuthSlice: StateCreator<
  AuthSlice & TransactionSlice & CartSlice,
  [],
  [],
  AuthSlice
> = (set, get) => ({
  user: {} as UserItem,
  isLoggedIn: false,
  transactions: [],
  userLogin: (user: UserItem) =>
    set(() => ({
      user: user,
      isLoggedIn: true,
    })),
  userLogout: () => set({ user: {} as UserItem, isLoggedIn: false }),
  userCheckout: (cart: CartItem[], user: UserItem) => {
    get().addToTransactions(cart, user);
    get().clearCart();
  },
});
