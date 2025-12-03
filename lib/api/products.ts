// const BASE_URL = "https://fakestoreapi.com";

// export async function fetchProducts() {
//   const res = await fetch(`${BASE_URL}/products`, {
//     next: { revalidate: 60 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   return res.json();
// }

// export async function fetchProductById(id) {
//   const res = await fetch(`${BASE_URL}/products/${id}`, {
//     next: { revalidate: 60 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch product");
//   }

//   return res.json();
// }


const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts() {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Failed to fetch products:", res.status, res.statusText);
      // Return empty array instead of throwing so build doesn't crash
      return [];
    }

    return res.json();
  } catch (err) {
    console.error("Error fetching products", err);
    // Again, return [] on error
    return [];
  }
}

export async function fetchProductById(id: string | number) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Failed to fetch product:", res.status, res.statusText);
      // Return null instead of throwing
      return null;
    }

    return res.json();
  } catch (err) {
    console.error("Error fetching product", err);
    return null;
  }
}
