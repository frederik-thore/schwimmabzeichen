import styles from './Mascot.module.css'

interface Props {
  celebrating?: boolean
  size?: number
  className?: string
}

export default function Mascot({ celebrating = false, size = 80, className }: Props) {
  return (
    <span
      className={`${styles.mascot} ${celebrating ? styles.celebrate : styles.idle} ${className ?? ''}`}
      aria-hidden="true"
      style={{ display: 'inline-block', width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        {/* Körper */}
        <ellipse cx="50" cy="55" rx="28" ry="18" fill="#38bdf8" />
        {/* Bauch */}
        <ellipse cx="50" cy="58" rx="16" ry="10" fill="#e0f2fe" />
        {/* Kopf */}
        <ellipse cx="72" cy="50" rx="16" ry="13" fill="#38bdf8" />
        {/* Schnauze */}
        <ellipse cx="86" cy="52" rx="8" ry="5" fill="#7dd3fc" />
        {/* Auge */}
        <circle cx="78" cy="46" r="3" fill="#0c4a6e" />
        <circle cx="79" cy="45" r="1" fill="#fff" />
        {/* Schwanz-Flosse */}
        <path d="M22 55 Q10 45 8 38 Q18 46 22 48 Q10 58 8 68 Q18 62 22 60 Z" fill="#0284c7" />
        {/* Rücken-Flosse */}
        <path d="M55 37 Q62 28 70 32 Q64 38 58 40 Z" fill="#0284c7" />
        {/* Seiten-Flossen */}
        <path d="M52 60 Q45 70 40 72 Q46 64 50 62 Z" fill="#0284c7" />
        {/* Lächeln */}
        <path d="M82 54 Q86 58 90 54" stroke="#0c4a6e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </span>
  )
}
