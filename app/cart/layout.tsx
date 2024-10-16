import React from "react";
import DisplayProducts, {
  DisplayProductsType,
} from "../_shared/display-products/display-products";
import { randomProductIdArray } from "@/utils/randomProductIdArray";

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const randomPicks: DisplayProductsType = {
    headline: "Random picks",
    products: randomProductIdArray(6),
  };

  return (
    <main className="w-full flex flex-col p-4 md:p8 max-w-screen-2xl mx-auto">
      <div>{children}</div>
      <div className="py-10">
        <DisplayProducts displayProductObject={randomPicks} />
      </div>
    </main>
  );
}
