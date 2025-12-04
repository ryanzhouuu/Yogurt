import { useEffect, useState, useRef } from 'react'
import './Gurt.css'

/**
 * Gurt - The yogurt character that says "Yo!"
 */
export default function Gurt({ showSpeechBubble, onInteract }) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [position, setPosition] = useState(null) // null = default centered position
  const [isDragging, setIsDragging] = useState(false)
  const dragOffsetRef = useRef({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const hasMovedRef = useRef(false)

  useEffect(() => {
    if (showSpeechBubble) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 600)
      return () => clearTimeout(timer)
    }
  }, [showSpeechBubble])

  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e) => {
      e.preventDefault()
      
      const newX = e.clientX - dragOffsetRef.current.x
      const newY = e.clientY - dragOffsetRef.current.y
      
      // Check if we've moved significantly from start
      if (!hasMovedRef.current && (Math.abs(newX - (position?.x || window.innerWidth / 2)) > 5 || 
          Math.abs(newY - (position?.y || window.innerHeight - window.innerHeight * 0.1)) > 5)) {
        hasMovedRef.current = true
      }
      
      setPosition({ x: newX, y: newY })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setTimeout(() => {
        hasMovedRef.current = false
      }, 100)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: false })
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, position])

  const handleMouseDown = (e) => {
    e.preventDefault()
    hasMovedRef.current = false
    
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Calculate offset from mouse to center of container
      dragOffsetRef.current = {
        x: e.clientX - centerX,
        y: e.clientY - centerY,
      }
      
      // Initialize position if needed
      if (position === null) {
        const defaultX = window.innerWidth / 2
        const defaultY = window.innerHeight - (window.innerHeight * 0.1)
        setPosition({ x: defaultX, y: defaultY })
      }
      
      setIsDragging(true)
    }
  }

  const handleClick = (e) => {
    if (!hasMovedRef.current) {
      onInteract()
    }
  }

  const getPositionStyle = () => {
    if (position === null) {
      return {
        left: '50%',
        bottom: '10vh',
        top: 'auto',
        transform: 'translateX(-50%)',
      }
    }
    return {
      left: `${position.x}px`,
      top: `${position.y}px`,
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    }
  }

  return (
    <div 
      ref={containerRef}
      className={`gurt-container ${isDragging ? 'dragging' : ''}`}
      style={{
        ...getPositionStyle(),
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onInteract()
        }
      }}
      aria-label="Gurt - Click to interact or drag to move"
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