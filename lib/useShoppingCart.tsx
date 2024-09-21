import { DummyProductType } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type CartItem = {
  id: string;
  title: string;
  quantity: number;
  price: number;
};

export type State = {
  cart: CartItem[];
};

export type Actions = {
  addItem: (item: DummyProductType) => void;
  removeItem: (id: string) => void;
  incrementItemQty: (id: string) => void;
  decrementItemQty: (id: string) => void;
  clearCart: () => void;
};

export const useShoppingCart = create<State & Actions>()(
  persist(
    immer((set) => ({
      cart: [],
      addItem: (item: DummyProductType) =>
        set((state) => ({
          cart: [
            ...state.cart,
            {
              id: item.sku,
              title: item.title,
              quantity: 1,
              price: item.price,
            },
          ],
        })),
      removeItem: (id: string) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
      incrementItemQty: (id: string) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),
      decrementItemQty: (id: string) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          ),
        })),
      clearCart: () => set({ cart: [] }),
    })),
    { name: "minikea-store" }
  )
);
