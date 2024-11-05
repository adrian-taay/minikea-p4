import React from "react";
import DisplayProducts, {
  DisplayProductsType,
} from "../_shared/display-products/display-products";
import { randomProductIdArray } from "@/utils/randomProductIdArray";
import CartLayoutSwitcher from "./_components/cart-layout-switcher";

export default function CartPage() {
  const randomPicks: DisplayProductsType = {
    headline: "Random picks",
    products: randomProductIdArray(6),
  };

  return (
    <main className="w-full flex flex-col p-4 md:p-8 max-w-screen-2xl mx-auto">
      <CartLayoutSwitcher />
      <div className="py-10">
        <DisplayProducts displayProductObject={randomPicks} />
      </div>
    </main>
  );
}
