import { ShoppingBag } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-white/80 backdrop-blur border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="aspect-square w-full overflow-hidden bg-slate-100">
        {product.image_url ? (
          <img src={product.image_url} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">No image</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-slate-800">{product.title}</h3>
            <p className="text-sm text-slate-500 line-clamp-2">{product.description}</p>
          </div>
          <span className="font-semibold text-emerald-700">${product.price.toFixed(2)}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700">{product.category}</span>
          <button onClick={() => onAdd(product)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition">
            <ShoppingBag className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
