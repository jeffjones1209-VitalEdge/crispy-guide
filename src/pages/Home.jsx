export default function Home({ onNavigate }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-pattern py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-500/3 blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-ocean-500/3 blur-3xl" />
        <div className="absolute top-40 right-1/4 w-4 h-4 rounded-full bg-brand-400/20" />
        <div className="absolute bottom-20 left-1/3 w-3 h-3 rounded-full bg-ocean-400/20" />
        <div className="absolute top-1/3 left-2/3 w-6 h-6 rounded-full border-2 border-brand-300/20 rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 border-2 border-ocean-300/20 rotate-12" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-100/80 text-brand-700 text-sm font-medium mb-6 backdrop-blur-sm border border-brand-200/50">
              🧬 Precision Tools for Peptide Research
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Know Your Dose.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-ocean-500">
                Own Your Edge.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              The most comprehensive free peptide dosage calculator. 
              Research, reconstitute, and schedule with precision — so you never 
              have to guess your units again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('calculator')}
                className="btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl"
              >
                Try the Dosage Tool →
              </button>
              <button
                onClick={() => onNavigate('products')}
                className="btn-outline text-lg px-8 py-3 bg-white/80 backdrop-blur-sm"
              >
                Browse Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-subtle-grid opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ocean-50 text-ocean-600 text-sm font-medium mb-4 border border-ocean-100">
              ⚡ Everything You Need
            </div>
            <h2 className="section-title">Precision Dosing, Simplified</h2>
            <p className="section-subtitle mx-auto">
              Free tools, trusted data, and seamless reordering — all in one platform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-100 to-brand-50 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Dosage Calculator</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Instantly convert mg to units/ml for any peptide. Input your reconstitution 
                and get precise dosing with a <strong className="text-brand-600">visual syringe indicator</strong>.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs text-brand-500 font-medium">22+ peptides supported</span>
              </div>
            </div>
            <div className="card-premium text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-ocean-100 to-ocean-50 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scheduling & Reminders</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Set your frequency and get a full schedule. Know exactly when you'll 
                run out and when to reorder — <strong className="text-ocean-600">never miss a research cycle</strong>.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs text-ocean-500 font-medium">Smart run-out predictions</span>
              </div>
            </div>
            <div className="card-premium text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-100 to-brand-50 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wholesale Dropshipping</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Order your researched peptides at <strong className="text-brand-600">wholesale pricing</strong>. 
                Seamless checkout from within the dosage tool.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs text-brand-500 font-medium">Volume discounts available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-20 bg-section-pattern relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-4 border border-brand-100">
              🔬 Browse by Category
            </div>
            <h2 className="section-title">Find Your Peptide</h2>
            <p className="section-subtitle mx-auto">
              From recovery to metabolic health — research peptides across key categories.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Recovery', icon: '🛡️', desc: 'BPC-157, TB-500' },
              { name: 'Cosmetic', icon: '✨', desc: 'GHK-Cu' },
              { name: 'Longevity', icon: '⏳', desc: 'NAD+' },
              { name: 'Wellness', icon: '🧠', desc: 'Selank, Semax' },
              { name: 'Metabolic', icon: '⚡', desc: 'SEMA, TZP' },
            ].map((cat) => (
              <div key={cat.name} className="card-premium text-center py-6 cursor-pointer group" onClick={() => onNavigate('calculator')}>
                <span className="text-2xl block mb-2">{cat.icon}</span>
                <h3 className="text-gray-900 font-semibold group-hover:text-brand-600 transition-colors">{cat.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '22+', label: 'Peptides', sub: 'In our database' },
              { number: '100%', label: 'Free Tool', sub: 'No paywall ever' },
              { number: '5', label: 'Categories', sub: 'Comprehensive' },
              { number: '24/7', label: 'Access', sub: 'Always available' },
            ].map(s => (
              <div key={s.label} className="text-white">
                <div className="text-3xl font-bold mb-1">{s.number}</div>
                <div className="text-brand-100 font-medium text-sm">{s.label}</div>
                <div className="text-brand-200/70 text-xs mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-500/3 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-ocean-500/3 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-4 border border-brand-100">
            🚀 Get Started Free
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Dose with Confidence?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Built for the research community. VItalEdge provides precise, reliable peptide calculation tools.
            The tool is free — <strong className="text-brand-600">always</strong>.
          </p>
          <button
            onClick={() => onNavigate('calculator')}
            className="bg-gradient-to-r from-brand-500 to-ocean-500 text-white font-bold py-3 px-10 rounded-lg text-lg hover:from-brand-600 hover:to-ocean-600 transition-all shadow-lg hover:shadow-xl"
          >
            Launch Dosage Calculator →
          </button>
        </div>
      </section>
    </div>
  );
}
