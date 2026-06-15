export default function Home({ onNavigate }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-brand-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6">
              🧬 Precision Tools for Peptide Research
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Know Your Dose.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-ocean-500">
                Own Your Edge.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
              The most comprehensive free peptide dosage calculator. 
              Research, reconstitute, and schedule with precision — so you never 
              have to guess your units again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('calculator')}
                className="btn-primary text-lg px-8 py-3"
              >
                Try the Dosage Tool →
              </button>
              <button
                onClick={() => onNavigate('products')}
                className="btn-outline text-lg px-8 py-3"
              >
                Browse Peptides
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Everything You Need for Precision Dosing</h2>
            <p className="section-subtitle mx-auto">
              Free tools, trusted data, and seamless reordering — all in one platform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Dosage Calculator</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Instantly convert mg to units/ml for any peptide. Input your reconstitution 
                and get precise dosing for every research protocol.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-14 h-14 bg-ocean-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scheduling & Reminders</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Set your frequency and get a full schedule. Know exactly when you'll 
                run out and when to reorder — never break protocol.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wholesale Dropshipping</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Order your researched peptides at wholesale pricing. Seamless checkout 
                from within the dosage tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Peptide Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Browse by Category</h2>
            <p className="section-subtitle mx-auto">
              From recovery to metabolic health — find the peptide you need.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Recovery', 'Metabolic', 'Growth Hormone', 'Cosmetic', 'Mitochondrial', 'Wellness', 'Longevity', 'Immune'].map((cat) => (
              <div key={cat} className="card text-center py-6 cursor-pointer hover:shadow-md" onClick={() => onNavigate('calculator')}>
                <h3 className="text-gray-900 font-semibold">{cat}</h3>
                <p className="text-sm text-gray-500 mt-1">View peptides →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-ocean-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Dose with Confidence?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
            Join thousands of researchers using VItalEdge for precise, reliable peptide dosing.
            The tool is free — always.
          </p>
          <button
            onClick={() => onNavigate('calculator')}
            className="bg-white text-brand-700 font-bold py-3 px-10 rounded-lg text-lg hover:bg-brand-50 transition-colors shadow-lg"
          >
            Launch Dosage Calculator
          </button>
        </div>
      </section>
    </div>
  );
}