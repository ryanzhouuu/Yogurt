import { useMemo } from 'react'
import './ParticleBackground.css'

/**
 * ParticleBackground - Creates subtle animated floating particles
 */
export default function ParticleBackground() {
  const particles = useMemo(
    () => {
      const particleCount = 20
      return Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        size: Math.random() * 20 + 8,
        left: Math.random() * 100,
        bottom: Math.random() * 20 - 20,
        duration: Math.random() * 15 + 15,
        delay: Math.random() * 10,
        color: ['rgba(255, 182, 193, 0.15)', 'rgba(176, 224, 230, 0.15)', 'rgba(255, 255, 255, 0.3)'][
          Math.floor(Math.random() * 3)
        ],
      }))
    },
    []
  )

  return (
    <div className="yogurt-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            bottom: `${particle.bottom}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            backgroundColor: particle.color,
          }}
        />
      ))}
    </div>
  )
}