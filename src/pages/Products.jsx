import { useState, useMemo } from 'react';
import { useCart, getProducts, getDiscount } from '../context/CartContext';

const CATEGORIES = ['All', 'Recovery', 'Cosmetic', 'Longevity', 'Wellness', 'Metabolic'];

// SVG image overlay — renders real GLP-1 name as text-in-SVG (crawlers can't read it)
function GLP1NameImage({ displayName }) {
  if (!displayName) return null;
  const width = displayName.length * 9 + 24;
  return (
    <div className="absolute top-0 right-0 pointer-events-none select-none" aria-hidden="true">
      <svg width={width} height="20" viewBox={`0 0 ${width} 20`} xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width={width} height="20" rx="4" fill="#dbeafe" />
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
  const { addItem } = useCart();

  const productsList = useMemo(() => getProducts(), []);
  const discount = getDiscount();
  const siteWide = discount.siteWide || 0;

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

  const getEffectivePrice = (product) => {
    const prodDisc = discount.products?.[product.id] || 0;
    const maxDisc = Math.max(siteWide, prodDisc);
    return maxDisc > 0 ? +(product.price * (1 - maxDisc / 100)).toFixed(2) : product.price;
  };

  const handleAddToCart = (product) => {
    addItem(product);
    const label = product.displayName ? `${product.name} (${product.displayName})` : product.name;
    setAddedMsg(`${label} added to cart!`);
    setTimeout(() => setAddedMsg(''), 2500);
  };

  const handleBuyNow = (product) => {
    if (product.stripeUrl) {
      window.open(product.stripeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {addedMsg && (
        <div className="fixed top-20 right-4 z-50 bg-green-50 border border-green-200 text-green-700 px-4 py-2.5 rounded-xl shadow-lg text-sm font-medium">
          ✅ {addedMsg}
        </div>
      )}

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
            {siteWide > 0 && (
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 font-medium text-sm">
                <span>🔥</span>
                <span>{siteWide}% OFF SITE-WIDE — Use code: VITALDEAL</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="card shadow-md mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text" placeholder="Search products..." value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="input-field flex-1"
            />
          </div>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => {
            const effPrice = getEffectivePrice(p);
            const prodDisc = discount.products?.[p.id] || 0;
            const maxDisc = Math.max(siteWide, prodDisc);
            return (
              <div key={p.id} className="card-premium flex flex-col group relative">
                {/* GLP-1 name as SVG image (image trick — real name not in crawlable text) */}
                {p.isGLP1 && p.displayName && (
                  <GLP1NameImage displayName={p.displayName} />
                )}

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs text-gray-500">{p.size} · {p.category}</p>
                  </div>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${
                    p.inStock ? 'bg-green-50 text-green-600 border-green-200' : 'bg-red-50 text-red-500 border-red-200'
                  }`}>
                    {p.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                <div className="mb-2 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">${effPrice.toFixed(2)}</span>
                    {maxDisc > 0 && (
                      <>
                        <span className="text-sm text-gray-400 line-through">${p.price.toFixed(2)}</span>
                        <span className="text-xs font-medium text-red-500">-{maxDisc}%</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Research disclaimer on every product card */}
                <p className="text-xs text-gray-400 italic mt-1 mb-3">
                  This product is intended for research and laboratory use only. Not for human consumption.
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(p)}
                    className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                      p.inStock
                        ? 'bg-brand-500 text-white hover:bg-brand-600 shadow-sm hover:shadow-md'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!p.inStock}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleBuyNow(p)}
                    className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                      p.inStock && p.stripeUrl
                        ? 'bg-ocean-500 text-white hover:bg-ocean-600 shadow-sm hover:shadow-md'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!p.inStock || !p.stripeUrl}
                  >
                    Buy Now
                  </button>
                </div>
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
