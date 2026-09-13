import { useEffect, useState } from 'react';

export default function Landing({ onNavigate }) {
  const [animated, setAnimated] = useState(false);
  useEffect(() => { setAnimated(true); }, []);

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(56,189,248,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(14,165,233,0.3) 0%, transparent 50%)' }} />
        </div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tag */}
            <div className={`inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sky-200 text-sm font-medium mb-8 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              B2B Research Supply — Wholesale Peptides & Laboratory Materials
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Your Trusted Partner for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                Research-Grade Peptides
              </span>
            </h1>

            <p className={`text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              VItalEdge supplies laboratories and research institutions with 180+ high-purity peptides 
              at wholesale pricing. Quality you can verify. Pricing that makes sense.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button
                onClick={() => onNavigate('request-access')}
                className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-bold rounded-xl shadow-xl hover:shadow-sky-500/25 hover:from-sky-400 hover:to-blue-400 transition-all text-lg"
              >
                Request Researcher Access →
              </button>
              <button
                onClick={() => onNavigate('calculator')}
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg backdrop-blur-sm"
              >
                Try Dosage Calculator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────────────── */}
      <section className="py-10 bg-slate-800 border-t border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '180+', label: 'Products', sub: 'In stock & verified' },
              { number: '>99%', label: 'Purity', sub: 'HPLC-verified' },
              { number: '24-48h', label: 'Processing', sub: 'Fast fulfillment' },
              { number: 'B2B', label: 'Wholesale', sub: 'Volume pricing' },
            ].map(s => (
              <div key={s.label} className="text-white">
                <div className="text-3xl font-bold text-sky-400 mb-1">{s.number}</div>
                <div className="text-slate-200 font-medium text-sm">{s.label}</div>
                <div className="text-slate-400 text-xs mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value Props ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-sm font-medium mb-4 border border-sky-100">
              🔬 Why Institutions Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Research Supply, Simplified
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From ordering to delivery, we've built the platform researchers actually want to use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Verified Purity',
                desc: 'Every batch is HPLC-tested and verified at >99% purity. Certificates of analysis available for your records.'
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                title: 'Wholesale Pricing',
                desc: 'Direct manufacturer pricing at 25% net margin. No middlemen. Volume discounts for institutional orders.'
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Rapid Fulfillment',
                desc: 'Orders processed in 24-48 hours. Cold-chain shipping available. Real-time inventory and tracking.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:border-sky-100 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories Preview ─────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-sm font-medium mb-4 border border-sky-100">
              🧪 Research Categories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              180 Products Across 12 Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything from incretin research to nootropics, cosmetic peptides to mitochondrial modulators.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Incretin/GLP-1', icon: '🧬', count: '22' },
              { name: 'GH Secretagogues', icon: '📈', count: '20' },
              { name: 'Healing & Recovery', icon: '🩹', count: '14' },
              { name: 'Metabolic', icon: '⚡', count: '24' },
              { name: 'Cosmetic/Skin', icon: '✨', count: '11' },
              { name: 'Nootropics', icon: '🧠', count: '19' },
              { name: 'Longevity/NAD+', icon: '⏳', count: '17' },
              { name: 'Immune', icon: '🛡️', count: '12' },
              { name: 'Sexual Health', icon: '❤️', count: '9' },
              { name: 'Pain & Inflammation', icon: '💊', count: '6' },
              { name: 'Blends', icon: '🧪', count: '13' },
              { name: 'Supplies', icon: '📦', count: '13' },
            ].map((cat, i) => (
              <div
                key={cat.name}
                className={`bg-white border border-slate-100 rounded-xl p-5 text-center hover:border-sky-200 hover:shadow-md transition-all cursor-pointer group ${i >= 12 ? 'col-span-2 sm:col-span-1' : ''}`}
                onClick={() => onNavigate('calculator')}
              >
                <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform inline-block">{cat.icon}</span>
                <h3 className="text-slate-900 font-semibold text-sm">{cat.name}</h3>
                <p className="text-xs text-sky-500 mt-1 font-medium">{cat.count} products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-sm font-medium mb-4 border border-sky-100">
              🔐 How to Get Started
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Simple Access for Researchers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Request Access', desc: 'Fill out a brief researcher verification form. We review within 24 hours.' },
              { step: '2', title: 'Browse & Order', desc: 'Access our full catalog of 180+ products. Cart checkout with volume pricing.' },
              { step: '3', title: 'Fast Delivery', desc: 'Orders ship within 24-48 hours. Cold-chain options available. Tracking provided.' },
            ].map((item, i) => (
              <div key={item.step} className="text-center relative">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg shadow-sky-500/25">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-sky-200 -z-10" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('request-access')}
              className="px-10 py-4 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-bold rounded-xl shadow-xl hover:shadow-sky-500/25 hover:from-sky-400 hover:to-blue-400 transition-all text-lg"
            >
              Apply for Researcher Access →
            </button>
          </div>
        </div>
      </section>

      {/* ── Free Tools Teaser ──────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-sky-200 text-sm font-medium mb-4 border border-white/10">
            🧮 Free Research Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Peptide Dosage Calculator
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            The most comprehensive free peptide dosage tool on the web. Input your reconstitution, 
            get precise unit calculations with visual syringe indicator. 22+ peptides supported.
          </p>
          <button
            onClick={() => onNavigate('calculator')}
            className="px-8 py-3 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg"
          >
            Try the Calculator →
          </button>
        </div>
      </section>
    </div>
  );
}