// app/products/page.tsx
import { fetchProducts } from "@/lib/api/products";
import ProductGrid from "@/components/products/ProductGrid";

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <main
      className="flex-1"
      style={{ backgroundColor: "var(--fs-bg)", color: "var(--fs-text)" }}
    >
      <section className="mx-auto w-full max-w-6xl px-4 pt-10 md:pt-14">
        <div className="mb-6 space-y-2">
          <h1
            className="text-2xl font-semibold md:text-3xl"
            style={{ color: "var(--fs-primary-dark)" }}
          >
            Products
          </h1>
          <p
            className="text-sm md:text-base"
            style={{ color: "var(--fs-text-muted)" }}
          >
            Browse a small collection of demo products powered by Fake Store
            API. All items are for display only.
          </p>
        </div>
      </section>

      <ProductGrid products={products} />
    </main>
  );
}
