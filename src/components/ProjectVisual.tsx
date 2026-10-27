import type { Project, ProjectAccent } from '../data/portfolio';

export const accentStyles: Record<ProjectAccent, { text: string; border: string; bg: string; stroke: string; fill: string }> = {
  emerald: { text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-500/30 dark:border-emerald-400/30', bg: 'bg-emerald-500/10', stroke: '#34d399', fill: '#064e3b' },
  amber: { text: 'text-amber-700 dark:text-amber-300', border: 'border-amber-500/30 dark:border-amber-400/30', bg: 'bg-amber-500/10', stroke: '#fbbf24', fill: '#78350f' },
  violet: { text: 'text-violet-700 dark:text-violet-300', border: 'border-violet-500/30 dark:border-violet-400/30', bg: 'bg-violet-500/10', stroke: '#a78bfa', fill: '#4c1d95' },
  rose: { text: 'text-rose-700 dark:text-rose-300', border: 'border-rose-500/30 dark:border-rose-400/30', bg: 'bg-rose-500/10', stroke: '#fb7185', fill: '#881337' },
};

/**
 * Shows the real screenshot when `project.image` is set; otherwise an abstract illustration
 * that is clearly labelled as such (never presented as a product screenshot).
 */
export function ProjectVisual({ project, className = '' }: { project: Project; className?: string }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  const { stroke, fill } = accentStyles[project.accent];

  return (
    // Illustrations stay dark in both themes so the coloured strokes keep their contrast.
    <div className={`relative h-full w-full overflow-hidden bg-[#10141f] ${className}`}>
      <svg viewBox="0 0 400 220" className="h-full w-full" role="img" aria-label={`Abstract illustration for ${project.name}`} preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={`glow-${project.id}`} cx="70%" cy="20%" r="80%">
            <stop offset="0%" stopColor={stroke} stopOpacity="0.28" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0" />
          </radialGradient>
          <pattern id={`dots-${project.id}`} width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#ffffff" fillOpacity="0.06" />
          </pattern>
        </defs>
        <rect width="400" height="220" fill={`url(#dots-${project.id})`} />
        <rect width="400" height="220" fill={`url(#glow-${project.id})`} />
        {project.id === 'paid' && <PaymentsArt stroke={stroke} fill={fill} />}
        {project.id === 'warehowz' && <WarehouseArt stroke={stroke} fill={fill} />}
        {project.id === 'mcspirit' && <CommunityArt stroke={stroke} fill={fill} />}
        {project.id === 'friendlyforce' && <MapArt stroke={stroke} fill={fill} />}
      </svg>
      <span className="absolute bottom-2 right-3 font-mono text-[10px] uppercase tracking-widest text-[#64748b]">
        Illustration
      </span>
    </div>
  );
}

interface ArtProps {
  stroke: string;
  fill: string;
}

function PaymentsArt({ stroke, fill }: ArtProps) {
  return (
    <g fill="none" stroke={stroke} strokeWidth="1.5">
      <rect x="40" y="60" width="130" height="82" rx="10" fill={fill} fillOpacity="0.5" />
      <rect x="40" y="80" width="130" height="14" fill={stroke} fillOpacity="0.25" stroke="none" />
      <line x1="56" y1="120" x2="110" y2="120" strokeOpacity="0.7" />
      <path d="M180 101 H230" strokeDasharray="4 5" />
      <circle cx="262" cy="101" r="30" fill={fill} fillOpacity="0.5" />
      <path d="M250 101 l8 8 l16 -16" strokeWidth="2.5" />
      <path d="M292 101 H330" strokeDasharray="4 5" />
      <rect x="330" y="76" width="44" height="50" rx="8" fill={fill} fillOpacity="0.4" />
      <line x1="340" y1="92" x2="364" y2="92" />
      <line x1="340" y1="102" x2="358" y2="102" strokeOpacity="0.6" />
      <line x1="340" y1="112" x2="362" y2="112" strokeOpacity="0.6" />
      <path d="M60 175 L110 160 L160 168 L210 148 L260 154 L310 132 L360 138" strokeOpacity="0.55" />
    </g>
  );
}

function WarehouseArt({ stroke, fill }: ArtProps) {
  const boxes = [0, 1, 2, 3].flatMap((col) => [0, 1].map((row) => ({ col, row })));
  return (
    <g fill="none" stroke={stroke} strokeWidth="1.5">
      <path d="M70 92 L200 40 L330 92 V185 H70 Z" fill={fill} fillOpacity="0.35" />
      {boxes.map(({ col, row }) => (
        <rect key={`${col}-${row}`} x={100 + col * 52} y={110 + row * 36} width="40" height="28" rx="3" fill={stroke} fillOpacity={0.08 + ((col + row) % 3) * 0.08} />
      ))}
      <line x1="40" y1="185" x2="360" y2="185" strokeOpacity="0.6" />
      <circle cx="340" cy="50" r="5" fill={stroke} />
      <path d="M340 55 V75" strokeDasharray="3 4" />
    </g>
  );
}

function CommunityArt({ stroke, fill }: ArtProps) {
  const nodes = [
    { x: 200, y: 110, r: 22 },
    { x: 110, y: 70, r: 13 },
    { x: 95, y: 155, r: 11 },
    { x: 290, y: 65, r: 14 },
    { x: 310, y: 155, r: 12 },
    { x: 200, y: 185, r: 9 },
    { x: 200, y: 35, r: 9 },
  ];
  return (
    <g fill="none" stroke={stroke} strokeWidth="1.5">
      {nodes.slice(1).map((n) => (
        <line key={`${n.x}-${n.y}`} x1={200} y1={110} x2={n.x} y2={n.y} strokeOpacity="0.45" />
      ))}
      <path d="M110 70 Q200 20 290 65" strokeOpacity="0.3" strokeDasharray="4 5" />
      <path d="M95 155 Q200 215 310 155" strokeOpacity="0.3" strokeDasharray="4 5" />
      {nodes.map((n, i) => (
        <circle key={`${n.x}-${n.y}`} cx={n.x} cy={n.y} r={n.r} fill={i === 0 ? stroke : fill} fillOpacity={i === 0 ? 0.35 : 0.55} />
      ))}
    </g>
  );
}

function MapArt({ stroke, fill }: ArtProps) {
  return (
    <g fill="none" stroke={stroke} strokeWidth="1.5">
      <path d="M20 160 C90 130 120 175 190 150 S300 110 380 135" strokeOpacity="0.25" />
      <path d="M20 90 C100 70 150 105 220 85 S330 60 380 75" strokeOpacity="0.25" />
      <circle cx="200" cy="110" r="70" strokeOpacity="0.2" />
      <circle cx="200" cy="110" r="45" strokeOpacity="0.35" />
      <circle cx="200" cy="110" r="20" fill={fill} fillOpacity="0.6" />
      <circle cx="200" cy="110" r="5" fill={stroke} />
      {[
        [130, 70],
        [275, 85],
        [250, 160],
        [140, 160],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <path d={`M${x} ${y} c-8 -10 -8 -20 0 -24 c8 4 8 14 0 24 z`} fill={fill} fillOpacity="0.7" />
          <line x1={x} y1={y} x2={200} y2={110} strokeDasharray="3 5" strokeOpacity="0.35" />
        </g>
      ))}
    </g>
  );
}
