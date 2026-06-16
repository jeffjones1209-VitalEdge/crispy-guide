export default function SyringeIndicator({ units = 0, maxUnits = 100 }) {
  const clampedUnits = Math.max(0, Math.min(units, maxUnits));
  const fillPercent = (clampedUnits / maxUnits) * 100;

  // Grid lines at every 10 units
  const gridLines = [];
  for (let i = 0; i <= 10; i++) {
    const y = 10 + (i * 230) / 10;
    const label = i * 10;
    const isMajor = i % 5 === 0;
    gridLines.push(
      <g key={i}>
        <line
          x1={isMajor ? 50 : 60}
          y1={y}
          x2={100}
          y2={y}
          stroke="#d1d5db"
          strokeWidth={isMajor ? 1.5 : 0.8}
        />
        <text x={isMajor ? 42 : 52} y={y + 4} textAnchor="end" className="text-[8px]" fill="#9ca3af">
          {label}
        </text>
      </g>
    );
  }

  // The fill height
  const fillHeight = (fillPercent / 100) * 230;

  return (
    <div className="flex flex-col items-center">
      <svg
        width="120"
        height="280"
        viewBox="0 0 120 280"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="syringeFill" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#19a873" />
            <stop offset="100%" stopColor="#3dc78e" />
          </linearGradient>
          <linearGradient id="barrelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="50%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
          <clipPath id="barrelClip">
            <rect x="55" y="10" width="45" height="230" rx="3" />
          </clipPath>
        </defs>

        {/* Barrel background */}
        <rect
          x="55"
          y="10"
          width="45"
          height="230"
          rx="3"
          fill="url(#barrelGrad)"
          stroke="#d1d5db"
          strokeWidth="1"
        />

        {/* Fill inside barrel */}
        {fillPercent > 0 && (
          <rect
            x="56"
            y={240 - fillHeight}
            width="43"
            height={fillHeight}
            rx="2"
            fill="url(#syringeFill)"
            opacity="0.85"
            clipPath="url(#barrelClip)"
          />
        )}

        {/* Grid lines */}
        {gridLines}

        {/* Syringe tip (needle base) */}
        <rect x="75" y="0" width="5" height="12" rx="1" fill="#9ca3af" />
        <polygon points="73,0 82,0 80,-4 76,-4" fill="#6b7280" />

        {/* Plunger at top */}
        <rect x="72" y={10 + (230 - Math.min(fillHeight + 5, 230))} width="11" height="4" rx="1" fill="#6b7280" />
        <line
          x1="77"
          y1={14 + (230 - Math.min(fillHeight + 5, 230))}
          x2="77"
          y2="250"
          stroke="#6b7280"
          strokeWidth="2"
        />
        <rect x="68" y="248" width="18" height="8" rx="2" fill="#4b5563" />

        {/* Unit labels on right */}
        <text x="108" y="20" textAnchor="start" className="text-[7px]" fill="#9ca3af">100</text>
        <text x="108" y="70" textAnchor="start" className="text-[7px]" fill="#9ca3af">75</text>
        <text x="108" y="130" textAnchor="start" className="text-[7px]" fill="#9ca3af">50</text>
        <text x="108" y="190" textAnchor="start" className="text-[7px]" fill="#9ca3af">25</text>
        <text x="108" y="245" textAnchor="start" className="text-[7px]" fill="#9ca3af">0</text>
      </svg>

      {/* Dose readout */}
      <div className="text-center mt-1">
        <div className="text-2xl font-bold text-brand-600">{clampedUnits}</div>
        <div className="text-xs text-gray-400">units on 100-unit syringe</div>
      </div>

      {/* Quick visual indicator string */}
      <div className="w-full max-w-[140px] mt-1 bg-gray-100 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-500 transition-all duration-300 ease-out"
          style={{ width: `${fillPercent}%` }}
        />
      </div>
    </div>
  );
}