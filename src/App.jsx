import { useEffect, useMemo, useRef, useState } from "react";
import ChenHeader from "./components/ChenHeader";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import { HowItsMade, About, Reviews, FAQ } from "./components/Sections";
import ProductCard from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const gridRef = useRef(null);

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
      const delivery_fee = subtotal > 100 ? 0 : 6.99;
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
          address_line1: "123 Paper Garden Way",
          city: "Bloomtown",
          state: "CA",
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
    <div className="min-h-screen bg-gradient-to-br from-[#fff] via-[#f7f6f9] to-[#fff]">
      <ChenHeader cartCount={cart.length} query={query} setQuery={setQuery} onOpenCart={() => setCartOpen(true)} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Hero onPrimary={() => gridRef.current?.scrollIntoView({ behavior: 'smooth' })} onSecondary={() => window.location.hash = '#contact'} />

        <Collections onSelect={(cat) => setQuery(cat)} />

        <section className="mt-10" ref={gridRef}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-semibold text-[#222222]">Bestsellers</h2>
            {loading && <span className="text-sm text-[#4b4b4b]">Loading...</span>}
            {!loading && error && <span className="text-sm text-[#ff4d4f]">{error}</span>}
          </div>

          {filtered.length === 0 && !loading ? (
            <div className="text-center py-16 text-[#4b4b4b]">No products found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={addToCart} />
              ))}
            </div>
          )}
        </section>

        <HowItsMade />
        <About />
        <Reviews />
        <FAQ />
      </main>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onRemove={removeFromCart} onCheckout={checkout} />

      <Footer />
    </div>
  );
}
