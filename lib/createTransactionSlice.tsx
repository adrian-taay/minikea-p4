import { StateCreator } from "zustand";
import { CartItem } from "./createCartSlice";
import { UserItem } from "./createAuthSlice";

export type TransactionItem = {
  id: string;
  createdAt: number;
  user: UserItem;
  items: CartItem[];
  totalAmount: number;
  status: "Completed" | "Cancelled";
};

export type TransactionSlice = {
  transactions: TransactionItem[];
  addToTransactions: (cart: CartItem[], user: UserItem) => void;
};

export const createTransactionSlice: StateCreator<TransactionSlice> = (
  set
) => ({
  transactions: [],
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
