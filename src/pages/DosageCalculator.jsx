import { useState, useMemo } from 'react';
import { peptides, categories, calculateDosage, estimateRunOut } from '../data/peptides';

export default function DosageCalculator() {
  const [selectedPeptide, setSelectedPeptide] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [mgPeptide, setMgPeptide] = useState('');
  const [mlWater, setMlWater] = useState('1');
  const [desiredDose, setDesiredDose] = useState('');
  const [frequencyHours, setFrequencyHours] = useState('24');
  const [totalMgVial, setTotalMgVial] = useState('');
  const [showSchedule, setShowSchedule] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSaved, setEmailSaved] = useState(false);

  const filteredPeptides = useMemo(() => {
    return peptides.filter(p => {
      const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
      const matchesSearch = searchTerm === '' || 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.fullName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [categoryFilter, searchTerm]);

  const peptide = peptides.find(p => p.id === selectedPeptide);

  const results = useMemo(() => {
    if (!peptide || !mgPeptide || !mlWater || !desiredDose) return null;
    const mgNum = parseFloat(mgPeptide);
    const mlNum = parseFloat(mlWater);
    const doseNum = parseFloat(desiredDose);
    if (!mgNum || !mlNum || !doseNum) return null;
    return calculateDosage(mgNum, mlNum, doseNum);
  }, [peptide, mgPeptide, mlWater, desiredDose]);

  const runOutInfo = useMemo(() => {
    if (!parseFloat(desiredDose) || !parseFloat(frequencyHours) || !parseFloat(totalMgVial)) return null;
    return estimateRunOut(
      parseFloat(desiredDose),
      parseFloat(frequencyHours),
      parseFloat(totalMgVial)
    );
  }, [desiredDose, frequencyHours, totalMgVial]);

  const generateSchedule = () => {
    if (!runOutInfo || runOutInfo.dosesAvailable > 365) return [];
    const schedule = [];
    const now = new Date();
    for (let i = 0; i < Math.min(runOutInfo.dosesAvailable, 30); i++) {
      const doseTime = new Date(now.getTime() + i * parseFloat(frequencyHours) * 60 * 60 * 1000);
      schedule.push({
        dose: i + 1,
        time: doseTime,
        remaining: runOutInfo.dosesAvailable - i,
      });
    }
    return schedule;
  };

  const schedule = showSchedule ? generateSchedule() : [];

  const handleSaveEmail = () => {
    if (email && email.includes('@')) {
      setEmailSaved(true);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
            🔬 Free Tool — No Signup Required
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Peptide Dosage Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your peptide, enter your reconstitution, and get instant dosage conversions.
            Never guess your insulin syringe units again.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column: Peptide Selection + Reconstitution */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search & Filter */}
            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">1. Find Your Peptide</h2>
              <input
                type="text"
                placeholder="Search peptides..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="input-field mb-3"
              />
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
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

            {/* Peptide List */}
            <div className="card max-h-96 overflow-y-auto">
              <div className="space-y-1">
                {filteredPeptides.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPeptide(p.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedPeptide === p.id
                        ? 'bg-brand-50 border border-brand-200'
                        : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-gray-900">{p.name}</span>
                        <span className="text-xs text-gray-500 ml-2">{p.category}</span>
                      </div>
                      {selectedPeptide === p.id && (
                        <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    {selectedPeptide === p.id && (
                      <p className="text-xs text-gray-500 mt-1">{p.fullName}</p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Reconstitution Inputs */}
            {peptide && (
              <div className="card">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">2. Reconstitution Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="label">Peptide in vial (mg)</label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      placeholder="e.g., 5"
                      value={mgPeptide}
                      onChange={e => setMgPeptide(e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="label">Bacteriostatic water added (ml)</label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      placeholder="e.g., 1 or 2"
                      value={mlWater}
                      onChange={e => setMlWater(e.target.value)}
                      className="input-field"
                    />
                    <p className="text-xs text-gray-400 mt-1">Standard is 1-2 ml of BAC water</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Results & Scheduling */}
          <div className="lg:col-span-3 space-y-6">
            {/* Dose Input */}
            {peptide && (
              <div className="card">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">3. Your Target Dose</h2>
                <div>
                  <label className="label">Desired dose (mg or mcg — use consistent units)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0.01"
                    placeholder="e.g., 0.25 for 250 mcg, or 1.0 for 1 mg"
                    value={desiredDose}
                    onChange={e => setDesiredDose(e.target.value)}
                    className="input-field"
                  />
                </div>

                {/* Common Dosages */}
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Common dosages for {peptide.name}:</p>
                  <div className="flex flex-wrap gap-2">
                    {peptide.commonDosages.map(d => (
                      <button
                        key={d.dose}
                        onClick={() => setDesiredDose(d.dose.replace(' mg', '').replace(' mcg', ''))}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                          desiredDose === d.dose.replace(' mg', '').replace(' mcg', '')
                            ? 'bg-ocean-50 border-ocean-300 text-ocean-700'
                            : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-ocean-300'
                        }`}
                        title={d.note}
                      >
                        {d.dose}
                        <span className="block text-gray-400 font-normal">{d.note}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Results Display */}
            {results && (
              <div className="card border-2 border-brand-200 bg-gradient-to-br from-white to-brand-50">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">📊 Results</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center border border-brand-100">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Concentration</p>
                    <p className="text-2xl font-bold text-brand-600">{results.concentration}</p>
                    <p className="text-xs text-gray-500">mg/ml</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center border border-brand-100">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Dose Volume</p>
                    <p className="text-2xl font-bold text-ocean-600">{results.doseMl}</p>
                    <p className="text-xs text-gray-500">ml</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center border border-brand-100 ring-2 ring-brand-300">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Insulin Syringe</p>
                    <p className="text-2xl font-bold text-brand-600">{results.doseUnits}</p>
                    <p className="text-xs text-gray-500">units (100-unit/1ml)</p>
                  </div>
                </div>
                <div className="mt-4 bg-brand-50 rounded-lg p-3 text-sm text-brand-800">
                  <strong>💉 How to draw:</strong> On a standard 100-unit (1ml) insulin syringe, 
                  draw to the <strong>{results.doseUnits} unit</strong> mark for a {desiredDose}mg dose.
                </div>
              </div>
            )}

            {/* Scheduling + Run Out */}
            {results && (
              <div className="card">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">📅 Smart Scheduling</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Dose frequency (hours)</label>
                    <select
                      value={frequencyHours}
                      onChange={e => setFrequencyHours(e.target.value)}
                      className="input-field"
                    >
                      <option value="4">Every 4 hours</option>
                      <option value="6">Every 6 hours</option>
                      <option value="8">Every 8 hours</option>
                      <option value="12">Every 12 hours</option>
                      <option value="24">Once daily (24h)</option>
                      <option value="48">Every 2 days (48h)</option>
                      <option value="72">Every 3 days (72h)</option>
                      <option value="168">Once weekly (168h)</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">Total mg in vial</label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      placeholder={mgPeptide || "e.g., 5"}
                      value={totalMgVial}
                      onChange={e => setTotalMgVial(e.target.value)}
                      className="input-field"
                    />
                  </div>
                </div>

                {runOutInfo && (
                  <div className="mt-4 grid sm:grid-cols-3 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-500">Doses Available</p>
                      <p className="text-xl font-bold text-gray-900">{runOutInfo.dosesAvailable}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-500">Days Until Empty</p>
                      <p className="text-xl font-bold text-gray-900">{runOutInfo.daysAvailable}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-500">Reorder By</p>
                      <p className="text-sm font-bold text-brand-600">
                        {runOutInfo.lastDoseDate.toLocaleDateString('en-US', { 
                          month: 'short', day: 'numeric', year: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                )}

                {runOutInfo && runOutInfo.dosesAvailable > 0 && (
                  <div className="mt-4">
                    <button
                      onClick={() => setShowSchedule(!showSchedule)}
                      className="text-brand-600 hover:text-brand-700 font-medium text-sm"
                    >
                      {showSchedule ? '▼ Hide Schedule' : '▶ Show Dose Schedule'}
                    </button>
                    {showSchedule && schedule.length > 0 && (
                      <div className="mt-3 max-h-48 overflow-y-auto bg-gray-50 rounded-lg p-3">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="text-left text-gray-500">
                              <th className="pb-2">#</th>
                              <th className="pb-2">Date & Time</th>
                              <th className="pb-2">Doses Left</th>
                            </tr>
                          </thead>
                          <tbody>
                            {schedule.map(s => (
                              <tr key={s.dose} className="border-t border-gray-100">
                                <td className="py-1.5 font-medium">{s.dose}</td>
                                <td className="py-1.5">
                                  {s.time.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                  {' at '}
                                  {s.time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                </td>
                                <td className="py-1.5 text-gray-500">{s.remaining}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Email Signup for Reminders */}
            {results && (
              <div className="card border-dashed border-2 border-brand-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">🔔 Get Reorder Reminders</h2>
                <p className="text-sm text-gray-600 mb-4">
                  We'll email you before you run out so you never miss a dose.
                </p>
                {emailSaved ? (
                  <div className="bg-green-50 text-green-700 rounded-lg p-3 text-sm font-medium">
                    ✅ You're signed up! We'll notify you before your reorder date.
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="input-field flex-1"
                    />
                    <button onClick={handleSaveEmail} className="btn-primary whitespace-nowrap">
                      Notify Me
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}