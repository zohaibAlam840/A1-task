// import Image from "next/image";
// import ProductDetailClient from "@/components/products/ProductDetailClient";
// import { fetchProducts, fetchProductById } from "@/lib/api/products";
// import { notFound } from "next/navigation";

// export const revalidate = 60;

// // Safe: don't break build if Fake Store API is down
// export async function generateStaticParams() {
//   try {
//     const products = await fetchProducts();

//     if (!Array.isArray(products)) {
//       return [];
//     }

//     return products.map((product: any) => ({
//       id: product.id?.toString(),
//     })).filter((p: { id: string | undefined }) => !!p.id);
//   } catch (err) {
//     console.error("Failed to generate static params for products", err);
//     // Return empty so build still succeeds
//     return [];
//   }
// }

// // Safe: fall back to generic metadata if product lookup fails
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;

//   try {
//     const product = await fetchProductById(id);

//     if (!product || !product.title) {
//       throw new Error("No product data for metadata");
//     }

//     return {
//       title: product.title,
//       description: product.description ?? "Product details",
//     };
//   } catch (err) {
//     console.error("Failed to fetch product for metadata", err);
//     return {
//       title: "Product",
//       description: "Product details for this item.",
//     };
//   }
// }

// export default async function ProductPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;

//   let product: any;

//   try {
//     product = await fetchProductById(id);
//   } catch (err) {
//     console.error("Failed to fetch product on ProductPage", err);
//     return notFound();
//   }

//   if (!product?.id) {
//     return notFound();
//   }

//   return (
//     <main
//       className="flex-1"
//       style={{ backgroundColor: "var(--fs-bg)", color: "var(--fs-text)" }}
//     >
//       <section className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
//         <div className="mb-6 text-xs text-[var(--fs-text-muted)]">
//           <span>Home</span>
//           <span className="mx-1.5">/</span>
//           <span>Products</span>
//           <span className="mx-1.5">/</span>
//           <span className="text-[var(--fs-primary)] truncate align-middle">
//             {product.title}
//           </span>
//         </div>

//         <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)] lg:gap-12">
//           <div
//             className="relative rounded-2xl p-5 md:p-6"
//             style={{
//               backgroundColor: "var(--fs-surface)",
//               border: "1px solid var(--fs-border)",
//               boxShadow: "0 18px 40px rgba(0, 0, 0, 0.04)",
//             }}
//           >
//             <div className="relative aspect-square max-h-[440px] rounded-xl bg-[var(--fs-primary-soft)]/60 p-6">
//               <Image
//                 src={product.image}
//                 alt={product.title}
//                 fill
//                 sizes="(min-width: 1024px) 40vw, 80vw"
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>

//           <div className="w-full">
//             <ProductDetailClient product={product} />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



import Image from "next/image";
import ProductDetailClient from "@/components/products/ProductDetailClient";
import { fetchProducts, fetchProductById } from "@/lib/api/products";
import { notFound } from "next/navigation";

export const revalidate = 60;

// ✅ Safe static params
export async function generateStaticParams() {
  try {
    const products = await fetchProducts();

    if (!Array.isArray(products)) return [];

    return products
      .map((product: any) => ({
        id: product.id?.toString(),
      }))
      .filter((p) => !!p.id);
  } catch (err) {
    console.error("Failed to generate static params for products", err);
    return [];
  }
}

// ✅ Safe metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await fetchProductById(id);

  if (!product) {
    return {
      title: "Product",
      description: "Product details for this item.",
    };
  }

  return {
    title: product.title,
    description: product.description ?? "Product details",
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await fetchProductById(id);

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
