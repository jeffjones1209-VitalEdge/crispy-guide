import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext();

const CART_KEY = 'vitaledge_cart';

const PRODUCTS = [
  // SAFE — real names
  { id: 'bpc-157-5mg', name: 'BPC-157', size: '5 mg', price: 50.00, priceId: 'price_1TjVWSDQ2cuOrZVIhrMqIYbF', stripeUrl: 'https://buy.stripe.com/8x214n5t22Vn00497f7Re00', category: 'Recovery', inStock: true, isGLP1: false },
  { id: 'bpc-157-10mg', name: 'BPC-157', size: '10 mg', price: 100.00, priceId: 'price_1TjVWSDQ2cuOrZVIJ5KKSwTk', stripeUrl: 'https://buy.stripe.com/8x2cN5aNmfI94gk3MV7Re01', category: 'Recovery', inStock: true, isGLP1: false },
  { id: 'tb-500-5mg', name: 'TB-500', size: '5 mg', price: 55.00, priceId: '', stripeUrl: '', category: 'Recovery', inStock: true, isGLP1: false },
  { id: 'tb-500-10mg', name: 'TB-500', size: '10 mg', price: 105.00, priceId: '', stripeUrl: '', category: 'Recovery', inStock: true, isGLP1: false },
  { id: 'ghk-cu-50mg', name: 'GHK-Cu', size: '50 mg', price: 80.00, priceId: 'price_1TjVWTDQ2cuOrZVI50ZVkzmf', stripeUrl: 'https://buy.stripe.com/fZu14ndZy9jL9AE6Z77Re05', category: 'Cosmetic', inStock: true, isGLP1: false },
  { id: 'nad-plus-500mg', name: 'NAD+', size: '500 mg', price: 200.00, priceId: 'price_1TjVWTDQ2cuOrZVIuLKerW7E', stripeUrl: 'https://buy.stripe.com/bJe28r8FeeE58wA3MV7Re04', category: 'Longevity', inStock: true, isGLP1: false },
  { id: 'selank-10mg', name: 'Selank', size: '10 mg', price: 65.00, priceId: '', stripeUrl: '', category: 'Wellness', inStock: true, isGLP1: false },
  { id: 'semax-10mg', name: 'Semax', size: '10 mg', price: 65.00, priceId: '', stripeUrl: '', category: 'Wellness', inStock: true, isGLP1: false },
  // GLP-1s — abbreviated names, real name in displayName for image trick
  { id: 'sema-10mg', name: 'SEMA', displayName: 'Semaglutide', size: '10 mg', price: 179.00, priceId: 'price_1TjVWSDQ2cuOrZVIYmOtZvEB', stripeUrl: 'https://buy.stripe.com/eVqcN59JicvX0045V37Re02', category: 'Metabolic', inStock: true, isGLP1: true },
  { id: 'tzp-10mg', name: 'TZP', displayName: 'Tirzepatide', size: '10 mg', price: 299.00, priceId: 'price_1TjVWSDQ2cuOrZVInxBHaPcq', stripeUrl: 'https://buy.stripe.com/dRm14n9Ji8fH8wAbfn7Re03', category: 'Metabolic', inStock: true, isGLP1: true },
];

export function getProducts(includeAdminOverrides = true) {
  let prods = [...PRODUCTS];
  if (includeAdminOverrides) {
    try {
      const adminProds = JSON.parse(localStorage.getItem('vitaledge_admin_products') || '[]');
      const adminRemoved = JSON.parse(localStorage.getItem('vitaledge_removed_products') || '[]');

      prods = prods.filter(p => !adminRemoved.includes(p.id));

      adminProds.forEach(ap => {
        if (!prods.find(p => p.id === ap.id)) {
          prods.push(ap);
        }
      });

      const priceOverrides = JSON.parse(localStorage.getItem('vitaledge_pricing') || '{}');
      prods = prods.map(p => {
        const override = priceOverrides[p.id];
        if (override?.price) {
          return { ...p, price: override.price };
        }
        return p;
      });
    } catch (e) { /* ignore */ }
  }
  return prods;
}

export function getDiscount() {
  try {
    return JSON.parse(localStorage.getItem('vitaledge_discount') || '{}');
  } catch { return { siteWide: 0, products: {} }; }
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [discount, setDiscountState] = useState({ siteWide: 0, products: {} });
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
      setItems(saved);
    } catch { setItems([]); }
    setDiscountState(getDiscount());
    setProductsList(getProducts());
  }, []);

  const saveCart = useCallback((newItems) => {
    setItems(newItems);
    localStorage.setItem(CART_KEY, JSON.stringify(newItems));
  }, []);

  const addItem = useCallback((product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        const updated = prev.map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
        localStorage.setItem(CART_KEY, JSON.stringify(updated));
        return updated;
      }
      const updated = [...prev, { ...product, quantity }];
      localStorage.setItem(CART_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems(prev => {
      const updated = prev.filter(i => i.id !== id);
      localStorage.setItem(CART_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateQuantity = useCallback((id, qty) => {
    if (qty < 1) { removeItem(id); return; }
    setItems(prev => {
      const updated = prev.map(i => i.id === id ? { ...i, quantity: qty } : i);
      localStorage.setItem(CART_KEY, JSON.stringify(updated));
      return updated;
    });
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
    localStorage.removeItem(CART_KEY);
  }, []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const siteDiscount = discount.siteWide || 0;
  const discountAmount = siteDiscount > 0 ? subtotal * (siteDiscount / 100) : 0;
  const total = subtotal - discountAmount;

  return (
    <CartContext.Provider value={{
      items, itemCount, subtotal, total, discountAmount,
      addItem, removeItem, updateQuantity, clearCart,
      discount, productsList, setDiscountState,
    }}>
      {children}
    </CartContext.Provider>
  );
}
