import { useEffect } from 'react'
import './Gurt.css'

/**
 * Gurt - The yogurt character that says "Yo!"
 */
export default function Gurt({ isVisible, onInteract }) {
  useEffect(() => {
    // Reset animation when visibility changes
    if (isVisible) {
      // Animation will be triggered by CSS classes
    }
  }, [isVisible])

  return (
    <div 
      className={`gurt-container ${isVisible ? 'visible' : ''}`}
      onClick={onInteract}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onInteract()
        }
      }}
      aria-label="Gurt - Click to hear 'Yo!'"
    >
      <div className="speech-bubble">Yo!</div>
      <div className="gurt-body">
        <div className="gurt-lid"></div>
        <div className="gurt-face">
          <div className="gurt-eyes-container">
            <div className="gurt-eye"></div>
            <div className="gurt-eye"></div>
          </div>
          <div className="gurt-mouth"></div>
        </div>
        <div className="gurt-nametag">Gurt</div>
        <div className="gurt-arm left"></div>
        <div className="gurt-arm right"></div>
      </div>
    </div>
  )
}
