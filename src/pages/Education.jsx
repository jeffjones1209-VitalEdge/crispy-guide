const articles = [
  {
    id: 1,
    title: 'Peptide Reconstitution: A Complete Guide',
    excerpt: 'Learn the proper technique for reconstituting research peptides with bacteriostatic water, including calculations and best practices.',
    category: 'Basics',
    readTime: '8 min',
    date: '2026-06-01',
  },
  {
    id: 2,
    title: 'Understanding Insulin Syringe Units',
    excerpt: 'A comprehensive breakdown of how to read and measure units on standard 100-unit insulin syringes for peptide dosing.',
    category: 'Dosing',
    readTime: '6 min',
    date: '2026-05-28',
  },
  {
    id: 3,
    title: 'BPC-157: Mechanisms and Research Applications',
    excerpt: 'Deep dive into how BPC-157 promotes tissue healing, its mechanisms of action, and current research findings.',
    category: 'Peptide Deep Dive',
    readTime: '12 min',
    date: '2026-05-20',
  },
  {
    id: 4,
    title: 'GLP-1 Agonists: Semaglutide vs Tirzepatide',
    excerpt: 'Compare the mechanisms, dosing protocols, and research outcomes of these two popular metabolic peptides.',
    category: 'Metabolic',
    readTime: '10 min',
    date: '2026-05-15',
  },
  {
    id: 5,
    title: 'Growth Hormone Secretagogues: Stacking Protocols',
    excerpt: 'An evidence-based look at stacking GHRPs with GHRHs for enhanced growth hormone release.',
    category: 'Protocols',
    readTime: '15 min',
    date: '2026-05-10',
  },
  {
    id: 6,
    title: 'Peptide Storage and Handling Best Practices',
    excerpt: 'Proper storage conditions, handling procedures, and shelf-life considerations for research peptides.',
    category: 'Basics',
    readTime: '5 min',
    date: '2026-05-05',
  },
  {
    id: 7,
    title: 'Mitochondrial Peptides: MOTS-c and SS-31',
    excerpt: 'Exploring the emerging research on mitochondrial-targeted peptides for cellular health and energy metabolism.',
    category: 'Peptide Deep Dive',
    readTime: '11 min',
    date: '2026-04-28',
  },
  {
    id: 8,
    title: 'The Science of Peptide Half-Lives',
    excerpt: 'Understanding peptide half-lives and how they impact dosing frequency and protocol design.',
    category: 'Dosing',
    readTime: '7 min',
    date: '2026-04-20',
  },
];

export default function Education() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-ocean-100 text-ocean-700 text-sm font-medium mb-4">
            📚 Research Library
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Learn About Peptides
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Evidence-based educational content about peptide research, dosing protocols, 
            and the latest scientific findings.
          </p>
        </div>

        {/* Featured Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {['Basics', 'Dosing', 'Protocols', 'Peptide Deep Dive', 'Metabolic', 'Recovery'].map(cat => (
            <button key={cat} className="card text-center py-4 hover:shadow-md transition-shadow">
              <h3 className="text-gray-900 font-semibold text-sm">{cat}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {articles.filter(a => a.category === cat).length} articles
              </p>
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map(article => (
            <article key={article.id} className="card cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-brand-50 text-brand-600 text-xs font-medium rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-gray-400">{article.readTime} read</span>
                <span className="text-xs text-gray-400">{article.date}</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2 hover:text-brand-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {article.excerpt}
              </p>
              <button className="mt-4 text-brand-600 text-sm font-medium hover:text-brand-700">
                Read more →
              </button>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-brand-500 to-ocean-600 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay Updated</h2>
          <p className="text-brand-100 mb-6 max-w-lg mx-auto">
            Get the latest peptide research articles and dosing guides delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <button className="bg-white text-brand-700 font-semibold px-6 py-2.5 rounded-lg hover:bg-brand-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
          <strong>⚠️ Disclaimer:</strong> The content on this page is for educational and research 
          purposes only. It does not constitute medical advice. Always consult with a qualified 
          healthcare professional before starting any research protocol or peptide regimen.
        </div>
      </div>
    </div>
  );
}