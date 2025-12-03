"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/components/cart/CartProvider";

export default function SiteHeader() {
  const { totalItems } = useCart();

  return (
    <header
      className="sticky top-0 z-20 backdrop-blur"
      style={{
        backgroundColor: "rgba(255, 250, 253, 0.92)",
        borderBottom: "1px solid var(--fs-border)",
      }}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-2xl text-lg font-semibold"
            style={{
              backgroundColor: "var(--fs-primary-soft)",
              color: "var(--fs-primary)",
              border: "1px solid var(--fs-border)",
            }}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🛍
          </motion.div>

          <motion.span
            className="text-lg font-semibold tracking-tight"
            style={{ color: "var(--fs-primary-dark)" }}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            Next<span style={{ color: "var(--fs-primary)" }}>Store</span>
          </motion.span>
        </Link>

        <motion.div
          className="flex items-center gap-6 text-xs md:text-sm"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div
            className="hidden gap-4 sm:flex"
            style={{ color: "var(--fs-text-muted)" }}
          >
            <Link
              href="/"
              className="hover:text-[var(--fs-primary)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-[var(--fs-primary)] transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="hover:text-[var(--fs-primary)] transition-colors"
            >
              About
            </Link>
          </div>

          <span
            className="hidden md:inline text-[0.75rem]"
            style={{ color: "var(--fs-text-muted)" }}
          >
            Demo shop for learning
          </span>

          <Link
            href="/cart"
            className="rounded-full px-3.5 py-1.5 text-xs font-semibold transition"
            style={{
              border: "1px solid var(--fs-primary)",
              color: "var(--fs-primary)",
              backgroundColor: "#ffffff",
            }}
          >
            Cart{totalItems > 0 ? ` (${totalItems})` : ""}
          </Link>
        </motion.div>
      </nav>
    </header>
  );
}
