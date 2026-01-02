// Казахский традиционный орнамент — қошқар мүйіз (рога барана) и түйе табан (верблюжий след)
export function KazakhOrnament({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Центральный ромб */}
      <path
        d="M150 5 L165 25 L150 45 L135 25 Z"
        fill="var(--gold)"
        stroke="var(--gold-dark)"
        strokeWidth="1"
      />
      <path
        d="M150 12 L158 25 L150 38 L142 25 Z"
        fill="var(--deep-blue)"
      />

      {/* Қошқар мүйіз — левая сторона */}
      <g fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M130 25 Q115 8 95 15 Q80 20 75 25 Q80 30 95 35 Q115 42 130 25" />
        <path d="M75 25 Q60 15 45 20 Q35 25 35 25 Q35 25 45 30 Q60 35 75 25" />
        <circle cx="35" cy="25" r="4" fill="var(--gold)" />
      </g>

      {/* Қошқар мүйіз — правая сторона (зеркально) */}
      <g fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M170 25 Q185 8 205 15 Q220 20 225 25 Q220 30 205 35 Q185 42 170 25" />
        <path d="M225 25 Q240 15 255 20 Q265 25 265 25 Q265 25 255 30 Q240 35 225 25" />
        <circle cx="265" cy="25" r="4" fill="var(--gold)" />
      </g>

      {/* Декоративные элементы — түйе табан */}
      <g fill="var(--burgundy)">
        <circle cx="105" cy="25" r="3" />
        <circle cx="195" cy="25" r="3" />
      </g>

      {/* Крайние завитки */}
      <g fill="none" stroke="var(--gold-light)" strokeWidth="1.5">
        <path d="M15 25 Q5 20 10 12 Q18 5 25 15" />
        <path d="M285 25 Q295 20 290 12 Q282 5 275 15" />
      </g>
    </svg>
  );
}

// Вертикальный разделитель с узором
export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 20"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="10" x2="20" y2="10" stroke="var(--gold)" strokeWidth="1" />
      <path d="M30 2 L38 10 L30 18 L22 10 Z" fill="var(--gold)" />
      <path d="M30 6 L34 10 L30 14 L26 10 Z" fill="var(--deep-blue)" />
      <line x1="40" y1="10" x2="60" y2="10" stroke="var(--gold)" strokeWidth="1" />
    </svg>
  );
}

// Фоновый паттерн с национальными мотивами
export function OrnamentPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="kazakh-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          {/* Қошқар мүйіз мини */}
          <path
            d="M40 10 Q30 5 25 15 Q22 25 30 30 Q38 25 35 15 Q32 8 40 10"
            fill="none"
            stroke="var(--deep-blue)"
            strokeWidth="1.5"
          />
          <path
            d="M40 10 Q50 5 55 15 Q58 25 50 30 Q42 25 45 15 Q48 8 40 10"
            fill="none"
            stroke="var(--deep-blue)"
            strokeWidth="1.5"
          />
          {/* Ромб */}
          <path d="M40 35 L48 45 L40 55 L32 45 Z" fill="var(--deep-blue)" />
          <path d="M40 40 L44 45 L40 50 L36 45 Z" fill="var(--gold)" />
          {/* Түйе табан — угловые элементы */}
          <circle cx="10" cy="40" r="3" fill="var(--burgundy)" />
          <circle cx="70" cy="40" r="3" fill="var(--burgundy)" />
          {/* Маленькие завитки */}
          <path d="M10 10 Q5 15 10 20" fill="none" stroke="var(--gold)" strokeWidth="1" />
          <path d="M70 10 Q75 15 70 20" fill="none" stroke="var(--gold)" strokeWidth="1" />
          <path d="M10 60 Q5 65 10 70" fill="none" stroke="var(--gold)" strokeWidth="1" />
          <path d="M70 60 Q75 65 70 70" fill="none" stroke="var(--gold)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kazakh-pattern)" />
    </svg>
  );
}

// Декоративная рамка
export function OrnamentFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Угловые орнаменты */}
      <svg className="absolute top-0 left-0 w-12 h-12" viewBox="0 0 50 50">
        <path d="M5 5 Q5 25 25 25 Q25 5 5 5" fill="none" stroke="var(--gold)" strokeWidth="2" />
        <circle cx="5" cy="5" r="3" fill="var(--gold)" />
      </svg>
      <svg className="absolute top-0 right-0 w-12 h-12" viewBox="0 0 50 50">
        <path d="M45 5 Q45 25 25 25 Q25 5 45 5" fill="none" stroke="var(--gold)" strokeWidth="2" />
        <circle cx="45" cy="5" r="3" fill="var(--gold)" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-12 h-12" viewBox="0 0 50 50">
        <path d="M5 45 Q5 25 25 25 Q25 45 5 45" fill="none" stroke="var(--gold)" strokeWidth="2" />
        <circle cx="5" cy="45" r="3" fill="var(--gold)" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-12 h-12" viewBox="0 0 50 50">
        <path d="M45 45 Q45 25 25 25 Q25 45 45 45" fill="none" stroke="var(--gold)" strokeWidth="2" />
        <circle cx="45" cy="45" r="3" fill="var(--gold)" />
      </svg>
      {children}
    </div>
  );
}

export default KazakhOrnament;
