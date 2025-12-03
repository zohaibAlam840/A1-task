import Image from "next/image";
import ProductDetailClient from "@/components/products/ProductDetailClient";
import { fetchProducts, fetchProductById } from "@/lib/api/products";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await fetchProducts();

  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await fetchProductById(id);

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let product;

  try {
    product = await fetchProductById(id);
  } catch (err) {
    console.error(err);
    return notFound();
  }

  if (!product?.id) {
    return notFound();
  }

  return (
    <main
      className="flex-1"
      style={{ backgroundColor: "var(--fs-bg)", color: "var(--fs-text)" }}
    >
      <section className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
        <div className="mb-6 text-xs text-[var(--fs-text-muted)]">
          <span>Home</span>
          <span className="mx-1.5">/</span>
          <span>Products</span>
          <span className="mx-1.5">/</span>
          <span className="text-[var(--fs-primary)] truncate align-middle">
            {product.title}
          </span>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)] lg:gap-12">
          <div
            className="relative rounded-2xl p-5 md:p-6"
            style={{
              backgroundColor: "var(--fs-surface)",
              border: "1px solid var(--fs-border)",
              boxShadow: "0 18px 40px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="relative aspect-square max-h-[440px] rounded-xl bg-[var(--fs-primary-soft)]/60 p-6">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="w-full">
            <ProductDetailClient product={product} />
          </div>
        </div>
      </section>
    </main>
  );
}
