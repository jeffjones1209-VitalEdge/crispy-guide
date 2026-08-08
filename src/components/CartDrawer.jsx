import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const RESEARCHER_EMAIL_KEY = 'vitaledge_researcher_email';

export default function CartDrawer({ open, onClose }) {
  const { items, updateQuantity, removeItem, subtotal, total, discountAmount } = useCart();

  // Research gate state
  const [researcherEmail, setResearcherEmail] = useState('');
  const [researchConfirmed, setResearchConfirmed] = useState(false);

  // Pre-fill email from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(RESEARCHER_EMAIL_KEY);
    if (saved) setResearcherEmail(saved);
  }, []);

  const handleBuyNow = (item) => {
    window.open(item.stripeUrl + '?quantity=' + item.quantity, '_blank', 'noopener,noreferrer');
  };

  const handleCheckoutAll = () => {
    if (items.length === 0) return;
    // Save email for pre-fill next time
    if (researcherEmail) {
      localStorage.setItem(RESEARCHER_EMAIL_KEY, researcherEmail);
    }
    items.forEach(item => {
      window.open(item.stripeUrl + '?quantity=' + item.quantity, '_blank', 'noopener,noreferrer');
    });
  };

  const canCheckout = researcherEmail.trim() !== '' && researchConfirmed;

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

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🛒</div>
                <p className="text-gray-500">Your cart is empty</p>
                <p className="text-xs text-gray-400 mt-1">Add products from the catalog</p>
              </div>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.size}</p>
                    <p className="text-sm font-bold text-brand-600 mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-sm hover:bg-gray-300 transition-colors"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-sm hover:bg-gray-300 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-red-400 hover:text-red-600 transition-colors"
                    >
                      ✕
                    </button>
                    <button
                      onClick={() => handleBuyNow(item)}
                      className="text-xs bg-brand-500 text-white px-3 py-1.5 rounded-lg hover:bg-brand-600 transition-colors"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Research Gate */}
          {items.length > 0 && (
            <div className="border-t border-gray-100 px-6 py-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-green-600">Discount</span>
                  <span className="text-green-600">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold border-t border-gray-100 pt-3">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {/* Research Gate — subtle bordered section above checkout */}
              <div className="border border-amber-200 bg-amber-50/50 rounded-xl p-4 space-y-3">
                <p className="text-xs font-medium text-amber-800">
                  🔬 Research Verification Required
                </p>

                <div>
                  <label htmlFor="researchEmail" className="block text-xs font-medium text-gray-700 mb-1">
                    Research Email
                  </label>
                  <input
                    type="email"
                    id="researchEmail"
                    value={researcherEmail}
                    onChange={(e) => setResearcherEmail(e.target.value)}
                    placeholder="researcher@institution.edu"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  />
                </div>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={researchConfirmed}
                    onChange={(e) => setResearchConfirmed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 accent-brand-600"
                  />
                  <span className="text-xs text-gray-700 leading-relaxed">
                    I confirm I am a researcher purchasing for laboratory research purposes only. These products are not for human consumption.
                  </span>
                </label>
              </div>

              <p className="text-xs text-gray-400 text-center">
                By proceeding, you acknowledge all products are for research use only.
              </p>

              <button
                onClick={handleCheckoutAll}
                disabled={!canCheckout}
                className={`w-full py-3 rounded-xl text-white font-semibold transition-all ${
                  canCheckout
                    ? 'bg-gradient-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600 shadow-sm cursor-pointer'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Checkout on Stripe →
              </button>
              <p className="text-xs text-gray-400 text-center">
                Secure payment via Stripe. Shipping calculated at checkout.
              </p>
              {items.some(i => i.quantity > 1) && (
                <p className="text-xs text-amber-600 text-center">
                  ⚠️ Adjust quantity in Stripe checkout for items with multiple units.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
