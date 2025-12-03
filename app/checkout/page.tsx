"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart/CartProvider";

export default function CheckoutPage() {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const hasItems = items.length > 0;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!hasItems) return;
    setSubmitted(true);
    clearCart();
  }

  if (!hasItems && !submitted) {
    return (
      <main
        className="flex-1"
        style={{ backgroundColor: "var(--fs-bg)", color: "var(--fs-text)" }}
      >
        <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
          <div
            className="mx-auto max-w-lg rounded-2xl px-6 py-8 text-center md:px-8"
            style={{
              backgroundColor: "var(--fs-surface)",
              border: "1px solid var(--fs-border)",
            }}
          >
            <h1
              className="text-xl font-semibold md:text-2xl"
              style={{ color: "var(--fs-primary-dark)" }}
            >
              Your cart is empty
            </h1>
            <p
              className="mt-2 text-sm"
              style={{ color: "var(--fs-text-muted)" }}
            >
              Add a few items to your cart before checking out.
            </p>
            <Link
              href="/products"
              className="mt-5 inline-flex rounded-full px-5 py-2 text-sm font-semibold"
              style={{
                backgroundColor: "var(--fs-primary)",
                color: "#ffffff",
              }}
            >
              Continue shopping
            </Link>
          </div>
        </section>
      </main>
    );
  }

  if (submitted) {
    return (
      <main
        className="flex-1"
        style={{ backgroundColor: "var(--fs-bg)", color: "var(--fs-text)" }}
      >
        <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
          <div
            className="mx-auto max-w-lg rounded-2xl px-6 py-8 text-center md:px-8"
            style={{
              backgroundColor: "var(--fs-surface)",
              border: "1px solid var(--fs-border)",
              boxShadow: "0 18px 40px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h1
              className="text-xl font-semibold md:text-2xl"
              style={{ color: "var(--fs-primary-dark)" }}
            >
              Order placed (demo)
            </h1>
            <p
              className="mt-2 text-sm"
              style={{ color: "var(--fs-text-muted)" }}
            >
              Thank you for completing the checkout. This is a demo flow, so no
              real payment was taken.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => router.push("/products")}
                className="rounded-full px-5 py-2 text-sm font-semibold"
                style={{
                  backgroundColor: "var(--fs-primary)",
                  color: "#ffffff",
                }}
              >
                Continue shopping
              </button>
              <button
                onClick={() => router.push("/")}
                className="rounded-full px-5 py-2 text-sm font-semibold"
                style={{
                  border: "1px solid var(--fs-border)",
                  backgroundColor: "var(--fs-surface)",
                  color: "var(--fs-text-muted)",
                }}
              >
                Back to home
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

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
              Checkout
            </h1>
            <p
              className="text-sm"
              style={{ color: "var(--fs-text-muted)" }}
            >
              Please enter your details to finish this demo checkout.
            </p>
          </div>

          <Link
            href="/cart"
            className="text-[0.8rem]"
            style={{ color: "var(--fs-primary)" }}
          >
            Back to cart
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl p-5 md:p-6"
            style={{
              backgroundColor: "var(--fs-surface)",
              border: "1px solid var(--fs-border)",
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-medium">Full name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none"
                  style={{
                    borderColor: "var(--fs-border)",
                    backgroundColor: "#ffffff",
                  }}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none"
                  style={{
                    borderColor: "var(--fs-border)",
                    backgroundColor: "#ffffff",
                  }}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium">Address</label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded-xl border px-3 py-2 text-sm outline-none"
                style={{
                  borderColor: "var(--fs-border)",
                  backgroundColor: "#ffffff",
                }}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-1">
                <label className="text-xs font-medium">City</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none"
                  style={{
                    borderColor: "var(--fs-border)",
                    backgroundColor: "#ffffff",
                  }}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium">Country</label>
                <input
                  type="text"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none"
                  style={{
                    borderColor: "var(--fs-border)",
                    backgroundColor: "#ffffff",
                  }}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium">Postal code</label>
                <input
                  type="text"
                  required
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none"
                  style={{
                    borderColor: "var(--fs-border)",
                    backgroundColor: "#ffffff",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-full px-4 py-2.5 text-sm font-semibold"
              style={{
                backgroundColor: "var(--fs-primary)",
                color: "#ffffff",
              }}
            >
              Place order (demo)
            </button>
          </form>

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

            <ul className="mb-4 space-y-2 text-sm">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between gap-3"
                  style={{ color: "var(--fs-text)" }}
                >
                  <span className="flex-1">
                    {item.title}{" "}
                    <span
                      className="text-[0.75rem]"
                      style={{ color: "var(--fs-text-muted)" }}
                    >
                      × {item.quantity}
                    </span>
                  </span>
                  <span className="text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span style={{ color: "var(--fs-text-muted)" }}>
                  Items ({totalItems})
                </span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "var(--fs-text-muted)" }}>Delivery</span>
                <span>Free (demo)</span>
              </div>
            </div>

            <div className="mt-4 flex justify-between border-t pt-4 text-sm">
              <span className="font-semibold">Total</span>
              <span className="text-base font-semibold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <p
              className="mt-3 text-[0.75rem]"
              style={{ color: "var(--fs-text-muted)" }}
            >
              This checkout is for demonstration only. No real payment is
              processed.
            </p>

            <div className="mt-4 text-[0.8rem]">
              <Link
                href="/products"
                style={{ color: "var(--fs-primary)" }}
              >
                Continue shopping
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
