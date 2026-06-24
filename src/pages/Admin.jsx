import { useState, useEffect } from 'react';
import { getProducts } from '../context/CartContext';

const ADMIN_PASSWORD = 'vitaledge2024';
const STORAGE_PRODUCTS = 'vitaledge_admin_products';
const STORAGE_REMOVED = 'vitaledge_removed_products';
const STORAGE_PRICING = 'vitaledge_pricing';
const STORAGE_DISCOUNT = 'vitaledge_discount';

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [tab, setTab] = useState('products');
  const [saved, setSaved] = useState('');
  const [baseProducts, setBaseProducts] = useState([]);
  const [customProducts, setCustomProducts] = useState([]);
  const [removedIds, setRemovedIds] = useState([]);
  const [priceOverrides, setPriceOverrides] = useState({});
  const [discount, setDiscount] = useState({ siteWide: 0, products: {} });

  // New product form
  const [newProd, setNewProd] = useState({ id: '', name: '', size: '', price: '', category: 'Recovery', stripeUrl: '', inStock: true });

  useEffect(() => {
    if (!authed) return;
    setBaseProducts(getProducts(false)); // no overrides
    setCustomProducts(JSON.parse(localStorage.getItem(STORAGE_PRODUCTS) || '[]'));
    setRemovedIds(JSON.parse(localStorage.getItem(STORAGE_REMOVED) || '[]'));
    setPriceOverrides(JSON.parse(localStorage.getItem(STORAGE_PRICING) || '{}'));
    setDiscount(JSON.parse(localStorage.getItem(STORAGE_DISCOUNT) || '{"siteWide":0,"products":{}}'));
  }, [authed]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) { setAuthed(true); setError(''); }
    else setError('Invalid password');
  };

  const flashSaved = (msg) => { setSaved(msg); setTimeout(() => setSaved(''), 2000); };

  const saveAll = () => {
    localStorage.setItem(STORAGE_PRODUCTS, JSON.stringify(customProducts));
    localStorage.setItem(STORAGE_REMOVED, JSON.stringify(removedIds));
    localStorage.setItem(STORAGE_PRICING, JSON.stringify(priceOverrides));
    localStorage.setItem(STORAGE_DISCOUNT, JSON.stringify(discount));
    flashSaved('All changes saved!');
  };

  // --- Product Management ---
  const addCustomProduct = () => {
    if (!newProd.id || !newProd.name || !newProd.price) return;
    const product = {
      id: newProd.id,
      name: newProd.name,
      size: newProd.size || 'Standard',
      price: parseFloat(newProd.price),
      category: newProd.category,
      stripeUrl: newProd.stripeUrl || '',
      inStock: newProd.inStock,
    };
    setCustomProducts(prev => [...prev, product]);
    setNewProd({ id: '', name: '', size: '', price: '', category: 'Recovery', stripeUrl: '', inStock: true });
    flashSaved(`${product.name} added! Save to persist.`);
  };

  const removeProduct = (id) => {
    setRemovedIds(prev => [...prev, id]);
    flashSaved('Product removed! Save to persist.');
  };

  const restoreProduct = (id) => {
    setRemovedIds(prev => prev.filter(i => i !== id));
    flashSaved('Product restored! Save to persist.');
  };

  const updatePriceOverride = (id, price) => {
    setPriceOverrides(prev => ({ ...prev, [id]: { price: parseFloat(price) || 0 } }));
  };

  const clearPriceOverride = (id) => {
    const copy = { ...priceOverrides };
    delete copy[id];
    setPriceOverrides(copy);
  };

  // Login page
  if (!authed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-400 to-ocean-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Authorized access only</p>
          </div>
          <div className="space-y-4">
            <input type="password" placeholder="Enter admin password" value={password}
              onChange={e => { setPassword(e.target.value); setError(''); }}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
              className="admin-input" autoFocus
            />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button onClick={handleLogin} className="btn-primary w-full py-3">Access Dashboard</button>
          </div>
        </div>
      </div>
    );
  }

  const allProducts = [...baseProducts.filter(p => !removedIds.includes(p.id)), ...customProducts];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold">VItalEdge Admin</h1>
              <p className="text-xs text-gray-400">Product & Discount Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {saved && <span className="text-xs text-green-400 font-medium">{saved}</span>}
            <button onClick={saveAll} className="text-sm bg-brand-500 text-white px-4 py-1.5 rounded-lg hover:bg-brand-600 transition-colors">
              💾 Save All
            </button>
            <button onClick={() => setAuthed(false)} className="text-sm text-gray-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex gap-2 mb-6">
          {[
            { id: 'products', label: '📦 Products' },
            { id: 'add', label: '➕ Add Product' },
            { id: 'discounts', label: '🏷️ Discounts' },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === t.id ? 'bg-brand-500 text-white shadow-sm' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}>{t.label}</button>
          ))}
        </div>
      </div>

      {/* Products Tab */}
      {tab === 'products' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Product Manager</h2>
                <p className="text-xs text-gray-500 mt-0.5">{allProducts.length} active products</p>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {allProducts.map(p => (
                <div key={p.id} className="px-6 py-4 hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{p.name}</h3>
                      <span className="text-xs text-gray-400">{p.size} · {p.category} · {p.id}</span>
                    </div>
                    <button onClick={() => removeProduct(p.id)}
                      className="text-xs text-red-500 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded transition-colors">
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Price:</span>
                      <span className="text-sm text-gray-400 line-through">${p.price.toFixed(2)}</span>
                      <span className="text-gray-400">→</span>
                      <input type="number" step="0.01" min="0"
                        value={priceOverrides[p.id]?.price ?? p.price}
                        onChange={e => updatePriceOverride(p.id, e.target.value)}
                        className="w-24 px-2 py-1 rounded border border-gray-200 text-sm text-right focus:ring-1 focus:ring-brand-400 outline-none"
                      />
                      {priceOverrides[p.id] && (
                        <button onClick={() => clearPriceOverride(p.id)} className="text-xs text-gray-400 hover:text-red-500">↺</button>
                      )}
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${p.inStock ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
                      {p.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  {p.stripeUrl && (
                    <p className="text-xs text-gray-400 mt-1 truncate">Stripe: {p.stripeUrl}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Add Product Tab */}
      {tab === 'add' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 max-w-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Product</h2>
            <div className="space-y-4">
              <div>
                <label className="label">Product ID (unique, e.g. "my-peptide-10mg")</label>
                <input type="text" value={newProd.id} onChange={e => setNewProd({...newProd, id: e.target.value})} className="input-field" placeholder="my-peptide-10mg" />
              </div>
              <div>
                <label className="label">Product Name</label>
                <input type="text" value={newProd.name} onChange={e => setNewProd({...newProd, name: e.target.value})} className="input-field" placeholder="My Peptide" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Size (e.g. "10 mg")</label>
                  <input type="text" value={newProd.size} onChange={e => setNewProd({...newProd, size: e.target.value})} className="input-field" placeholder="10 mg" />
                </div>
                <div>
                  <label className="label">Price ($)</label>
                  <input type="number" step="0.01" min="0" value={newProd.price} onChange={e => setNewProd({...newProd, price: e.target.value})} className="input-field" placeholder="49.99" />
                </div>
              </div>
              <div>
                <label className="label">Category</label>
                <select value={newProd.category} onChange={e => setNewProd({...newProd, category: e.target.value})} className="input-field">
                  {['Recovery', 'Metabolic', 'Growth Hormone', 'Cosmetic', 'Mitochondrial', 'Wellness', 'Longevity', 'Immune'].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">Stripe Payment Link URL</label>
                <input type="url" value={newProd.stripeUrl} onChange={e => setNewProd({...newProd, stripeUrl: e.target.value})} className="input-field" placeholder="https://buy.stripe.com/..." />
              </div>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" checked={newProd.inStock} onChange={e => setNewProd({...newProd, inStock: e.target.checked})} className="rounded" />
                In Stock
              </label>
              <button onClick={addCustomProduct} className="btn-primary w-full">Add Product</button>
            </div>
            {customProducts.length > 0 && (
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Custom Products Added:</h3>
                {customProducts.map(p => (
                  <div key={p.id} className="flex items-center justify-between text-sm text-gray-600 py-1">
                    <span>{p.name} ({p.size}) — ${p.price.toFixed(2)}</span>
                    <button onClick={() => {
                      setCustomProducts(prev => prev.filter(x => x.id !== p.id));
                      flashSaved('Custom product removed!');
                    }} className="text-red-400 hover:text-red-600 text-xs">Remove</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Discounts Tab */}
      {tab === 'discounts' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Site-Wide Discount</h2>
            <p className="text-xs text-gray-500 mb-4">Apply a % discount to ALL products</p>
            <div className="flex items-center gap-4">
              <input type="range" min="0" max="50" value={discount.siteWide || 0}
                onChange={e => setDiscount({...discount, siteWide: parseInt(e.target.value)})}
                className="w-48 accent-brand-500" />
              <span className="text-lg font-bold text-brand-600 min-w-[60px]">{discount.siteWide || 0}%</span>
              {discount.siteWide > 0 && (
                <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded-full border border-red-200">
                  ACTIVE — {discount.siteWide}% off everything
                </span>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-900">Per-Product Discounts</h2>
              <p className="text-xs text-gray-500 mt-0.5">Set individual % discounts</p>
            </div>
            <div className="divide-y divide-gray-100">
              {[...baseProducts.filter(p => !removedIds.includes(p.id)), ...customProducts].map(p => (
                <div key={p.id} className="px-6 py-3 flex items-center justify-between hover:bg-gray-50/50">
                  <div>
                    <span className="font-medium text-gray-900 text-sm">{p.name}</span>
                    <span className="text-xs text-gray-400 ml-2">{p.size}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="range" min="0" max="50"
                      value={discount.products?.[p.id] || 0}
                      onChange={e => setDiscount({...discount, products: {...discount.products, [p.id]: parseInt(e.target.value)}})}
                      className="w-24 accent-brand-500" />
                    <span className="text-sm font-bold text-brand-600 min-w-[40px] text-right">
                      {discount.products?.[p.id] || 0}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}