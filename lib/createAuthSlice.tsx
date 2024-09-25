import { StateCreator } from "zustand";

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
  addToTransactions: () => void;
};

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  user: {} as UserItem,
  isLoggedIn: false,
  transactions: [],
  userLogin: (user: UserItem) =>
    set(() => ({
      user: user,
      isLoggedIn: true,
    })),
  userLogout: () => set({ user: {} as UserItem }),
  addToTransactions: () => set({}),
});
