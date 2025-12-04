import { useEffect, useState } from 'react'
import './Gurt.css'

/**
 * Gurt - The yogurt character that says "Yo!"
 */
export default function Gurt({ showSpeechBubble, onInteract }) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (showSpeechBubble) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 600)
      return () => clearTimeout(timer)
    }
  }, [showSpeechBubble])

  return (
    <div 
      className="gurt-container"
      onClick={onInteract}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onInteract()
        }
      }}
      aria-label="Gurt - Click to interact"
    >
      {showSpeechBubble && (
        <div className={`speech-bubble ${isAnimating ? 'animating' : ''}`}>
          Yo!
        </div>
      )}
      <div className={`gurt-body ${isAnimating ? 'wiggle' : ''}`}>
        <div className="gurt-lid">
          <div className="lid-highlight"></div>
        </div>
        <div className="gurt-face">
          <div className="gurt-eyes-container">
            <div className="gurt-eye">
              <div className="eye-sparkle"></div>
            </div>
            <div className="gurt-eye">
              <div className="eye-sparkle"></div>
            </div>
          </div>
          <div className="gurt-mouth">
            <div className="mouth-tongue"></div>
          </div>
          <div className="gurt-cheeks">
            <div className="cheek left"></div>
            <div className="cheek right"></div>
          </div>
        </div>
        <div className="gurt-nametag">Gurt</div>
        <div className="gurt-arm left">
          <div className="arm-hand"></div>
        </div>
        <div className="gurt-arm right">
          <div className="arm-hand"></div>
        </div>
      </div>
    </div>
  )
}