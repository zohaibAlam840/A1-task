"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative"
      style={{ backgroundColor: "var(--fs-bg)", color: "var(--fs-text)" }}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p
            className="inline-flex items-center rounded-full px-4 py-1 text-[0.75rem] font-medium"
            style={{
              backgroundColor: "var(--fs-primary-soft)",
              color: "var(--fs-primary)",
              border: "1px solid var(--fs-border)",
            }}
          >
            NextStore · demo shop for an assignment
          </p>

          <h1
            className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "var(--fs-primary-dark)" }}
          >
            A simple online store
            <br />
            with clean, modern styling.
          </h1>

          <p
            className="max-w-xl text-sm md:text-base"
            style={{ color: "var(--fs-text-muted)" }}
          >
            Browse a small collection of demo products powered by Fake Store
            API. Built with Next.js to showcase routing, data fetching, and a
            polished layout.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href='/products'>
            
            <Button
              className="rounded-full px-6 py-2.5 text-sm font-semibold shadow-md border"
              style={{
                backgroundColor: "var(--fs-primary)",
                borderColor: "var(--fs-primary)",
                color: "#ffffff",
                boxShadow: "0 12px 24px rgba(122, 31, 107, 0.25)",
              }}
            >
              Start shopping
            </Button>
            </Link>

          
          </div>
        </motion.div>

        <motion.div
          className="hidden justify-end md:flex"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div
            className="w-full max-w-sm rounded-2xl p-5"
            style={{
              backgroundColor: "var(--fs-surface)",
              border: "1px solid var(--fs-border)",
              boxShadow: "0 18px 40px rgba(0, 0, 0, 0.04)",
            }}
          >
            <p
              className="mb-3 text-[0.75rem] font-semibold uppercase tracking-wide"
              style={{ color: "var(--fs-muted)" }}
            >
              Inside this demo
            </p>

            <ul
              className="space-y-2 text-[0.8rem]"
              style={{ color: "var(--fs-text-muted)" }}
            >
              <li>• Product listing and detail pages</li>
              <li>• Data loaded from Fake Store API</li>
              <li>• Responsive layout with a soft palette</li>
              <li>• Built as a small course assignment</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
