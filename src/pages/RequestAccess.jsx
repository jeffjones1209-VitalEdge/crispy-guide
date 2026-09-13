import { useState } from 'react';

export default function RequestAccess({ onNavigate }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    institution: '',
    researchArea: '',
    intendedUse: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const RESEARCH_AREAS = [
    'Metabolic Research',
    'Neuroscience',
    'Oncology',
    'Regenerative Medicine',
    'Peptide Chemistry',
    'Endocrinology',
    'Immunology',
    'Longevity/Aging',
    'Cosmetic Science',
    'Other',
  ];

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Required';
    if (!form.email.trim() || !form.email.includes('@')) e.email = 'Valid email required';
    if (!form.institution.trim()) e.institution = 'Required';
    if (!form.researchArea) e.researchArea = 'Select one';
    if (!form.intendedUse.trim()) e.intendedUse = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // In production: POST to backend / API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Application Submitted</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Thank you for your interest. Our team reviews applications within <strong>24 hours</strong>. 
            You'll receive an email at <strong className="text-sky-600">{form.email}</strong> once approved.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-left">
            <p className="text-xs text-amber-800">
              <strong>🔬 Note:</strong> All products are for research purposes only. 
              Access requires verified institutional or professional research credentials.
            </p>
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold rounded-xl hover:from-sky-400 hover:to-blue-400 transition-all"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-14 mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-sky-200 text-sm font-medium mb-4 border border-white/10">
            🔐 Researcher Verification
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Request Researcher Access</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Complete the form below to request access to our wholesale research catalog.
            Applications are typically reviewed within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>🔬 Research Use Only.</strong> All VItalEdge products are exclusively for laboratory 
            and institutional research purposes. By submitting this form, you confirm that you are a qualified 
            researcher seeking these materials for legitimate scientific research in compliance with all applicable laws.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
            <input
              type="text"
              value={form.fullName}
              onChange={e => { setForm(f => ({ ...f, fullName: e.target.value })); setErrors(e => ({ ...e, fullName: '' })); }}
              className={`w-full px-4 py-3 border rounded-xl text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all ${errors.fullName ? 'border-red-300 bg-red-50' : 'border-slate-200'}`}
              placeholder="Dr. Jane Smith"
            />
            {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
            <input
              type="email"
              value={form.email}
              onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(e => ({ ...e, email: '' })); }}
              className={`w-full px-4 py-3 border rounded-xl text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all ${errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200'}`}
              placeholder="researcher@institution.edu"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Institution */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Institution / Company *</label>
            <input
              type="text"
              value={form.institution}
              onChange={e => { setForm(f => ({ ...f, institution: e.target.value })); setErrors(e => ({ ...e, institution: '' })); }}
              className={`w-full px-4 py-3 border rounded-xl text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all ${errors.institution ? 'border-red-300 bg-red-50' : 'border-slate-200'}`}
              placeholder="University Research Lab, Biotech Inc."
            />
            {errors.institution && <p className="text-xs text-red-500 mt-1">{errors.institution}</p>}
          </div>

          {/* Research Area */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Primary Research Area *</label>
            <select
              value={form.researchArea}
              onChange={e => { setForm(f => ({ ...f, researchArea: e.target.value })); setErrors(e => ({ ...e, researchArea: '' })); }}
              className={`w-full px-4 py-3 border rounded-xl text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-white ${errors.researchArea ? 'border-red-300' : 'border-slate-200'}`}
            >
              <option value="">Select research area...</option>
              {RESEARCH_AREAS.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
            {errors.researchArea && <p className="text-xs text-red-500 mt-1">{errors.researchArea}</p>}
          </div>

          {/* Intended Use */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Intended Research Use *</label>
            <textarea
              value={form.intendedUse}
              onChange={e => { setForm(f => ({ ...f, intendedUse: e.target.value })); setErrors(e => ({ ...e, intendedUse: '' })); }}
              rows={4}
              className={`w-full px-4 py-3 border rounded-xl text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all resize-none ${errors.intendedUse ? 'border-red-300 bg-red-50' : 'border-slate-200'}`}
              placeholder="Briefly describe your research objectives and how these materials will be used in your laboratory studies..."
            />
            {errors.intendedUse && <p className="text-xs text-red-500 mt-1">{errors.intendedUse}</p>}
          </div>

          {/* Compliance checkbox */}
          <label className="flex items-start gap-3 cursor-pointer bg-sky-50 border border-sky-100 rounded-xl p-4">
            <input type="checkbox" required className="mt-0.5 w-4 h-4 rounded border-sky-300 text-sky-600 focus:ring-sky-500 accent-sky-600" />
            <span className="text-xs text-slate-700 leading-relaxed">
              <strong>I confirm that:</strong> I am a qualified researcher or laboratory professional. 
              All products will be used exclusively for in-vitro research and laboratory experiments. 
              I understand these materials are not for human consumption, clinical use, or resale without 
              proper licensing. I will comply with all applicable laws and regulations.
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-sky-500/25 hover:from-sky-400 hover:to-blue-400 transition-all text-lg"
          >
            Submit Application →
          </button>

          <p className="text-xs text-slate-400 text-center">
            By submitting, you agree to our Terms of Service and Privacy Policy. Your information is handled securely and never shared.
          </p>
        </form>
      </div>
    </div>
  );
}