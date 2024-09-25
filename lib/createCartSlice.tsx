import { DummyProductType } from "@/types";
import { StateCreator } from "zustand";

export type CartItem = {
  id: string;
  title: string;
  quantity: number;
  price: number;
  stock: number;
  thumbnail: string;
};

export type CartSlice = {
  cart: CartItem[];
  addToCart: (item: DummyProductType, qty: number) => void;
  removeFromCart: (id: string) => void;
  incrementCartItemQty: (id: string) => void;
  decrementCartItemQty: (id: string) => void;
  clearCart: () => void;
};

export const createCartSlice: StateCreator<
  // WishlistSlice & CartSlice,
  // [["zustand/persist", CartSlice]],
  // [],
  CartSlice
> = (set) => ({
  cart: [],
  addToCart: (item: DummyProductType, qty: number) =>
    set((state) => {
      const checkCartItem = state.cart.find(
        (cartItem) => cartItem.id === item.sku
      );

      if (checkCartItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.sku
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
            id: item.sku,
            title: item.title,
            quantity: qty,
            price: item.price,
            stock: item.stock,
            thumbnail: item.thumbnail,
          },
        ],
      };
    }),
  removeFromCart: (id: string) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  incrementCartItemQty: (id: string) =>
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
  decrementCartItemQty: (id: string) =>
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
