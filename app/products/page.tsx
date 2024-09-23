import ProductCard from "@/components/products/product-card";
import { DummyProductType } from "@/types";
import axios from "axios";

export default async function Products() {
  try {
    const [furnitureResponse, homeDecorResponse, kitchenResponse] =
      await Promise.all([
        axios("https://dummyjson.com/products/category/furniture"),
        axios("https://dummyjson.com/products/category/home-decoration"),
        axios("https://dummyjson.com/products/category/kitchen-accessories"),
      ]);

    const furniture: DummyProductType[] = furnitureResponse.data.products;
    const homeDecor: DummyProductType[] = homeDecorResponse.data.products;
    const kitchen: DummyProductType[] = kitchenResponse.data.products;

    const data = [...furniture, ...homeDecor, ...kitchen];

    return (
      <div>
        <h1>Products</h1>
        <div className="flex gap-4 flex-wrap">
          {data?.map((item, index) => (
            <ProductCard cardData={item} key={index} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
