import WishlistItemView from "@/app/cart/wishlist-item-view";
import AddItemBtnWrapper from "@/components/buttons/add-cart-quantity/add-cart-quantity-button";
import ProductImages from "@/components/single-product/product-images";
import ProductInfoPolicies from "@/components/single-product/product-info-policies";
import { DummyProductType } from "@/types/dummy-products-type";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const extractId = params.id.split("-")[0];
  const response = await axios(`https://dummyjson.com/products/${extractId}`);

  const meta: DummyProductType = response.data;

  return {
    title: `${meta.title} | Minikea`,
    description: meta.description,
  };
}

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const extractId = params.id.split("-")[0];

  const BackToProductsButton = (
    <button className="hover:bg-stone-50 py-2 px-3 rounded-md">
      <Link href={"/products"} className="flex-start gap-2">
        <GoArrowLeft />
        <span>Back to Products</span>
      </Link>
    </button>
  );

  try {
    const response = await axios(`https://dummyjson.com/products/${extractId}`);
    const productDetail: DummyProductType = response.data;

    const ProductWriteups = (
      <div>
        <h2 className="uppercase text-sm">
          {productDetail.brand ? productDetail.brand : "MINIKEA"}
        </h2>
        <h1 className="text-2xl">{productDetail.title}</h1>
        <h3>${productDetail.price}</h3>
        <h3>{productDetail.availabilityStatus}</h3>
        <h3>Rating: {productDetail.rating}</h3>

        <p>{productDetail.description}</p>
      </div>
    );

    return (
      <div>
        {BackToProductsButton}
        <ProductImages images={productDetail.images && productDetail.images} />
        {ProductWriteups}
        <AddItemBtnWrapper item={productDetail} />
        <ProductInfoPolicies data={productDetail} />
        <WishlistItemView />
      </div>
    );
  } catch (err) {
    console.log("Product not found:", err);

    return <div>No Product Found</div>;
  }
}
