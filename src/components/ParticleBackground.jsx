import { useEffect, useState } from 'react'
import './ParticleBackground.css'

/**
 * ParticleBackground - Creates animated floating particles
 */
export default function ParticleBackground() {
  const [particles] = useState(() => {
    const particleCount = 30
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 30 + 10,
      left: Math.random() * 100,
      bottom: Math.random() * 20 - 20,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
      color: ['rgba(255, 107, 157, 0.2)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 142, 142, 0.3)'][
        Math.floor(Math.random() * 3)
      ],
    }))
  })

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
