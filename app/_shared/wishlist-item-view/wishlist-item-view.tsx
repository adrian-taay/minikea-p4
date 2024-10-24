"use client";

import React from "react";
import { useUserStore } from "@/lib/useUserStore";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { createSlug } from "@/utils/createSlug";
import QuickAddButton from "@/app/products/_components/quick-add-button";

export default function WishlistItemView() {
  const wishlist = useUserStore((state) => state.wishlist);
  const inStockWishlistItems = wishlist.filter((item) => item.stock > 0);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const WishlistSwiper = (
    <Swiper
      direction="horizontal"
      modules={[Pagination]}
      spaceBetween={30}
      style={{
        width: "100%",
        maxWidth: "100%",
      }}
      className="my-4 w-full"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1.75,
        },
        960: {
          slidesPerView: 2.25,
        },
        1280: {
          slidesPerView: 3.25,
        },
      }}
      pagination={{
        clickable: true,
      }}
    >
      {inStockWishlistItems.map((item) => {
        const slug = createSlug(item);
        const lowStock = item.stock < 10;

        return (
          <SwiperSlide key={item.id}>
            <div className="w-full relative flex gap-3 justify-between mb-10 border rounded-md">
              <Image
                src={item.thumbnail}
                width={100}
                height={100}
                alt={item.title}
                className="bg-stone-200"
              />
              <div className="w-full flex flex-col items-start flex-1 py-1">
                <Link
                  href={`/products/${item.category}/${slug}`}
                  className="font-semibold text-lg"
                >
                  {item.title}
                </Link>
                <div className="text-sm">
                  {lowStock ? `${item.stock} items left!` : "In Stock"}
                </div>
                <div className="font-semibold">${item.price.toFixed(2)}</div>
              </div>
              <div className="absolute right-4 bottom-4">
                <QuickAddButton item={item} qty={1} />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );

  const WishlistItemWrapper = (
    <section className="w-full flex flex-col py-8">
      <h1 className="font-semibold text-xl">
        It&#39;s about time you bought these!
      </h1>
      <p className="w-4/5">
        Clear your wishlist. Add them to cart. You deserve a clean wishlist!
      </p>
      <div className="w-full">{WishlistSwiper}</div>
      <Link className="underline" href={"/user/wishlist"}>
        See your wishlist
      </Link>
    </section>
  );

  return (
    <>{isLoggedIn === 1 && wishlist.length > 0 ? WishlistItemWrapper : null}</>
  );
}
