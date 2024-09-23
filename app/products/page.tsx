import ProductCard from "@/components/products/product-card";
import ProductPagination from "@/components/products/product-pagination";
import { DummyProductType } from "@/types";
import axios from "axios";
import Link from "next/link";

export default async function Products({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const pageQuery = searchParams?.page || 1;

  const determineSkip =
    Number(pageQuery) === 1 ? 0 : (Number(pageQuery) - 1) * 8;

  // console.log("page query:", pageQuery);
  // console.log("page limit:", 8);
  // console.log("determine skip:", determineSkip);

  try {
    const [
      furnitureResponse,
      homeDecorResponse,
      kitchenResponse,
      smartphonesResponse,
      laptopResponse,
    ] = await Promise.all([
      axios("https://dummyjson.com/products/category/furniture"),
      axios("https://dummyjson.com/products/category/home-decoration"),
      axios("https://dummyjson.com/products/category/kitchen-accessories"),
      axios("https://dummyjson.com/products/category/smartphones"),
      axios("https://dummyjson.com/products/category/laptops"),
    ]);

    const furniture: DummyProductType[] = furnitureResponse.data.products;
    const homeDecor: DummyProductType[] = homeDecorResponse.data.products;
    const kitchen: DummyProductType[] = kitchenResponse.data.products;
    const smartphone: DummyProductType[] = smartphonesResponse.data.products;
    const laptop: DummyProductType[] = laptopResponse.data.products;

    const productArray: DummyProductType[] = [
      ...furniture,
      ...homeDecor,
      ...kitchen,
      ...smartphone,
      ...laptop,
    ];

    const data = {
      products: productArray.slice(determineSkip, determineSkip + 8),
      total: productArray.length,
      skip: 0,
      limit: 8,
    };

    return (
      <div>
        <h1>Products</h1>
        <Link href={"/products/furniture"}>Furniture</Link>
        <p>Total Products: {data.total}</p>
        <div className="flex gap-4 flex-wrap">
          {data?.products.map((item, index) => (
            <ProductCard cardData={item} key={index} />
          ))}
        </div>
        <ProductPagination total={data.total} limit={8} />
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
