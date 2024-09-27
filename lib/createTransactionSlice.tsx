import { StateCreator } from "zustand";
import { CartItem } from "./createCartSlice";

export type TransactionItem = {
  id: string;
  items: CartItem[];
  totalAmount: number;
  status: "Completed" | "Cancelled";
};

export type TransactionSlice = {
  transactions: TransactionItem[];
  addToTransactions: (cart: CartItem[]) => void;
};

export const createTransactionSlice: StateCreator<TransactionSlice> = (
  set
) => ({
  transactions: [],
  addToTransactions: (cart: CartItem[]) =>
    set((state) => ({
      transactions: [
        ...state.transactions,
        {
          id: Date.now().toString(),
          items: cart,
          totalAmount: cart.reduce((a, b) => {
            return a + b.price * b.quantity;
          }, 0),
          status: "Completed",
        },
      ],
    })),
});
