import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/api/products`);
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (e) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return products;
    const q = query.toLowerCase();
    return products.filter((p) =>
      [p.title, p.description, p.category, ...(p.tags || [])]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [products, query]);

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(item) {
    setCart((prev) => prev.filter((p) => p.id !== item.id));
  }

  async function checkout() {
    try {
      const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
      const delivery_fee = subtotal > 100 ? 0 : 9.99;
      const total = subtotal + delivery_fee;
      const payload = {
        items: cart.map((c) => ({
          product_id: c.id,
          title: c.title,
          price: c.price,
          quantity: c.quantity,
          image_url: c.image_url || null,
        })),
        customer: {
          name: "Guest",
          email: "guest@example.com",
          address_line1: "123 Flower St",
          city: "Bloomtown",
          state: "FL",
          postal_code: "00000",
        },
        notes: "Web checkout",
        subtotal,
        delivery_fee,
        total,
      };
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setCart([]);
        alert(`Order placed! ID: ${data.id}`);
        setCartOpen(false);
      } else {
        alert(`Checkout failed: ${data.detail || "Unknown error"}`);
      }
    } catch (e) {
      alert("Checkout failed. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-rose-50">
      <Header cartCount={cart.length} query={query} setQuery={setQuery} onOpenCart={() => setCartOpen(true)} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="bg-gradient-to-r from-emerald-600 to-rose-500 text-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Fresh flowers, delivered with love</h1>
          <p className="mt-3 text-white/90 max-w-2xl">Discover hand-crafted bouquets, lush houseplants, and thoughtful gifts for every occasion. Same‑day delivery available.</p>
        </section>

        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-slate-800">Featured Products</h2>
            {loading && <span className="text-sm text-slate-500">Loading...</span>}
            {!loading && error && <span className="text-sm text-rose-600">{error}</span>}
          </div>

          {filtered.length === 0 && !loading ? (
            <div className="text-center py-16 text-slate-500">No products found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={addToCart} />
              ))}
            </div>
          )}
        </section>
      </main>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onRemove={removeFromCart} onCheckout={checkout} />

      <footer className="mt-16 py-10 text-center text-slate-500">
        © {new Date().getFullYear()} Bloom Boutique. All rights reserved.
      </footer>
    </div>
  );
}
