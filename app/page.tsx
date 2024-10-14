import { Metadata } from "next";
import NewDealsSection from "./_homepage-sections/new-deals";
import PopularProductsSection from "./_homepage-sections/popular-products";

export const metadata: Metadata = {
  title: "Home | Minikea",
  description: "Shop for furniture, decors, and more - Minikea",
};

export default function Home() {
  return (
    <main className="w-full p-4 md:p-8 max-w-screen-2xl mx-auto">
      <NewDealsSection />
      <PopularProductsSection />
    </main>
  );
}
