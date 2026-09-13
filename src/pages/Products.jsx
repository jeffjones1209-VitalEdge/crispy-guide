import { useState, useMemo } from 'react';
import { getAllProducts, getCategories } from '../data/products';
import { useCart } from '../context/CartContext';

// SVG image overlay for GLP-1 products
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
  const { addItem } = useCart();

  const productsList = useMemo(() => getAllProducts(), []);
  const categories = useMemo(() => getCategories(), []);

  const filtered = useMemo(() => {
    return productsList.filter(p => {
      const mCat = categoryFilter === 'All' || p.category === categoryFilter;
      const searchLower = searchTerm.toLowerCase();
      const mSearch = !searchTerm ||
        p.name.toLowerCase().includes(searchLower) ||
        (p.displayName && p.displayName.toLowerCase().includes(searchLower)) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(searchLower));
      return mCat && mSearch;
    });
  }, [categoryFilter, searchTerm, productsList]);

  const handleAddToCart = (product) => {
    const variant = product.variants[0];
    addItem(product.id, variant.mg, 'single');
    setAddedMsg(`${product.name} ${variant.mg}mg added!`);
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
            <button
              onClick={() => setCategoryFilter('All')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                categoryFilter === 'All' ? 'bg-brand-500 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >All</button>
            {categories.map(cat => (
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
            const variant = p.variants[0];

            return (
              <div key={p.id} className="card-premium flex flex-col relative">
                {/* GLP-1 SVG name overlay */}
                {p.isGLP1 && p.displayName && <GLP1NameImage displayName={p.displayName} />}

                {/* Header */}
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
                    <p className="text-xs text-gray-500">{p.category}{p.subcategory ? ` · ${p.subcategory}` : ''}</p>
                    {p.description && <p className="text-[10px] text-gray-400 mt-0.5">{p.description}</p>}
                  </div>
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full border bg-green-50 text-green-600 border-green-200">
                    In Stock
                  </span>
                </div>

                {/* Size */}
                <p className="text-xs text-gray-500 mb-2">{variant.mg}mg</p>

                {/* Price */}
                <div className="mb-3">
                  <span className="text-2xl font-bold text-gray-900">${variant.price.toFixed(2)}</span>
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
                  Add to Cart — ${variant.price.toFixed(2)}
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