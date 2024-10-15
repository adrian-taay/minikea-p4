import { Metadata } from "next";
import NewDealsSection from "./_homepage-sections/new-deals";
import PopularProductsSection from "./_homepage-sections/display-products";
import CategoryFeatureSection from "./_homepage-sections/category-feature";
import ArticlesToRead from "./_homepage-sections/articles-to-read";
import InStoreBrandsSection from "./_homepage-sections/in-store-brands";
import HeroSection from "./_homepage-sections/hero-section";

export const metadata: Metadata = {
  title: "Home | Minikea",
  description: "Shop for furniture, decors, and more - Minikea",
};

export default function Home() {
  return (
    <main className="w-full max-w-screen-2xl space-y-10 mx-auto">
      <HeroSection />
      <NewDealsSection />
      <CategoryFeatureSection />
      <ArticlesToRead />
      <InStoreBrandsSection />
    </main>
  );
}
