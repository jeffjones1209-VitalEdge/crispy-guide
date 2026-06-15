export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-ocean-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VE</span>
              </div>
              <span className="text-xl font-bold text-white">
                VItal<span className="text-brand-400">Edge</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Precision peptide tools, dosing education, and trusted resources for the 
              research community. Knowledge is the edge.
            </p>
            <p className="text-xs mt-4 text-gray-500">
              For research purposes only. Not for human consumption. 
              Consult a qualified healthcare professional before starting any protocol.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Dosage Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Peptide Catalog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research Library</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs">
          <p>&copy; {new Date().getFullYear()} VItalEdge. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Made for the research community.
          </p>
        </div>
      </div>
    </footer>
  );
}