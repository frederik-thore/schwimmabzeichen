import styles from './Mascot.module.css'

export type MascotState = 'idle' | 'celebrate'

interface Props {
  state?: MascotState
  className?: string
}

export default function Mascot({ state = 'idle', className }: Props) {
  return (
    <div
      className={`${styles.wrapper} ${state === 'celebrate' ? styles.celebrate : styles.idle} ${className ?? ''}`}
      aria-hidden="true"
    >
      {/* Dolphin SVG */}
      <svg
        viewBox="0 0 120 90"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
        aria-label="Delfin-Maskottchen"
      >
        {/* Tail */}
        <g className={styles.tail}>
          <path
            d="M20 47 Q8 36 13 46 Q6 57 20 49"
            fill="#0ea5e9"
            stroke="#0284c7"
            strokeWidth="0.8"
          />
        </g>

        {/* Body */}
        <ellipse
          cx="55"
          cy="47"
          rx="32"
          ry="18"
          fill="#38bdf8"
          stroke="#0284c7"
          strokeWidth="0.8"
        />

        {/* Belly */}
        <ellipse
          cx="58"
          cy="53"
          rx="22"
          ry="10"
          fill="#e0f2fe"
          opacity="0.7"
        />

        {/* Dorsal fin */}
        <g className={styles.dorsal}>
          <path
            d="M58 29 Q62 14 70 28"
            fill="#0ea5e9"
            stroke="#0284c7"
            strokeWidth="0.8"
          />
        </g>

        {/* Pectoral fin */}
        <path
          d="M65 57 Q72 66 60 60"
          fill="#0ea5e9"
          stroke="#0284c7"
          strokeWidth="0.8"
        />

        {/* Snout */}
        <path
          d="M87 46 Q100 43 96 49 Q100 54 87 52"
          fill="#38bdf8"
          stroke="#0284c7"
          strokeWidth="0.8"
        />

        {/* Eye */}
        <circle cx="83" cy="43" r="3.2" fill="#0c4a6e" />
        <circle cx="84" cy="42" r="1.1" fill="white" />

        {/* Smile */}
        <path
          d="M88 49 Q92 52 95 50"
          stroke="#0c4a6e"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Sparkles – only visible during celebrate */}
        <g className={styles.sparkles}>
          <text x="100" y="22" fontSize="12" textAnchor="middle">✨</text>
          <text x="14" y="28" fontSize="10" textAnchor="middle">⭐</text>
          <text x="108" y="62" fontSize="9" textAnchor="middle">✨</text>
        </g>
      </svg>
    </div>
  )
}
