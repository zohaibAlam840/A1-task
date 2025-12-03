"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/components/cart/CartProvider";

export default function ProductDetailClient({ product }) {
  const { items, addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const inCart = useMemo(
    () => items.some((item) => item.id === product.id),
    [items, product.id]
  );

  const price = product.price;
  const total = (price * quantity).toFixed(2);

  function handleAddToCart() {
    addItem(product, quantity);
    setJustAdded(true);
  }

  useEffect(() => {
    if (!justAdded) return;
    const id = setTimeout(() => setJustAdded(false), 1800);
    return () => clearTimeout(id);
  }, [justAdded]);

  return (
    <div className="space-y-4 md:space-y-5">
      <div className="space-y-2">
        <h1
          className="text-xl font-semibold md:text-2xl"
          style={{ color: "var(--fs-primary-dark)" }}
        >
          {product.title}
        </h1>
        <p
          className="inline-flex rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-wide"
          style={{
            backgroundColor: "var(--fs-primary-soft)",
            color: "var(--fs-primary)",
          }}
        >
          {product.category}
        </p>
        {inCart && (
          <p
            className="text-[0.75rem]"
            style={{ color: "var(--fs-text-muted)" }}
          >
            Already in your cart.
          </p>
        )}
      </div>

      <p
        className="text-sm md:text-base leading-relaxed"
        style={{ color: "var(--fs-text-muted)" }}
      >
        {product.description}
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <div className="flex flex-col">
          <span
            className="text-xs uppercase tracking-wide"
            style={{ color: "var(--fs-text-muted)" }}
          >
            Price
          </span>
          <span
            className="text-2xl font-semibold"
            style={{ color: "var(--fs-primary-dark)" }}
          >
            ${price}
          </span>
        </div>

        <div className="flex flex-col">
          <span
            className="text-xs uppercase tracking-wide"
            style={{ color: "var(--fs-text-muted)" }}
          >
            Total
          </span>
          <span
            className="text-lg font-semibold"
            style={{ color: "var(--fs-primary)" }}
          >
            ${total}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <div className="flex flex-wrap items-center gap-4">
          <div
            className="flex items-center rounded-full border px-2 py-1.5 text-sm"
            style={{ borderColor: "var(--fs-border)" }}
          >
            <button
              className="px-2 text-lg"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              −
            </button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <button
              className="px-2 text-lg"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleAddToCart}
            className="rounded-full px-6 py-2.5 text-sm font-semibold shadow-md"
            style={{
              backgroundColor: "var(--fs-primary)",
              color: "#ffffff",
              boxShadow: "0 12px 24px rgba(122, 31, 107, 0.25)",
            }}
          >
            {inCart ? "Add more to cart" : "Add to cart"}
          </motion.button>
        </div>

        <AnimatePresence>
          {justAdded && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.75rem]"
              style={{
                border: "1px solid rgba(22, 163, 74, 0.25)",
                backgroundColor: "rgba(22, 163, 74, 0.06)",
                color: "rgb(22, 163, 74)",
              }}
            >
              <span>✓</span>
              <span>Added to your cart</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p
        className="text-[0.75rem] pt-1"
        style={{ color: "var(--fs-text-muted)" }}
      >
        This is a demo store interface. No real orders are processed.
      </p>
    </div>
  );
}
