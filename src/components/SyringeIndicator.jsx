export default function SyringeIndicator({ units = 0, maxUnits = 100 }) {
  const clampedUnits = Math.max(0, Math.min(units, maxUnits));
  const fillPercent = (clampedUnits / maxUnits) * 100;
  const fillHeight = (fillPercent / 100) * 230;

  // Tick marks
  const ticks = [];
  for (let i = 0; i <= 10; i++) {
    const y = 10 + (i * 230) / 10;
    const label = i * 10;
    const isMajor = i % 5 === 0;
    ticks.push(
      <g key={i}>
        <line
          x1={isMajor ? 50 : 58}
          y1={y}
          x2={72}
          y2={y}
          stroke="#9ca3af"
          strokeWidth={isMajor ? 1.5 : 0.8}
        />
        <text x={isMajor ? 44 : 54} y={y + 3} textAnchor="end" fontSize="7" fill="#9ca3af">
          {label}
        </text>
      </g>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <svg width="130" height="280" viewBox="0 0 130 280" className="overflow-visible">
        <defs>
          <linearGradient id="barrelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="15%" stopColor="#f9fafb" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="85%" stopColor="#f9fafb" />
            <stop offset="100%" stopColor="#d1d5db" />
          </linearGradient>
          <linearGradient id="fluidGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0d8b5e" />
            <stop offset="50%" stopColor="#19a873" />
            <stop offset="100%" stopColor="#3dc78e" />
          </linearGradient>
          <clipPath id="barrelClip">
            <rect x="72" y="10" width="42" height="230" rx="3" />
          </clipPath>
        </defs>

        {/* Barrel shadow */}
        <rect x="74" y="15" width="42" height="230" rx="3" fill="rgba(0,0,0,0.05)" />

        {/* Barrel body */}
        <rect x="72" y="10" width="42" height="230" rx="3" fill="url(#barrelGrad)" stroke="#cbd5e1" strokeWidth="1.2" />

        {/* Fluid fill */}
        {fillPercent > 0 && (
          <g>
            <rect
              x="73"
              y={240 - fillHeight}
              width="40"
              height={fillHeight}
              rx="2"
              fill="url(#fluidGrad)"
              opacity="0.9"
              clipPath="url(#barrelClip)"
            />
            {/* Dose label inside barrel */}
            <text
              x="93"
              y={Math.max(30, 240 - fillHeight + fillHeight / 2 + 4)}
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill={fillPercent > 40 ? "white" : "#0d8b5e"}
            >
              {clampedUnits}u
            </text>
          </g>
        )}

        {/* Tick marks */}
        {ticks}

        {/* Needle tip */}
        <rect x="89" y="0" width="8" height="12" rx="2" fill="#9ca3af" />
        <polygon points="87,0 99,0 96,-5 90,-5" fill="#6b7280" />
        <line x1="93" y1="-5" x2="93" y2="-12" stroke="#6b7280" strokeWidth="1.5" />
        <line x1="87" y1="-12" x2="99" y2="-12" stroke="#6b7280" strokeWidth="1" />

        {/* Plunger */}
        <rect x="87" y={10 + Math.max(0, 230 - fillHeight - 3)} width="12" height="5" rx="2" fill="#64748b" />
        <line x1="93" y1={15 + Math.max(0, 230 - fillHeight - 3)} x2="93" y2="255" stroke="#64748b" strokeWidth="2.5" />
        <rect x="82" y="252" width="22" height="10" rx="3" fill="#475569" />

        {/* Right side labels */}
        <text x="117" y="20" fontSize="6" fill="#9ca3af">100</text>
        <text x="117" y="68" fontSize="6" fill="#9ca3af">75</text>
        <text x="117" y="130" fontSize="6" fill="#9ca3af">50</text>
        <text x="117" y="190" fontSize="6" fill="#9ca3af">25</text>
        <text x="117" y="245" fontSize="6" fill="#9ca3af">0</text>
      </svg>

      {/* Digital readout */}
      <div className="text-center mt-2">
        <div className="text-xl font-bold text-brand-600">{clampedUnits} units</div>
        <div className="text-[10px] text-gray-400">on a 100-unit (1ml) insulin syringe</div>
      </div>

      {/* Progress bar */}
      <div className="w-[120px] mt-2 bg-gray-100 rounded-full h-2.5 overflow-hidden ring-1 ring-gray-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-500 transition-all duration-300 ease-out"
          style={{ width: `${fillPercent}%` }}
        />
      </div>
    </div>
  );
}