import Hero from "@/components/sections/Hero";
import ProductGrid from "@/components/products/ProductGrid";
import { fetchProducts } from "@/lib/api/products";

export const revalidate = 60; // ISR: rebuild at most every 60 seconds

export default async function HomePage() {
  const products = await fetchProducts();
  const featured = products.slice(0, 8); // simple “featured” logic

  return (
    <>
      <Hero />
      <ProductGrid products={featured} />
    </>
  );
}
