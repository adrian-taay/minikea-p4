import AddItemBtnWrapper from "@/components/add-item-buttons/AddItemBtnWrapper";
import { DummyProductType } from "@/types";
import axios from "axios";
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const response = await axios(`https://dummyjson.com/products/${params.id}`);

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
  try {
    const response = await axios(`https://dummyjson.com/products/${params.id}`);
    const productDetail: DummyProductType = response.data;

    return (
      <div>
        <h1>{productDetail.title}</h1>
        <p>{productDetail.description}</p>
        <div>
          <Image
            src={productDetail.images[0]}
            width={200}
            height={200}
            alt={productDetail.title}
            loading="lazy"
          />
        </div>
        <AddItemBtnWrapper item={productDetail} />
      </div>
    );
  } catch (err) {
    console.log("Product not found:", err);

    return <div>No Product Found</div>;
  }
}
