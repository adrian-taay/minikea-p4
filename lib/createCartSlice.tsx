import { CartItem, DummyProductType } from "@/types/dummy-products-type";
import { StateCreator } from "zustand";

export type CartSlice = {
  cart: CartItem[];
  addToCart: (item: DummyProductType, qty: number) => void;
  removeFromCart: (id: number) => void;
  incrementCartItemQty: (id: number) => void;
  decrementCartItemQty: (id: number) => void;
  clearCart: () => void;
};

export const createCartSlice: StateCreator<CartSlice> = (set) => ({
  cart: [],
  addToCart: (item: DummyProductType, qty: number) =>
    set((state) => {
      const checkCartItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (checkCartItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + qty,
                }
              : cartItem
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            ...item,
            quantity: qty,
          },
        ],
      };
    }),
  removeFromCart: (id: number) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  incrementCartItemQty: (id: number) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1 > item.stock
                  ? item.quantity
                  : item.quantity + 1,
            }
          : item
      ),
    })),
  decrementCartItemQty: (id: number) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity - 1 < 1 ? item.quantity : item.quantity - 1,
            }
          : item
      ),
    })),
  clearCart: () => set({ cart: [] }),
});
