import { X, Trash2 } from "lucide-react";

export default function CartDrawer({ open, onClose, cart, onRemove, onCheckout }) {
  return (
    <div className={`fixed inset-0 z-30 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      <aside className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {cart.length === 0 && (
            <p className="text-slate-500">Your cart is empty.</p>
          )}

          {cart.map((item, idx) => (
            <div key={idx} className="flex gap-3 items-center border rounded-xl p-3">
              <div className="w-20 h-20 bg-slate-100 rounded-lg overflow-hidden">
                {item.image_url ? (
                  <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                ) : null}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{item.title}</h3>
                  <span className="font-semibold text-emerald-700">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <p className="text-sm text-slate-500">Qty: {item.quantity}</p>
              </div>
              <button onClick={() => onRemove(item)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 border-t bg-slate-50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate-500">Subtotal</span>
            <span className="font-semibold">${cart.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            disabled={cart.length === 0}
            className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 disabled:opacity-50"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
