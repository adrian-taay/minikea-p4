import React from "react";
import DeliveryBanner from "../_shared/delivery-banner/delivery-banner";

export default function ProductsPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full flex-col gap-8 max-w-screen-2xl mx-auto">
      {children}
      <div className="p-8">
        <DeliveryBanner />
      </div>
    </section>
  );
}
