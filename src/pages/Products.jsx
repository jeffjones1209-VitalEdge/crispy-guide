import { useState, useMemo } from 'react';
import { peptides, categories } from '../data/peptides';

const placeholderPricing = {
  'bpc-157': { price: 39.99, sizes: [{ size: '5 mg', price: 39.99 }, { size: '10 mg', price: 69.99 }] },
  'tb-500': { price: 49.99, sizes: [{ size: '5 mg', price: 49.99 }, { size: '10 mg', price: 89.99 }] },
  'semaglutide': { price: 89.99, sizes: [{ size: '3 mg', price: 89.99 }, { size: '5 mg', price: 139.99 }] },
  'tirzepatide': { price: 129.99, sizes: [{ size: '5 mg', price: 129.99 }, { size: '10 mg', price: 199.99 }, { size: '15 mg', price: 269.99 }] },
  'aod-9604': { price: 44.99, sizes: [{ size: '5 mg', price: 44.99 }, { size: '10 mg', price: 79.99 }] },
  'cjc-1295': { price: 54.99, sizes: [{ size: '5 mg', price: 54.99 }, { size: '10 mg', price: 94.99 }] },
  'cjc-1295-no-dac': { price: 44.99, sizes: [{ size: '5 mg', price: 44.99 }, { size: '10 mg', price: 79.99 }] },
  'ipamorelin': { price: 44.99, sizes: [{ size: '5 mg', price: 44.99 }, { size: '10 mg', price: 79.99 }] },
  'ghk-cu': { price: 34.99, sizes: [{ size: '25 mg', price: 34.99 }, { size: '50 mg', price: 59.99 }] },
  'mots-c': { price: 69.99, sizes: [{ size: '10 mg', price: 69.99 }, { size: '20 mg', price: 119.99 }] },
  'ss-31': { price: 79.99, sizes: [{ size: '10 mg', price: 79.99 }, { size: '20 mg', price: 139.99 }] },
  'tesamorelin': { price: 69.99, sizes: [{ size: '5 mg', price: 69.99 }, { size: '10 mg', price: 119.99 }] },
  'sermorelin': { price: 49.99, sizes: [{ size: '5 mg', price: 49.99 }, { size: '10 mg', price: 89.99 }] },
  'melanotan-2': { price: 34.99, sizes: [{ size: '10 mg', price: 34.99 }, { size: '20 mg', price: 59.99 }] },
  'pt-141': { price: 44.99, sizes: [{ size: '10 mg', price: 44.99 }, { size: '20 mg', price: 79.99 }] },
  'ghrp-2': { price: 39.99, sizes: [{ size: '5 mg', price: 39.99 }, { size: '10 mg', price: 69.99 }] },
  'ghrp-6': { price: 39.99, sizes: [{ size: '5 mg', price: 39.99 }, { size: '10 mg', price: 69.99 }] },
  'oxytocin': { price: 29.99, sizes: [{ size: '10 IU', price: 29.99 }, { size: '20 IU', price: 49.99 }] },
  'nad-plus': { price: 89.99, sizes: [{ size: '100 mg', price: 89.99 }, { size: '250 mg', price: 189.99 }] },
  'thymosin-alpha-1': { price: 59.99, sizes: [{ size: '5 mg', price: 59.99 }, { size: '10 mg', price: 99.99 }] },
  'kpv': { price: 34.99, sizes: [{ size: '25 mg', price: 34.99 }, { size: '50 mg', price: 59.99 }] },
  'bpc-157-oral': { price: 49.99, sizes: [{ size: '30 caps', price: 49.99 }, { size: '60 caps', price: 89.99 }] },
};

export default function Products() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Research Peptide Catalog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lab-tested research peptides at wholesale pricing. All products are for research purposes only.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="card mb-8">
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
                    ? 'bg-brand-500 text-white'
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
            const pricing = placeholderPricing[p.id];
            if (!pricing) return null;
            return (
              <div key={p.id} className="card flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                    <p className="text-xs text-gray-500">{p.category}</p>
                  </div>
                  <span className="px-2 py-0.5 bg-brand-50 text-brand-600 text-xs font-medium rounded-full">
                    In Stock
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4 flex-1">{p.description}</p>
                <div className="space-y-2 mb-4">
                  {pricing.sizes.map((s, i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                      <span className="text-sm text-gray-700">{s.size}</span>
                      <span className="text-sm font-bold text-gray-900">${s.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-primary w-full text-sm">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>

        {filteredPeptides.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products match your search.</p>
          </div>
        )}

        {/* Wholesale Note */}
        <div className="mt-12 bg-gradient-to-r from-brand-50 to-ocean-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Wholesale Pricing for Researchers</h3>
          <p className="text-gray-600 mb-4 max-w-xl mx-auto">
            All prices shown are wholesale. Volume discounts available for bulk orders. 
            Contact us for custom quotes.
          </p>
          <button className="btn-outline">Request Bulk Quote</button>
        </div>
      </div>
    </div>
  );
}