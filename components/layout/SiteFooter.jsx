export default function AboutPage() {
    return (
      <main
        className="flex-1"
        style={{ backgroundColor: "var(--fs-bg)", color: "var(--fs-text)" }}
      >
        <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
          <div className="max-w-2xl space-y-4">
            <h1
              className="text-2xl font-semibold md:text-3xl"
              style={{ color: "var(--fs-primary-dark)" }}
            >
              About NextStore
            </h1>
  
            <p
              className="text-sm md:text-base"
              style={{ color: "var(--fs-text-muted)" }}
            >
              NextStore is a small demo shop that uses the Fake Store API to show
              realistic product data in a simple layout. It is designed to look
              and feel like a real storefront while staying lightweight and easy
              to explore.
            </p>
  
            <p
              className="text-sm md:text-base"
              style={{ color: "var(--fs-text-muted)" }}
            >
              The project focuses on clean styling, smooth navigation, and a
              consistent color palette. It was put together for a coursework
              assignment and serves as a practical example of how to structure a
              basic e-commerce interface.
            </p>
  
            <p
              className="text-sm md:text-base"
              style={{ color: "var(--fs-text-muted)" }}
            >
              Behind the scenes, it runs on Next.js App Router with dynamic
              product pages, server-side data fetching, and Tailwind CSS for fast
              styling.
            </p>
          </div>
        </section>
      </main>
    );
  }
  