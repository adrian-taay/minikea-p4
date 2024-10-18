'use client'

import React from "react";
import PurchaseSummary from "./_components/purchase-summary";
import FinishTransactionDialog from "./_components/finish-transaction-dialog";
import Image from "next/image";
import { checkout_splash } from "@/app/_shared/constants/images";
import useCheckoutGuard from "@/utils/guards/useCheckoutGuard";

export default function CheckoutPage() {
const isLoading = useCheckoutGuard();

return !isLoading && (
    <main className="relative w-full h-screen flex flex-col justify-center items-center max-w-screen-2xl mx-auto">
      <div className="relative w-full h-full">
        <Image
          src={checkout_splash}
          alt="Checkout splash image"
          fill
          sizes="100vw"
          priority
          className="absolute object-cover bg-center"
        />
      </div>
      <div className="absolute w-full h-full flex-center">
        <div className="w-5/12 bg-white shadow-md flex flex-col py-6 px-3 gap-8 items-center">
          <PurchaseSummary />
          <FinishTransactionDialog />
        </div>
      </div>
    </main>
  );
}
