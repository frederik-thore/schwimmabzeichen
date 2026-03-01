import styles from './Mascot.module.css'

interface Props {
  celebrating?: boolean
  size?: number
  className?: string
}

export default function Mascot({ celebrating = false, size = 90, className }: Props) {
  return (
    <div
      className={`${styles.wrapper} ${celebrating ? styles.celebrating : styles.idle} ${className ?? ''}`}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size * 0.65}
        viewBox="0 0 160 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tail fins */}
        <path d="M28 52 Q8 32 16 24 Q26 36 28 52Z" fill="#0284c7" />
        <path d="M28 52 Q8 72 16 80 Q26 68 28 52Z" fill="#0284c7" />

        {/* Body */}
        <ellipse cx="85" cy="52" rx="60" ry="27" fill="#38bdf8" />

        {/* Belly */}
        <ellipse cx="93" cy="60" rx="44" ry="14" fill="#bae6fd" />

        {/* Dorsal fin */}
        <path d="M80 25 Q91 8 100 25Z" fill="#0284c7" />

        {/* Pectoral fin */}
        <path d="M90 66 Q78 82 68 74 Q76 62 90 66Z" fill="#0ea5e9" />

        {/* Head */}
        <ellipse cx="136" cy="52" rx="20" ry="20" fill="#38bdf8" />

        {/* Snout */}
        <path d="M152 52 Q160 50 158 54 Q156 58 152 56Z" fill="#38bdf8" />

        {/* Eye white */}
        <circle cx="140" cy="46" r="6" fill="white" />
        {/* Eye pupil */}
        <circle cx="141" cy="46" r="3.5" fill="#1e3a5f" />
        {/* Eye shine */}
        <circle cx="142" cy="44" r="1.2" fill="white" />

        {/* Smile */}
        <path
          d="M146 56 Q152 62 158 56"
          stroke="#0369a1"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
