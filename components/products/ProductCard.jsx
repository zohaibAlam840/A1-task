"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({ product, index }) {
  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.03 * index }}
      whileHover={{ y: -4 }}
    >
      <div className="relative aspect-[4/3] bg-slate-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 line-clamp-2 text-sm font-medium">
          {product.title}
        </h3>
        <p className="mb-3 text-xs text-slate-500">
          {product.category}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-base font-semibold text-blue-600">
            ${product.price.toFixed(2)}
          </span>

          <Link href={`/products/${product.id}`}>
            <button className="rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-700 transition hover:border-blue-500 hover:text-blue-600">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
