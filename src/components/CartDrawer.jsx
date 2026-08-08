import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, updateQuantity, removeItem, subtotal, total, discountAmount } = useCart();

  // Research gate state
  const [researchEmail, setResearchEmail] = useState('');
  const [researchConfirmed, setResearchConfirmed] = useState(false);
  const [showResearchGate, setShowResearchGate] = useState(false);

  const handleBuyNow = (item) => {
    // Stripe payment link is for 1 unit — customer adjusts qty at Stripe checkout
    window.open(item.stripeUrl + '?quantity=' + item.quantity, '_blank', 'noopener,noreferrer');
  };

  const handleCheckoutAll = () => {
    if (items.length === 0) return;
    // Stripe handles quantity at checkout. Open each unique item's link.
    items.forEach(item => {
      window.open(item.stripeUrl + '?quantity=' + item.quantity, '_blank', 'noopener,noreferrer');
    });
  };

  const handleProceedToCheckout = () => {
    // Show research gate instead of going straight to Stripe
    setShowResearchGate(true);
  };

  const handleResearchSubmit = () => {
    if (!researchEmail || !researchConfirmed) return;
    // Proceed to Stripe checkout
    handleCheckoutAll();
    // Reset gate state
    setShowResearchGate(false);
    setResearchEmail('');
    setResearchConfirmed(false);
  };

  const hasGLP1Items = items.some(i => i.isGLP1);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40 transition-opacity" onClick={onClose} />
      )}

      {/* Drawer */}
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
                <button
                  onClick={() => setShowResearchGate(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
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
                    <label htmlFor="researchEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Research Email
                    </label>
                    <input
                      type="email"
                      id="researchEmail"
                      required
                      value={researchEmail}
                      onChange={(e) => setResearchEmail(e.target.value)}
                      placeholder="researcher@institution.edu"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={researchConfirmed}
                      onChange={(e) => setResearchConfirmed(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 accent-brand-600"
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      I confirm that I am acquiring these products for <strong>laboratory research purposes only</strong> and not for human consumption. I understand these are research chemicals intended for in-vitro testing and laboratory use.
                    </span>
                  </label>
                </div>

                <button
                  onClick={handleResearchSubmit}
                  disabled={!researchEmail || !researchConfirmed}
                  className={`w-full py-3 rounded-xl text-white font-semibold transition-all ${
                    researchEmail && researchConfirmed
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
                    <h3 className="font-semibold text-gray-900">
                      {item.name}
                      {item.displayName && (
                        <span className="text-xs text-gray-400 ml-1">({item.displayName})</span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500">{item.size}</p>
                    <p className="text-sm font-bold text-brand-600 mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    {/* Research badge for GLP-1 products */}
                    {item.isGLP1 && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-amber-50 text-amber-700 text-[10px] rounded-full border border-amber-200">
                        🔬 Research Use Only
                      </span>
                    )}
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

          {/* Footer */}
          {items.length > 0 && !showResearchGate && (
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

              {/* Research disclaimer before checkout */}
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 text-[10px] text-amber-700 leading-tight">
                🔬 <strong>Research use only.</strong> By proceeding to checkout, you confirm these products are for laboratory research purposes only, not for human consumption.
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-500 to-ocean-500 text-white font-semibold hover:from-brand-600 hover:to-ocean-600 transition-all shadow-sm"
              >
                Proceed to Checkout →
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
