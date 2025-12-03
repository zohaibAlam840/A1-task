// app/about/page.tsx
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
              NextStore is a simple online shop interface that uses the Fake Store
              API to display sample products.
            </p>
  
            <p
              className="text-sm md:text-base"
              style={{ color: "var(--fs-text-muted)" }}
            >
              The goal of this project is to keep the layout clean and easy to
              follow, with a focus on clear product information and a calm color
              palette.
            </p>
  
            <p
              className="text-sm md:text-base"
              style={{ color: "var(--fs-text-muted)" }}
            >
              It is built with Next.js and Tailwind CSS, and is intended as a
              small demo of how a basic storefront can be put together using real
              API data.
            </p>
          </div>
        </section>
      </main>
    );
  }
  