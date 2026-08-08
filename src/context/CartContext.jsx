import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext();
const CART_KEY = 'vitaledge_cart';

// ── Product Catalog ──────────────────────────────────────────────
const PRODUCTS = [
  // ── GLP-1 families (abbreviated names, real name in SVG only) ──
  {
    id: 'sema', name: 'SEMA', displayName: 'Semaglutide', category: 'Metabolic', isGLP1: true, inStock: true,
    variants: [
      { mg: 5,  prices: { single: 89,  threePack: 214,  tenKit: 668  } },
      { mg: 10, prices: { single: 189, threePack: 454,  tenKit: 1418 } },
      { mg: 15, prices: { single: 225, threePack: 540,  tenKit: 1688 } },
      { mg: 20, prices: { single: 249, threePack: 598,  tenKit: 1868 } },
      { mg: 30, prices: { single: 310, threePack: 744,  tenKit: 2325 } },
    ]
  },
  {
    id: 'tzp', name: 'TZP', displayName: 'Tirzepatide', category: 'Metabolic', isGLP1: true, inStock: true,
    variants: [
      { mg: 5,  prices: { single: 98,  threePack: 235,  tenKit: 735  } },
      { mg: 10, prices: { single: 310, threePack: 744,  tenKit: 2325 } },
      { mg: 15, prices: { single: 225, threePack: 540,  tenKit: 1688 } },
      { mg: 20, prices: { single: 265, threePack: 636,  tenKit: 1988 } },
      { mg: 30, prices: { single: 310, threePack: 744,  tenKit: 2325 } },
      { mg: 40, prices: { single: 385, threePack: 924,  tenKit: 2888 } },
    ]
  },
  {
    id: 'rta', name: 'RTA', displayName: 'Retatrutide', category: 'Metabolic', isGLP1: true, inStock: true,
    variants: [
      { mg: 5,  prices: { single: 225, threePack: 540,  tenKit: 1688 } },
      { mg: 10, prices: { single: 280, threePack: 672,  tenKit: 2100 } },
      { mg: 15, prices: { single: 365, threePack: 876,  tenKit: 2738 } },
      { mg: 20, prices: { single: 445, threePack: 1068, tenKit: 3338 } },
      { mg: 30, prices: { single: 525, threePack: 1260, tenKit: 3938 } },
    ]
  },
  // ── Safe peptides (real names OK) ──────────────────────────────
  {
    id: 'bpc-157-5mg', name: 'BPC-157', category: 'Recovery', isGLP1: false, inStock: true,
    variants: [{ mg: 5, prices: { single: 55, threePack: 132, tenKit: 413 } }]
  },
  {
    id: 'bpc-157-10mg', name: 'BPC-157', category: 'Recovery', isGLP1: false, inStock: true,
    variants: [{ mg: 10, prices: { single: 105, threePack: 252, tenKit: 788 } }]
  },
  {
    id: 'tb-500-5mg', name: 'TB-500', category: 'Recovery', isGLP1: false, inStock: true,
    variants: [{ mg: 5, prices: { single: 60, threePack: 144, tenKit: 450 } }]
  },
  {
    id: 'tb-500-10mg', name: 'TB-500', category: 'Recovery', isGLP1: false, inStock: true,
    variants: [{ mg: 10, prices: { single: 125, threePack: 300, tenKit: 938 } }]
  },
  {
    id: 'ghk-cu-50mg', name: 'GHK-Cu', category: 'Cosmetic', isGLP1: false, inStock: true,
    variants: [{ mg: 50, prices: { single: 80, threePack: 192, tenKit: 600 } }]
  },
  {
    id: 'nad-plus-500mg', name: 'NAD+', category: 'Longevity', isGLP1: false, inStock: true,
    variants: [{ mg: 500, prices: { single: 195, threePack: 468, tenKit: 1463 } }]
  },
  {
    id: 'selank-10mg', name: 'Selank', category: 'Wellness', isGLP1: false, inStock: true,
    variants: [{ mg: 10, prices: { single: 70, threePack: 168, tenKit: 525 } }]
  },
  {
    id: 'semax-10mg', name: 'Semax', category: 'Wellness', isGLP1: false, inStock: true,
    variants: [{ mg: 10, prices: { single: 70, threePack: 168, tenKit: 525 } }]
  },
];

// Tier display helpers
const TIER_LABELS = { single: 'Single', threePack: '3-Pack (−20%)', tenKit: '10-Kit (−25%)' };

// ── Exports ──────────────────────────────────────────────────────
export function getProducts() { return PRODUCTS; }
export { TIER_LABELS };

export function getDiscount() {
  try { return JSON.parse(localStorage.getItem('vitaledge_discount') || '{}'); }
  catch { return { siteWide: 0, products: {} }; }
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

// ── Shipping calculator ──────────────────────────────────────────
export function calcShipping(vialCount, subtotal) {
  if (subtotal >= 500) return 0;
  if (vialCount <= 10) return 25;
  return 40;
}

// ── Provider ─────────────────────────────────────────────────────
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [discount, setDiscountState] = useState({ siteWide: 0, products: {} });

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
      setItems(saved);
    } catch { setItems([]); }
    setDiscountState(getDiscount());
  }, []);

  const persist = useCallback((newItems) => {
    setItems(newItems);
    localStorage.setItem(CART_KEY, JSON.stringify(newItems));
  }, []);

  // addItem(productId, mg, tier) — tier is 'single'|'threePack'|'tenKit'
  const addItem = useCallback((productId, mg, tier = 'single') => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const variant = product.variants.find(v => v.mg === mg);
    if (!variant) return;
    const price = variant.prices[tier];
    const cartId = `${productId}-${mg}-${tier}`;

    setItems(prev => {
      const existing = prev.find(i => i.cartId === cartId);
      let updated;
      if (existing) {
        updated = prev.map(i => i.cartId === cartId ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
        updated = [...prev, {
          cartId,
          productId,
          name: product.name,
          displayName: product.displayName || null,
          mg,
          tier,
          tierLabel: TIER_LABELS[tier],
          price,
          quantity: 1,
          stripeUrl: 'https://buy.stripe.com/PLACEHOLDER',
          isGLP1: product.isGLP1,
          size: `${mg}mg`,
        }];
      }
      localStorage.setItem(CART_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeItem = useCallback((cartId) => {
    setItems(prev => {
      const updated = prev.filter(i => i.cartId !== cartId);
      localStorage.setItem(CART_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateQuantity = useCallback((cartId, qty) => {
    if (qty < 1) { removeItem(cartId); return; }
    setItems(prev => {
      const updated = prev.map(i => i.cartId === cartId ? { ...i, quantity: qty } : i);
      localStorage.setItem(CART_KEY, JSON.stringify(updated));
      return updated;
    });
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
    localStorage.removeItem(CART_KEY);
  }, []);

  // Computed values
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const vialCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = calcShipping(vialCount, subtotal);
  const total = subtotal + shipping;

  return (
    <CartContext.Provider value={{
      items, itemCount, vialCount, subtotal, shipping, total,
      addItem, removeItem, updateQuantity, clearCart,
      discount, setDiscountState,
    }}>
      {children}
    </CartContext.Provider>
  );
}
