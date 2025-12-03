"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useCart } from "@/components/cart/CartProvider";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);


  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    if (menuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 z-30 backdrop-blur"
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

        {/* Desktop nav (sm+) */}
        <div className="hidden sm:flex items-center gap-6 text-xs md:text-sm">
          <div className="flex gap-4" style={{ color: "var(--fs-text-muted)" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[var(--fs-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <span
            className="hidden md:inline text-[0.75rem]"
            style={{ color: "var(--fs-text-muted)" }}
          >
            Demo shop
          </span>

          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition"
            style={{
              border: "1px solid var(--fs-primary)",
              color: "var(--fs-primary)",
              backgroundColor: "#ffffff",
            }}
            aria-label={`Open cart (${totalItems} items)`}
          >
            <span className="text-sm">🧾</span>
            <span className="hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span
                className="ml-1 inline-flex items-center justify-center rounded-full px-2 py-0.5 text-[0.65rem] font-bold"
                style={{
                  backgroundColor: "var(--fs-primary)",
                  color: "white",
                }}
                aria-hidden
              >
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 sm:hidden">
          <Link
            href="/cart"
            className="relative rounded-full px-3 py-1 text-sm font-semibold transition"
            style={{
              border: "1px solid var(--fs-primary)",
              color: "var(--fs-primary)",
              backgroundColor: "#ffffff",
            }}
            aria-label={`Open cart (${totalItems} items)`}
          >
            <span className="sr-only">Cart</span>
            <span aria-hidden>🧾</span>
            {totalItems > 0 && (
              <span
                className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full px-2 py-0.5 text-[0.6rem] font-bold"
                style={{
                  backgroundColor: "var(--fs-primary)",
                  color: "white",
                }}
                aria-hidden
              >
                {totalItems}
              </span>
            )}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border transition"
            style={{
              borderColor: "var(--fs-border)",
              backgroundColor: "transparent",
            }}
          >
            {/* simple animated hamburger */}
            <motion.span
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg font-medium"
            >
              ☰
            </motion.span>
          </button>
        </div>
      </nav>

      {/* Mobile slide-over menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* overlay */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              style={{ backgroundColor: "black" }}
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />

            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-full max-w-xs bg-white shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between px-4 py-3">
                <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-2xl text-lg font-semibold"
                    style={{
                      backgroundColor: "var(--fs-primary-soft)",
                      color: "var(--fs-primary)",
                      border: "1px solid var(--fs-border)",
                    }}
                  >
                    🛍
                  </div>
                  <span className="text-lg font-semibold tracking-tight" style={{ color: "var(--fs-primary-dark)" }}>
                    Next<span style={{ color: "var(--fs-primary)" }}>Store</span>
                  </span>
                </Link>

                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border"
                  style={{ borderColor: "var(--fs-border)" }}
                >
                  ✕
                </button>
              </div>

              <nav className="mt-4 flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-md px-3 py-3 text-sm font-medium hover:bg-gray-50"
                    style={{ color: "var(--fs-primary-dark)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 px-4">
                <Link
                  href="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-semibold"
                  style={{ border: "1px solid var(--fs-primary)" }}
                >
                  <div className="flex items-center gap-2">
                    <span>🧾</span>
                    <span>Cart</span>
                  </div>
                  <div>
                    {totalItems > 0 ? (
                      <span
                        className="inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-bold"
                        style={{ backgroundColor: "var(--fs-primary)", color: "white" }}
                      >
                        {totalItems}
                      </span>
                    ) : (
                      <span className="text-[0.8rem]" style={{ color: "var(--fs-text-muted)" }}>
                        empty
                      </span>
                    )}
                  </div>
                </Link>
              </div>

              <div className="mt-auto px-4 py-6">
                <p className="text-xs" style={{ color: "var(--fs-text-muted)" }}>
                  Demo shop
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
                  }
