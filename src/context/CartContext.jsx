import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getAllProducts } from '../data/products';

const CartContext = createContext();
const CART_KEY = 'vitaledge_cart';

// ── Shipping calculator ──────────────────────────────────────────
export function calcShipping(vialCount, subtotal) {
  if (subtotal >= 500) return 0;
  if (vialCount <= 10) return 25;
  return 40;
}

// ── Exports ──────────────────────────────────────────────────────
export function getProducts() { return getAllProducts(); }

export function getDiscount() {
  try { return JSON.parse(localStorage.getItem('vitaledge_discount') || '{}'); }
  catch { return { siteWide: 0, products: {} }; }
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
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

  // addItem(productId, mg, tier) — tier defaults to 'single' for compatibility
  const addItem = useCallback((productId, mg, tier = 'single') => {
    const products = getAllProducts();
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const variant = product.variants.find(v => v.mg === mg);
    if (!variant) return;
    const price = variant.price || variant.prices?.[tier] || 0;
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
          description: product.description || null,
          mg,
          tier,
          price,
          priceId: variant.priceId || '',
          stripeUrl: variant.stripeUrl || '',
          quantity: 1,
          isGLP1: product.isGLP1 || false,
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