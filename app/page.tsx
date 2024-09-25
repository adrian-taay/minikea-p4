import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Minikea",
  description: "Shop for furniture, decors, and more - Minikea",
};

export default function Home() {
  return (
    <main className="w-full h-[200vh]">
      Welcome to Minikea!
      <Link href={"/products"}>Show Products</Link>
    </main>
  );
}
