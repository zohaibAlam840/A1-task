import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (!products?.length) {
    return (
      <section
        className="w-full"
        style={{ backgroundColor: "var(--fs-bg)", color: "var(--fs-text-muted)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-16 text-center text-sm">
          No products found.
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full"
      style={{ backgroundColor: "var(--fs-bg)", color: "var(--fs-text)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
        <div className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <h2
            className="text-base font-semibold md:text-xl"
            style={{ color: "var(--fs-primary-dark)" }}
          >
            Featured products
          </h2>
          <p
            className="text-[0.8rem]"
            style={{ color: "var(--fs-text-muted)" }}
          >
            Showing {products.length} item{products.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
