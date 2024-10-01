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

  try {
    const response = await axios(`https://dummyjson.com/products/${extractId}`);
    const productDetail: DummyProductType = response.data;

    const BackToProductsButton = (
      <button className="hover:bg-stone-50 py-2 px-3 rounded-md md:mb-8">
        <Link
          href={`/products/${productDetail.category}`}
          className="flex-start gap-2"
        >
          <GoArrowLeft />
          <span>Back to Products</span>
        </Link>
      </button>
    );

    const ProductWriteups = (
      <div className="my-4 md:my-0">
        <h2 className="uppercase text-sm">
          {productDetail.brand ? productDetail.brand : "MINIKEA"}
        </h2>
        <h1 className="text-2xl font-semibold">{productDetail.title}</h1>
        <h3>${productDetail.price}</h3>
        <h3 className="text-sm">{productDetail.availabilityStatus}</h3>
        <p className="my-4 text-justify">{productDetail.description}</p>
      </div>
    );

    return (
      <div className="w-full p-4 md:p-8 max-w-screen-2xl mx-auto">
        {BackToProductsButton}
        <div className="flex flex-col gap-4 md:flex-row">
          <div>
            <ProductImages
              images={productDetail.images && productDetail.images}
            />
          </div>
          <div className="flex flex-col flex-1">
            {ProductWriteups}
            <AddItemBtnWrapper item={productDetail} />
          </div>
        </div>
        <ProductInfoPolicies data={productDetail} />
        <WishlistItemView />
      </div>
    );
  } catch (err) {
    console.log("Product not found:", err);

    return <div>No Product Found</div>;
  }
}
