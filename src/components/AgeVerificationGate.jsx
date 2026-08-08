import { useState, useEffect } from 'react';

const STORAGE_KEY = 'vitaledge_age_verified';
const EXPIRY_DAYS = 30;

export default function AgeVerificationGate() {
  const [visible, setVisible] = useState(false);
  const [researchChecked, setResearchChecked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        const elapsed = Date.now() - data.timestamp;
        if (elapsed < EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
          setVisible(false);
          return;
        }
      } catch {
        // Invalid stored data, show gate
      }
    }
    setVisible(true);
  }, []);

  // Lock body scroll when gate is visible
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  const handleYes = () => {
    if (!researchChecked) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ verified: true, timestamp: Date.now() })
    );
    setVisible(false);
  };

  const handleNo = () => {
    window.location.href = 'https://google.com';
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Prevent any scroll-through */}
      <div className="absolute inset-0" onClick={(e) => e.stopPropagation()} />

      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center relative overflow-hidden">
        {/* Decorative header */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-400 via-ocean-500 to-brand-400" />

        {/* Logo */}
        <div className="w-16 h-16 bg-gradient-to-br from-brand-400 to-ocean-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="text-white font-bold text-2xl">VE</span>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Welcome to VItalEdge
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Are you <strong className="text-gray-900">21 years of age</strong> or older?
        </p>

        {/* Research checkbox */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-left">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={researchChecked}
              onChange={(e) => setResearchChecked(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-amber-300 text-brand-600 focus:ring-brand-500 accent-brand-600"
            />
            <span className="text-xs text-amber-800 leading-relaxed">
              <strong>🔬 Research Purposes Only</strong>
              <br />
              I understand these products are for research purposes only and not for human consumption. By entering, I confirm I am 21+ and understand this content is for research purposes only.
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleNo}
            className="flex-1 py-3 px-6 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            No, I'm Under 21
          </button>
          <button
            onClick={handleYes}
            disabled={!researchChecked}
            className={`flex-1 py-3 px-6 rounded-xl text-white font-semibold shadow-md transition-all ${
              researchChecked
                ? 'bg-gradient-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600 hover:shadow-lg cursor-pointer'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Yes, I'm 21+
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Your verification is stored locally for {EXPIRY_DAYS} days.
        </p>
      </div>
    </div>
  );
}
