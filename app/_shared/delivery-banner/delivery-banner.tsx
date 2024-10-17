import Image from "next/image";
import React from "react";
import { delivery_splash } from "../constants/images";
import Link from "next/link";

export default function DeliveryBanner() {
  return (
    <div className="w-full h-[50vh] flex-center relative">
      <Image
        src={delivery_splash}
        alt="Delivery splash image"
        fill
        className="absolute object-cover bg-center"
      />
      <div className="absolute w-full h-full bg-neutral-700/50 flex flex-col justify-center p-10 text-white">
        <p className="text-3xl font-semibold">
          Free delivery on your first three purchases
        </p>
        <p className="text-xl">with a minimum purchase of $200</p>
        <Link href="#" className="text-sm mt-4 underline">
          See terms and conditions
        </Link>
      </div>
    </div>
  );
}
