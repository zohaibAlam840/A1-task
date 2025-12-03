import fallbackProducts from "@/data/products.json";

const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts() {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Failed to fetch products:", res.status, res.statusText);
      return fallbackProducts; // 👈 use local data
    }

    return res.json();
  } catch (err) {
    console.error("Error fetching products", err);
    return fallbackProducts; // 👈 use local data
  }
}

export async function fetchProductById(id: string | number) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Failed to fetch product:", res.status, res.statusText);
      // fallback: find in local JSON
      return fallbackProducts.find((p) => p.id === Number(id)) ?? null;
    }

    return res.json();
  } catch (err) {
    console.error("Error fetching product", err);
    return fallbackProducts.find((p) => p.id === Number(id)) ?? null;
  }
}
