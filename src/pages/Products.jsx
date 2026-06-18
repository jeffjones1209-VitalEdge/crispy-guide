import { useState, useMemo } from 'react';
import { peptides, categories } from '../data/peptides';

const defaultPricing = {
  'bpc-157': { sizes: [{ size: '5 mg', price: 39.99 }, { size: '10 mg', price: 69.99 }] },
  'tb-500': { sizes: [{ size: '5 mg', price: 49.99 }, { size: '10 mg', price: 89.99 }] },
  'semaglutide': { sizes: [{ size: '3 mg', price: 89.99 }, { size: '5 mg', price: 139.99 }] },
  'tirzepatide': { sizes: [{ size: '5 mg', price: 129.99 }, { size: '10 mg', price: 199.99 }, { size: '15 mg', price: 269.99 }] },
  'aod-9604': { sizes: [{ size: '5 mg', price: 44.99 }, { size: '10 mg', price: 79.99 }] },
  'cjc-1295': { sizes: [{ size: '5 mg', price: 54.99 }, { size: '10 mg', price: 94.99 }] },
  'cjc-1295-no-dac': { sizes: [{ size: '5 mg', price: 44.99 }, { size: '10 mg', price: 79.99 }] },
  'ipamorelin': { sizes: [{ size: '5 mg', price: 44.99 }, { size: '10 mg', price: 79.99 }] },
  'ghk-cu': { sizes: [{ size: '25 mg', price: 34.99 }, { size: '50 mg', price: 59.99 }] },
  'mots-c': { sizes: [{ size: '10 mg', price: 69.99 }, { size: '20 mg', price: 119.99 }] },
  'ss-31': { sizes: [{ size: '10 mg', price: 79.99 }, { size: '20 mg', price: 139.99 }] },
  'tesamorelin': { sizes: [{ size: '5 mg', price: 69.99 }, { size: '10 mg', price: 119.99 }] },
  'sermorelin': { sizes: [{ size: '5 mg', price: 49.99 }, { size: '10 mg', price: 89.99 }] },
  'melanotan-2': { sizes: [{ size: '10 mg', price: 34.99 }, { size: '20 mg', price: 59.99 }] },
  'pt-141': { sizes: [{ size: '10 mg', price: 44.99 }, { size: '20 mg', price: 79.99 }] },
  'ghrp-2': { sizes: [{ size: '5 mg', price: 39.99 }, { size: '10 mg', price: 69.99 }] },
  'ghrp-6': { sizes: [{ size: '5 mg', price: 39.99 }, { size: '10 mg', price: 69.99 }] },
  'oxytocin': { sizes: [{ size: '10 IU', price: 29.99 }, { size: '20 IU', price: 49.99 }] },
  'nad-plus': { sizes: [{ size: '100 mg', price: 89.99 }, { size: '250 mg', price: 189.99 }] },
  'thymosin-alpha-1': { sizes: [{ size: '5 mg', price: 59.99 }, { size: '10 mg', price: 99.99 }] },
  'kpv': { sizes: [{ size: '25 mg', price: 34.99 }, { size: '50 mg', price: 59.99 }] },
  'bpc-157-oral': { sizes: [{ size: '30 caps', price: 49.99 }, { size: '60 caps', price: 89.99 }] },
};

function getPricing(peptideId, siteDiscount) {
  const base = defaultPricing[peptideId];
  if (!base) return null;
  const adminOverrides = JSON.parse(localStorage.getItem('vitaledge_pricing') || '{}');
  const override = adminOverrides[peptideId];
  const sizes = override?.sizes || base.sizes;
  return {
    sizes: sizes.map(s => ({
      ...s,
      price: override?.prices?.[s.size] !== undefined ? override.prices[s.size] : s.price,
      effectivePrice: siteDiscount > 0 ? +(s.price * (1 - siteDiscount / 100)).toFixed(2) : (override?.prices?.[s.size] !== undefined ? override.prices[s.size] : s.price),
    })),
  };
}

function getSiteDiscount() {
  const d = JSON.parse(localStorage.getItem('vitaledge_discount') || '{}');
  return d.siteWide || 0;
}

function getProductDiscount(peptideId) {
  const d = JSON.parse(localStorage.getItem('vitaledge_discount') || '{}');
  return d.products?.[peptideId] || 0;
}

export default function Products() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const siteDiscount = getSiteDiscount();

  const filteredPeptides = useMemo(() => {
    return peptides.filter(p => {
      const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
      const matchesSearch = searchTerm === '' || 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.fullName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [categoryFilter, searchTerm]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-white via-brand-50/30 to-ocean-50/30 pt-12 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/3 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4 border border-brand-200">
              🧪 Wholesale Research Peptides
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Research Peptide Catalog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lab-tested research peptides at wholesale pricing. All products are for research purposes only.
            </p>
            {siteDiscount > 0 && (
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 font-medium text-sm">
                <span>🔥</span>
                <span>{siteDiscount}% OFF SITE-WIDE SALE — Use code: VITALDEAL</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="card shadow-md mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="input-field flex-1"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  categoryFilter === cat
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPeptides.map(p => {
            const pricing = getPricing(p.id, siteDiscount);
            const prodDiscount = getProductDiscount(p.id);
            if (!pricing) return null;
            return (
              <div key={p.id} className="card-premium flex flex-col group">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">{p.name}</h3>
                    <p className="text-xs text-gray-500">{p.category}</p>
                  </div>
                  <span className="px-2 py-0.5 bg-green-50 text-green-600 text-xs font-medium rounded-full border border-green-200">
                    In Stock
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">{p.description}</p>
                <div className="space-y-2 mb-4">
                  {pricing.sizes.map((s, i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 group/size">
                      <span className="text-sm text-gray-700">{s.size}</span>
                      <span className="flex items-center gap-2">
                        {prodDiscount > 0 && (
                          <span className="text-xs text-red-500 font-medium">-{prodDiscount}%</span>
                        )}
                        <span className="text-sm font-bold text-gray-900">
                          ${s.effectivePrice.toFixed(2)}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold text-sm hover:from-brand-600 hover:to-brand-700 transition-all shadow-sm hover:shadow-md">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>

        {filteredPeptides.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-gray-500">No products match your search.</p>
          </div>
        )}

        {/* Wholesale Note */}
        <div className="mt-12 bg-gradient-to-r from-brand-50 via-white to-ocean-50 rounded-xl p-8 text-center border border-brand-100 shadow-sm">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-100 to-ocean-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-xl">📦</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Wholesale Pricing for Researchers</h3>
          <p className="text-gray-600 mb-4 max-w-xl mx-auto text-sm">
            All prices shown are wholesale. Volume discounts available for bulk orders. 
            Contact us for custom quotes on large quantities.
          </p>
          <button className="btn-outline">Request Bulk Quote</button>
        </div>
      </div>
    </div>
  );
}