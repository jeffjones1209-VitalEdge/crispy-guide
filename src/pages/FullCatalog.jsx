import { useState, useMemo } from 'react';
import { getAllProducts, getCategories, getSubcategories } from '../data/products';
import { useCart } from '../context/CartContext';

// SVG name overlay for GLP-1 products
function GLP1NameImage({ displayName }) {
  if (!displayName) return null;
  const width = displayName.length * 9 + 24;
  return (
    <div className="absolute top-0 right-0 pointer-events-none select-none z-10" aria-hidden="true">
      <svg width={width} height="22" viewBox={`0 0 ${width} 22`} xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width={width} height="22" rx="4" fill="#dbeafe" />
        <text x={width / 2} y="15" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#111827">
          {displayName}
        </text>
      </svg>
    </div>
  );
}

export default function FullCatalog() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [addedMsg, setAddedMsg] = useState('');
  const { addItem } = useCart();

  const products = useMemo(() => getAllProducts(), []);
  const categories = useMemo(() => getCategories(), []);

  const filtered = useMemo(() => {
    return products.filter(p => {
      const mCat = categoryFilter === 'All' || p.category === categoryFilter;
      const s = searchTerm.toLowerCase();
      const mSearch = !s ||
        p.name.toLowerCase().includes(s) ||
        (p.displayName && p.displayName.toLowerCase().includes(s)) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(s)) ||
        (p.description && p.description.toLowerCase().includes(s));
      return mCat && mSearch;
    });
  }, [categoryFilter, searchTerm, products]);

  const handleAddToCart = (product) => {
    const variant = product.variants[0];
    const mg = variant.mg;
    addItem(product.id, mg, 'single');
    setAddedMsg(`${product.name} ${mg}mg added!`);
    setTimeout(() => setAddedMsg(''), 2500);
  };

  // Group by category for the full view
  const grouped = useMemo(() => {
    if (categoryFilter !== 'All') return { [categoryFilter]: filtered };
    const groups = {};
    filtered.forEach(p => {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    });
    return groups;
  }, [filtered, categoryFilter]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Toast */}
      {addedMsg && (
        <div className="fixed top-20 right-4 z-50 bg-green-50 border border-green-200 text-green-700 px-4 py-2.5 rounded-xl shadow-lg text-sm font-medium animate-pulse">
          ✅ {addedMsg}
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-sky-200 text-sm font-medium mb-3 border border-white/10">
                🔬 Authorized Researcher Access
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">Full Product Catalog</h1>
              <p className="text-slate-300 mt-2 text-sm">
                {products.length} products · Wholesale pricing · HPLC-verified purity
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-2 bg-green-500/20 text-green-300 text-xs font-medium rounded-lg border border-green-500/30">
                ✅ Verified Access
              </span>
            </div>
          </div>

          {/* Search */}
          <div className="max-w-xl">
            <input
              type="text"
              placeholder={`Search ${products.length} products by name, category, or description...`}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-sky-400 outline-none border-0 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => setCategoryFilter('All')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                categoryFilter === 'All'
                  ? 'bg-sky-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All ({products.length})
            </button>
            {categories.map(cat => {
              const count = products.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    categoryFilter === cat
                      ? 'bg-sky-500 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Grid — grouped by category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
        {Object.entries(grouped).map(([cat, prods]) => (
          <div key={cat}>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-bold text-slate-900">{cat}</h2>
              <span className="text-xs text-slate-400 font-medium">{prods.length} products</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {prods.map(p => {
                const variant = p.variants[0];
                return (
                  <div key={p.id} className="bg-white rounded-xl border border-slate-100 p-4 hover:shadow-lg hover:border-sky-100 transition-all flex flex-col relative">
                    {/* GLP-1 SVG overlay */}
                    {p.isGLP1 && p.displayName && <GLP1NameImage displayName={p.displayName} />}

                    {/* Name + badges */}
                    <div className="mb-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="font-semibold text-slate-900 text-sm">{p.name}</h3>
                        {p.isGLP1 && (
                          <span className="px-1.5 py-0.5 text-[9px] font-bold bg-blue-50 text-blue-600 rounded border border-blue-200 uppercase tracking-wider">
                            GLP-1
                          </span>
                        )}
                      </div>
                      {p.description && (
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{p.description}</p>
                      )}
                      {p.subcategory && (
                        <span className="inline-block mt-1 text-[10px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">
                          {p.subcategory}
                        </span>
                      )}
                    </div>

                    {/* Purity badge */}
                    {p.purity && (
                      <div className="text-[10px] text-green-600 font-medium mb-2">
                        🧬 {p.purity} purity
                      </div>
                    )}

                    {/* CAS */}
                    {p.cas && (
                      <div className="text-[9px] text-slate-300 mb-2 font-mono">
                        CAS: {p.cas}
                      </div>
                    )}

                    {/* Size + Price */}
                    <div className="mt-auto pt-3 border-t border-slate-50">
                      <div className="flex items-end justify-between">
                        <span className="text-xs text-slate-500">
                          {variant.mg >= 1000 ? `${(variant.mg / 1000).toFixed(1)}g` : `${variant.mg}mg`}
                          {p.category === 'Supplies' && variant.mg >= 10 && ' / ' + (p.name.includes('pack') ? 'per pack' : '')}
                        </span>
                        <span className="text-xl font-bold text-slate-900">
                          ${variant.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Research disclaimer */}
                      <div className="mt-2 mb-3 px-2 py-1.5 bg-amber-50 border border-amber-100 rounded-md">
                        <p className="text-[9px] text-amber-700 text-center font-medium">
                          🔬 Research use only · Not for human consumption
                        </p>
                      </div>

                      {/* Add to cart */}
                      <button
                        onClick={() => handleAddToCart(p)}
                        className="w-full py-2 rounded-lg font-semibold text-sm bg-sky-500 text-white hover:bg-sky-600 shadow-sm hover:shadow-md transition-all"
                      >
                        Add to Cart — ${variant.price.toFixed(2)}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-slate-500 text-lg">No products found.</p>
            <p className="text-slate-400 text-sm mt-1">Try a different search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}