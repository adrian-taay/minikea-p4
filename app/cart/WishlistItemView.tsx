"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useUserStore } from "@/lib/useUserStore";
import Image from "next/image";
import AddItemBtn from "@/components/add-item-buttons/AddItemBtn";
import Link from "next/link";
import { Pagination } from "swiper/modules";

export default function WishlistItemView() {
  const wishlist = useUserStore((state) => state.wishlist);

  const inStockWishlistItems = wishlist.filter((item) => item.stock > 0);

  return (
    <Swiper
      direction="horizontal"
      modules={[Pagination]}
      spaceBetween={30}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2.5,
        },
      }}
      pagination={{
        clickable: true,
      }}
      className="my-4"
    >
      {inStockWishlistItems.map((item) => {
        const lowStock = item.stock < 10;

        return (
          <SwiperSlide key={item.id} className="border py-4 px-4">
            <div className="flex gap-3 justify-between">
              <Image
                src={item.thumbnail}
                width={100}
                height={100}
                alt={item.title}
              />
              <div className="flex flex-col justify-between items-start flex-1">
                <div>
                  <Link
                    href={`/products/${item.id}`}
                    className="font-semibold text-lg"
                  >
                    {item.title}
                  </Link>
                  <div className="text-sm">
                    {lowStock ? `${item.stock} items left!` : "In Stock"}
                  </div>
                </div>
                <AddItemBtn item={item} qty={1} />
              </div>
              <div className="font-semibold">$ {item.price.toFixed(2)}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
