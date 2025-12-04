import { useMemo } from 'react'
import './ParticleBackground.css'

/**
 * ParticleBackground - Creates a cool animated background with multiple layers
 */
export default function ParticleBackground() {
  const particles = useMemo(
    () => {
      const particleCount = 25
      return Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        size: Math.random() * 30 + 15,
        left: Math.random() * 100,
        bottom: Math.random() * 20 - 20,
        duration: Math.random() * 20 + 20,
        delay: Math.random() * 15,
        color: ['rgba(255, 255, 255, 0.1)', 'rgba(255, 182, 193, 0.15)', 'rgba(176, 224, 230, 0.15)', 'rgba(255, 255, 255, 0.2)'][
          Math.floor(Math.random() * 4)
        ],
      }))
    },
    []
  )

  const shapes = useMemo(
    () => {
      const shapeCount = 8
      return Array.from({ length: shapeCount }, (_, i) => ({
        id: i,
        size: Math.random() * 150 + 100,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 30 + 30,
        delay: Math.random() * 10,
        rotation: Math.random() * 360,
        shape: ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)],
      }))
    },
    []
  )

  return (
    <>
      <div className="background-layers">
        <div className="layer layer-1"></div>
        <div className="layer layer-2"></div>
        <div className="layer layer-3"></div>
      </div>
      
      <div className="floating-shapes">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className={`shape ${shape.shape}`}
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              animationDuration: `${shape.duration}s`,
              animationDelay: `${shape.delay}s`,
              transform: `rotate(${shape.rotation}deg)`,
            }}
          />
        ))}
      </div>

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
    </>
  )
}