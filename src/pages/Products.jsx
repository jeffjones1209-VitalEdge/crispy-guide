import { useState, useMemo } from 'react';
import { useCart, getProducts, TIER_LABELS } from '../context/CartContext';

const CATEGORIES = ['All', 'Recovery', 'Cosmetic', 'Longevity', 'Wellness', 'Metabolic'];
const TIERS = ['single', 'threePack', 'tenKit'];

// SVG image overlay — renders real GLP-1 name as text-in-SVG (crawlers can't read it)
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

export default function Products() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [addedMsg, setAddedMsg] = useState('');
  // Per-card state: { [productId]: { mg, tier } }
  const [selections, setSelections] = useState({});
  const { addItem } = useCart();

  const productsList = useMemo(() => getProducts(), []);

  const filtered = useMemo(() => {
    return productsList.filter(p => {
      const mCat = categoryFilter === 'All' || p.category === categoryFilter;
      const searchLower = searchTerm.toLowerCase();
      const mSearch = !searchTerm ||
        p.name.toLowerCase().includes(searchLower) ||
        (p.displayName && p.displayName.toLowerCase().includes(searchLower));
      return mCat && mSearch;
    });
  }, [categoryFilter, searchTerm, productsList]);

  // Get or init selection for a product
  const getSelection = (product) => {
    const sel = selections[product.id];
    const defaultMg = product.variants[0].mg;
    const defaultTier = 'single';
    return sel || { mg: defaultMg, tier: defaultTier };
  };

  const setMg = (productId, mg) => {
    setSelections(prev => ({ ...prev, [productId]: { ...getSelection({ id: productId, variants: [{ mg: 0 }] }), mg } }));
  };
  const setTier = (productId, tier) => {
    setSelections(prev => {
      const cur = prev[productId] || { mg: 0, tier: 'single' };
      return { ...prev, [productId]: { ...cur, tier } };
    });
  };

  const getPrice = (product) => {
    const sel = getSelection(product);
    const variant = product.variants.find(v => v.mg === sel.mg);
    return variant ? variant.prices[sel.tier] : 0;
  };

  const handleAddToCart = (product) => {
    const sel = getSelection(product);
    addItem(product.id, sel.mg, sel.tier);
    const label = product.displayName
      ? `${product.name} ${sel.mg}mg ${TIER_LABELS[sel.tier]}`
      : `${product.name} ${sel.mg}mg ${TIER_LABELS[sel.tier]}`;
    setAddedMsg(`${label} added!`);
    setTimeout(() => setAddedMsg(''), 2500);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {addedMsg && (
        <div className="fixed top-20 right-4 z-50 bg-green-50 border border-green-200 text-green-700 px-4 py-2.5 rounded-xl shadow-lg text-sm font-medium">
          ✅ {addedMsg}
        </div>
      )}

      {/* Hero */}
      <div className="bg-gradient-to-br from-white via-brand-50/30 to-ocean-50/30 pt-12 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/3 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4 border border-brand-200">
              🧪 Wholesale Research Peptides
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Research Peptide Catalog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lab-tested research peptides at wholesale pricing. All products are for research purposes only.
            </p>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="card shadow-md mb-8">
          <input
            type="text" placeholder="Search products..." value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="input-field w-full"
          />
          <div className="flex flex-wrap gap-2 mt-4">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  categoryFilter === cat ? 'bg-brand-500 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>{cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => {
            const sel = getSelection(p);
            const variant = p.variants.find(v => v.mg === sel.mg);
            const price = variant ? variant.prices[sel.tier] : 0;
            const hasVariants = p.variants.length > 1;

            return (
              <div key={p.id} className="card-premium flex flex-col relative">
                {/* GLP-1 SVG name overlay */}
                {p.isGLP1 && p.displayName && <GLP1NameImage displayName={p.displayName} />}

                {/* Header: name + category */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                      {p.isGLP1 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-medium bg-blue-50 text-blue-600 rounded border border-blue-200">
                          GLP-1
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{p.category}</p>
                  </div>
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full border bg-green-50 text-green-600 border-green-200">
                    In Stock
                  </span>
                </div>

                {/* mg dropdown (GLP-1s only) */}
                {hasVariants && (
                  <div className="mb-3">
                    <label className="text-[10px] text-gray-500 uppercase tracking-wider mb-1 block">Dosage</label>
                    <select
                      value={sel.mg}
                      onChange={e => setMg(p.id, Number(e.target.value))}
                      className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white"
                    >
                      {p.variants.map(v => (
                        <option key={v.mg} value={v.mg}>{v.mg}mg</option>
                      ))}
                    </select>
                  </div>
                )}
                {!hasVariants && (
                  <p className="text-xs text-gray-500 mb-2">{p.variants[0].mg}mg</p>
                )}

                {/* Price display */}
                <div className="mb-3">
                  <span className="text-2xl font-bold text-gray-900">${price.toFixed(2)}</span>
                  <span className="text-xs text-gray-400 ml-1">/{sel.tier === 'single' ? 'vial' : sel.tier === 'threePack' ? '3-pack' : '10-kit'}</span>
                </div>

                {/* Bundle tier pills */}
                <div className="flex gap-1.5 mb-3">
                  {TIERS.map(tier => {
                    const tPrice = variant ? variant.prices[tier] : 0;
                    const isActive = sel.tier === tier;
                    const pct = tier === 'threePack' ? '−20%' : tier === 'tenKit' ? '−25%' : '';
                    return (
                      <button
                        key={tier}
                        onClick={() => setTier(p.id, tier)}
                        className={`flex-1 py-1.5 px-1 rounded-lg text-[11px] font-medium transition-all text-center leading-tight ${
                          isActive
                            ? 'bg-brand-500 text-white shadow-sm'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <span className="block">{tier === 'single' ? 'Single' : tier === 'threePack' ? '3-Pack' : '10-Kit'}</span>
                        {pct && <span className="text-[9px] opacity-80">{pct}</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Research disclaimer */}
                <div className="mb-3 px-3 py-2 bg-amber-50 border border-amber-100 rounded-lg">
                  <p className="text-[10px] text-amber-700 leading-tight">
                    🔬 <strong>Research use only.</strong> Not for human consumption.
                  </p>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => handleAddToCart(p)}
                  className="w-full py-2.5 rounded-lg font-semibold text-sm bg-brand-500 text-white hover:bg-brand-600 shadow-sm hover:shadow-md transition-all"
                >
                  Add to Cart — ${price.toFixed(2)}
                </button>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-gray-500">No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
