import { useState, useEffect } from 'react';
import { peptides } from '../data/peptides';

const ADMIN_PASSWORD = 'vitaledge2024';
const PRICING_KEY = 'vitaledge_pricing';
const DISCOUNT_KEY = 'vitaledge_discount';

const defaultSizes = {
  'bpc-157': [{ size: '5 mg', price: 39.99 }, { size: '10 mg', price: 69.99 }],
  'tb-500': [{ size: '5 mg', price: 49.99 }, { size: '10 mg', price: 89.99 }],
  'semaglutide': [{ size: '3 mg', price: 89.99 }, { size: '5 mg', price: 139.99 }],
  'tirzepatide': [{ size: '5 mg', price: 129.99 }, { size: '10 mg', price: 199.99 }, { size: '15 mg', price: 269.99 }],
  'aod-9604': [{ size: '5 mg', price: 44.99 }, { size: '10 mg', price: 79.99 }],
  'cjc-1295': [{ size: '5 mg', price: 54.99 }, { size: '10 mg', price: 94.99 }],
  'cjc-1295-no-dac': [{ size: '5 mg', price: 44.99 }, { size: '10 mg', price: 79.99 }],
  'ipamorelin': [{ size: '5 mg', price: 44.99 }, { size: '10 mg', price: 79.99 }],
  'ghk-cu': [{ size: '25 mg', price: 34.99 }, { size: '50 mg', price: 59.99 }],
  'mots-c': [{ size: '10 mg', price: 69.99 }, { size: '20 mg', price: 119.99 }],
  'ss-31': [{ size: '10 mg', price: 79.99 }, { size: '20 mg', price: 139.99 }],
  'tesamorelin': [{ size: '5 mg', price: 69.99 }, { size: '10 mg', price: 119.99 }],
  'sermorelin': [{ size: '5 mg', price: 49.99 }, { size: '10 mg', price: 89.99 }],
  'melanotan-2': [{ size: '10 mg', price: 34.99 }, { size: '20 mg', price: 59.99 }],
  'pt-141': [{ size: '10 mg', price: 44.99 }, { size: '20 mg', price: 79.99 }],
  'ghrp-2': [{ size: '5 mg', price: 39.99 }, { size: '10 mg', price: 69.99 }],
  'ghrp-6': [{ size: '5 mg', price: 39.99 }, { size: '10 mg', price: 69.99 }],
  'oxytocin': [{ size: '10 IU', price: 29.99 }, { size: '20 IU', price: 49.99 }],
  'nad-plus': [{ size: '100 mg', price: 89.99 }, { size: '250 mg', price: 189.99 }],
  'thymosin-alpha-1': [{ size: '5 mg', price: 59.99 }, { size: '10 mg', price: 99.99 }],
  'kpv': [{ size: '25 mg', price: 34.99 }, { size: '50 mg', price: 59.99 }],
  'bpc-157-oral': [{ size: '30 caps', price: 49.99 }, { size: '60 caps', price: 89.99 }],
};

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [pricing, setPricing] = useState({});
  const [discount, setDiscount] = useState({ siteWide: 0, products: {} });
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('products');
  const [editingPrices, setEditingPrices] = useState({});

  useEffect(() => {
    if (authed) {
      const p = JSON.parse(localStorage.getItem(PRICING_KEY) || '{}');
      setPricing(p);
      const d = JSON.parse(localStorage.getItem(DISCOUNT_KEY) || '{}');
      setDiscount(d);
    }
  }, [authed]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const saveAll = () => {
    localStorage.setItem(PRICING_KEY, JSON.stringify(pricing));
    localStorage.setItem(DISCOUNT_KEY, JSON.stringify(discount));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const resetPricing = (id) => {
    const newPricing = { ...pricing };
    delete newPricing[id];
    setPricing(newPricing);
    localStorage.setItem(PRICING_KEY, JSON.stringify(newPricing));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
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
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(''); }}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
              className="admin-input text-center text-lg tracking-[0.3em]"
              autoFocus
            />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button onClick={handleLogin} className="btn-primary w-full py-3">
              Access Dashboard
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">
            Contact the site owner for access.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
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
          <button
            onClick={() => setAuthed(false)}
            className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/10"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'products' ? 'bg-brand-500 text-white shadow-sm' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            🧬 Product Prices
          </button>
          <button
            onClick={() => setActiveTab('discounts')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'discounts' ? 'bg-brand-500 text-white shadow-sm' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            🏷️ Discounts
          </button>
        </div>

        {/* Save indicator */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-gray-400">Data is stored in localStorage (persists across sessions)</p>
          {saved && (
            <span className="text-xs text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full border border-green-200">
              ✅ Saved
            </span>
          )}
        </div>
      </div>

      {/* Products Tab */}
      {activeTab === 'products' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-900">Product Price Editor</h2>
              <p className="text-xs text-gray-500 mt-0.5">Override default prices for any product size</p>
            </div>
            <div className="divide-y divide-gray-100">
              {peptides.map(p => {
                const sizes = defaultSizes[p.id] || [];
                const override = pricing[p.id];
                return (
                  <div key={p.id} className="px-6 py-4 hover:bg-gray-50/50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-gray-900">{p.name}</h3>
                        <span className="text-xs text-gray-400">{p.category} · {p.id}</span>
                      </div>
                      {override && (
                        <button
                          onClick={() => resetPricing(p.id)}
                          className="text-xs text-red-500 hover:text-red-600 px-2 py-1 rounded hover:bg-red-50"
                        >
                          Reset to default
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {sizes.map((s, i) => (
                        <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                          <span className="text-sm text-gray-600 min-w-[60px]">{s.size}</span>
                          <span className="text-gray-400">$</span>
                          <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={pricing[p.id]?.prices?.[s.size] ?? s.price}
                            onChange={e => {
                              const val = parseFloat(e.target.value);
                              const newPricing = { ...pricing };
                              if (!newPricing[p.id]) newPricing[p.id] = { sizes: [...sizes] };
                              if (!newPricing[p.id].prices) newPricing[p.id].prices = {};
                              newPricing[p.id].prices[s.size] = isNaN(val) ? s.price : val;
                              setPricing(newPricing);
                            }}
                            className="w-20 px-2 py-1 rounded border border-gray-200 text-sm text-right focus:ring-1 focus:ring-brand-400 focus:border-transparent outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-6 text-center">
            <button onClick={saveAll} className="btn-primary px-10 py-3">
              💾 Save All Price Changes
            </button>
          </div>
        </div>
      )}

      {/* Discounts Tab */}
      {activeTab === 'discounts' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-6">
          {/* Site-wide discount */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Site-Wide Discount</h2>
            <p className="text-xs text-gray-500 mb-4">Apply a % discount to ALL products on the site</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={discount.siteWide || 0}
                  onChange={e => setDiscount({ ...discount, siteWide: parseInt(e.target.value) })}
                  className="w-48 accent-brand-500"
                />
                <span className="text-lg font-bold text-brand-600 min-w-[60px]">{discount.siteWide || 0}%</span>
              </div>
              {discount.siteWide > 0 && (
                <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded-full border border-red-200">
                  ACTIVE — {discount.siteWide}% off everything
                </span>
              )}
            </div>
          </div>

          {/* Per-product discounts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-900">Per-Product Discounts</h2>
              <p className="text-xs text-gray-500 mt-0.5">Set individual % discounts on specific products</p>
            </div>
            <div className="divide-y divide-gray-100">
              {peptides.map(p => (
                <div key={p.id} className="px-6 py-3 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                  <div>
                    <span className="font-medium text-gray-900 text-sm">{p.name}</span>
                    <span className="text-xs text-gray-400 ml-2">{p.category}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={discount.products?.[p.id] || 0}
                      onChange={e => {
                        const val = parseInt(e.target.value);
                        setDiscount({
                          ...discount,
                          products: { ...discount.products, [p.id]: val }
                        });
                      }}
                      className="w-24 accent-brand-500"
                    />
                    <span className="text-sm font-bold text-brand-600 min-w-[40px] text-right">
                      {discount.products?.[p.id] || 0}%
                    </span>
                    {discount.products?.[p.id] > 0 && (
                      <span className="text-xs text-red-500">●</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button onClick={saveAll} className="btn-primary px-10 py-3">
              💾 Save All Discounts
            </button>
          </div>
        </div>
      )}
    </div>
  );
}