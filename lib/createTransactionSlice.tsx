import { StateCreator } from "zustand";
import { TransactionItem, UserItem } from "@/types/dummy-users-type";
import { CartItem } from "@/types/dummy-products-type";

export type TransactionSlice = {
  transactions: TransactionItem[];
  payStatus: 0 | 1;
  setPayStatus: (stat: 0 | 1) => void;
  addToTransactions: (cart: CartItem[], user: UserItem) => void;
};

export const createTransactionSlice: StateCreator<TransactionSlice> = (
  set
) => ({
  transactions: [],
  payStatus: 0,
  setPayStatus: (stat) => set(() => ({ payStatus: stat })),
  addToTransactions: (cart: CartItem[], user: UserItem) =>
    set((state) => ({
      transactions: [
        ...state.transactions,
        {
          id: Date.now().toString(),
          createdAt: Date.now(),
          user: user,
          items: cart,
          totalAmount: cart.reduce((a, b) => {
            return a + b.price * b.quantity;
          }, 0),
          status: "Completed",
        },
      ],
    })),
});
