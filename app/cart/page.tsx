"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart/CartProvider";

export default function CartPage() {
  const {
    items,
    totalItems,
    totalPrice,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const hasItems = items.length > 0;

  return (
    <main
      className="flex-1"
      style={{ backgroundColor: "var(--fs-bg)", color: "var(--fs-text)" }}
    >
      <section className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1
              className="text-2xl font-semibold md:text-3xl"
              style={{ color: "var(--fs-primary-dark)" }}
            >
              Your cart
            </h1>
            <p
              className="text-sm"
              style={{ color: "var(--fs-text-muted)" }}
            >
              {hasItems
                ? `You have ${totalItems} item${
                    totalItems !== 1 ? "s" : ""
                  } in your cart.`
                : "Your cart is empty at the moment."}
            </p>
          </div>

          {hasItems && (
            <button
              onClick={clearCart}
              className="self-start rounded-full px-4 py-1.5 text-xs font-medium"
              style={{
                border: "1px solid var(--fs-border)",
                color: "var(--fs-text-muted)",
                backgroundColor: "var(--fs-surface)",
              }}
            >
              Clear cart
            </button>
          )}
        </div>

        {!hasItems ? (
          <div
            className="mt-8 rounded-2xl px-5 py-10 text-center md:px-8"
            style={{
              backgroundColor: "var(--fs-surface)",
              border: "1px solid var(--fs-border)",
            }}
          >
            <p
              className="mb-4 text-sm"
              style={{ color: "var(--fs-text-muted)" }}
            >
              You don&apos;t have any products in your cart yet.
            </p>
            <Link
              href="/products"
              className="inline-flex rounded-full px-5 py-2 text-sm font-semibold"
              style={{
                backgroundColor: "var(--fs-primary)",
                color: "#ffffff",
              }}
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl p-4 md:p-5"
                  style={{
                    backgroundColor: "var(--fs-surface)",
                    border: "1px solid var(--fs-border)",
                  }}
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[var(--fs-primary-soft)]/60">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-2 md:flex-row md:items-center">
                    <div className="space-y-1">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--fs-primary-dark)" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-[0.75rem]"
                        style={{ color: "var(--fs-text-muted)" }}
                      >
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 md:flex-row md:items-center">
                      <div
                        className="flex items-center rounded-full border px-2 py-1.5 text-sm"
                        style={{ borderColor: "var(--fs-border)" }}
                      >
                        <button
                          className="px-2 text-lg"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          className="px-2 text-lg"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <div className="flex flex-col items-end">
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "var(--fs-primary)" }}
                        >
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[0.75rem]"
                          style={{ color: "var(--fs-text-muted)" }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside
              className="rounded-2xl p-5 md:p-6"
              style={{
                backgroundColor: "var(--fs-surface)",
                border: "1px solid var(--fs-border)",
                boxShadow: "0 18px 40px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h2
                className="mb-4 text-base font-semibold"
                style={{ color: "var(--fs-primary-dark)" }}
              >
                Order summary
              </h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: "var(--fs-text-muted)" }}>
                    Items ({totalItems})
                  </span>
                  <span style={{ color: "var(--fs-text)" }}>
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--fs-text-muted)" }}>
                    Delivery
                  </span>
                  <span style={{ color: "var(--fs-text)" }}>Free (demo)</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between border-t pt-4 text-sm">
                <span className="font-semibold">Total</span>
                <span className="text-base font-semibold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <Link
                href="/checkout"
                className="mt-4 block w-full rounded-full px-4 py-2.5 text-center text-sm font-semibold"
                style={{ backgroundColor: "var(--fs-primary)", color: "#ffffff" }}
                >
                Go to checkout
                </Link>

              <p
                className="mt-2 text-[0.75rem]"
                style={{ color: "var(--fs-text-muted)" }}
              >
                This is a demo cart for display only. No real payments are
                processed.
              </p>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
