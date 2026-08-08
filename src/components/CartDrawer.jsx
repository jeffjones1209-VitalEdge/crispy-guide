import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const RESEARCHER_EMAIL_KEY = 'vitaledge_researcher_email';

export default function CartDrawer({ open, onClose }) {
  const { items, updateQuantity, removeItem, subtotal, shipping, total, vialCount } = useCart();

  // Research gate state
  const [researchEmail, setResearchEmail] = useState('');
  const [researchConfirmed, setResearchConfirmed] = useState(false);
  const [showResearchGate, setShowResearchGate] = useState(false);

  // Pre-fill email from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(RESEARCHER_EMAIL_KEY);
    if (saved) setResearchEmail(saved);
  }, []);

  const handleCheckoutAll = () => {
    if (items.length === 0) return;
    if (researchEmail) {
      localStorage.setItem(RESEARCHER_EMAIL_KEY, researchEmail);
    }
    items.forEach(item => {
      window.open(item.stripeUrl + '?quantity=' + item.quantity, '_blank', 'noopener,noreferrer');
    });
  };

  const handleResearchSubmit = () => {
    if (!researchEmail || !researchConfirmed) return;
    handleCheckoutAll();
    setShowResearchGate(false);
    setResearchEmail('');
    setResearchConfirmed(false);
  };

  const canCheckout = researchEmail.trim() !== '' && researchConfirmed;

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40 transition-opacity" onClick={onClose} />
      )}

      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              Shopping Cart ({items.length})
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Research Gate Overlay */}
          {showResearchGate && (
            <div className="absolute inset-0 z-10 bg-white flex flex-col">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Research Verification</h3>
                <button onClick={() => setShowResearchGate(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center px-6 py-8 space-y-6">
                <div className="text-center">
                  <span className="text-4xl">🔬</span>
                  <h4 className="text-xl font-bold text-gray-900 mt-3">Research Use Confirmation</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    VItalEdge products are exclusively for laboratory research purposes. Please confirm your research intent to proceed.
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 leading-relaxed">
                  <strong>⚠️ Important:</strong> All products on this site are for research purposes only and are not intended for human consumption. By proceeding, you confirm that you are acquiring these products for legitimate laboratory research in compliance with all applicable laws.
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="researchEmail" className="block text-sm font-medium text-gray-700 mb-1">Research Email</label>
                    <input type="email" id="researchEmail" required value={researchEmail}
                      onChange={(e) => setResearchEmail(e.target.value)}
                      placeholder="researcher@institution.edu"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={researchConfirmed}
                      onChange={(e) => setResearchConfirmed(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 accent-brand-600"
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      I confirm that I am acquiring these products for <strong>laboratory research purposes only</strong> and not for human consumption. I understand these are research chemicals intended for in-vitro testing and laboratory use.
                    </span>
                  </label>
                </div>

                <button onClick={handleResearchSubmit} disabled={!canCheckout}
                  className={`w-full py-3 rounded-xl text-white font-semibold transition-all ${
                    canCheckout
                      ? 'bg-gradient-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600 shadow-sm cursor-pointer'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  Confirm & Proceed to Stripe Checkout →
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Your email will only be used for order confirmation and research compliance records.
                </p>
              </div>
            </div>
          )}

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🛒</div>
                <p className="text-gray-500">Your cart is empty</p>
                <p className="text-xs text-gray-400 mt-1">Add products from the catalog</p>
              </div>
            ) : (
              items.map(item => (
                <div key={item.cartId} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm truncate">
                      {item.name}
                      {item.displayName && (
                        <span className="text-xs text-gray-400 ml-1">({item.displayName})</span>
                      )}
                    </h3>
                    <p className="text-xs text-gray-500">{item.mg}mg · {item.tierLabel}</p>
                    <p className="text-sm font-bold text-brand-600 mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    {item.isGLP1 && (
                      <span className="inline-block mt-1 px-1.5 py-0.5 bg-amber-50 text-amber-700 text-[10px] rounded-full border border-amber-200">
                        🔬 Research Use Only
                      </span>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs hover:bg-gray-300 transition-colors"
                      >−</button>
                      <span className="text-xs font-medium w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs hover:bg-gray-300 transition-colors"
                      >+</button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.cartId)}
                    className="text-xs text-red-400 hover:text-red-600 transition-colors self-start mt-1"
                  >✕</button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && !showResearchGate && (
            <div className="border-t border-gray-100 px-6 py-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>

              {/* ── Shipping line item ── */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Estimated Shipping
                  <button onClick={() => onClose()} className="ml-1 text-[10px] text-brand-500 underline hover:text-brand-600">
                    (details)
                  </button>
                </span>
                <span className={`font-medium ${shipping === 0 ? 'text-green-600' : 'text-gray-700'}`}>
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              {shipping > 0 && subtotal < 500 && (
                <p className="text-[10px] text-gray-400 text-right">
                  ${(500 - subtotal).toFixed(2)} away from free shipping
                </p>
              )}

              <div className="flex justify-between text-base font-bold border-t border-gray-100 pt-2">
                <span>Estimated Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-2.5 text-[10px] text-amber-700 leading-tight">
                🔬 <strong>Research use only.</strong> By proceeding to checkout, you confirm these products are for laboratory research purposes only, not for human consumption.
              </div>

              <button
                onClick={() => setShowResearchGate(true)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-500 to-ocean-500 text-white font-semibold hover:from-brand-600 hover:to-ocean-600 transition-all shadow-sm"
              >
                Proceed to Checkout →
              </button>
              <p className="text-xs text-gray-400 text-center">
                Secure payment via Stripe. Shipping calculated at checkout.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
