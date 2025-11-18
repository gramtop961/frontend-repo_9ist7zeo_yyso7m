import { ShoppingCart, Leaf, Search } from "lucide-react";

export default function Header({ cartCount, query, setQuery, onOpenCart }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
        <div className="flex items-center gap-2 text-emerald-700 font-semibold">
          <Leaf className="w-6 h-6" />
          <span className="text-lg">Bloom Boutique</span>
        </div>

        <div className="flex-1 max-w-xl mx-auto hidden md:block">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search roses, bouquets, plants..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>
        </div>

        <button
          onClick={onOpenCart}
          className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full px-2 py-0.5 shadow">{cartCount}</span>
          )}
        </button>
      </div>

      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search roses, bouquets, plants..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          />
        </div>
      </div>
    </header>
  );
}
