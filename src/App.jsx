import { useState, useEffect, useCallback, useRef } from 'react'
import ParticleBackground from './components/ParticleBackground'
import CenterBox from './components/CenterBox'
import Gurt from './components/Gurt'
import { useAudio } from './hooks/useAudio'
import './App.css'

function App() {
  const [isGurtVisible, setIsGurtVisible] = useState(false)
  const { playSillySound } = useAudio()
  const hideTimerRef = useRef(null)

  const showGurt = useCallback(() => {
    playSillySound()
    setIsGurtVisible(true)
  }, [playSillySound])

  // Auto-hide Gurt after 4 seconds when visible
  useEffect(() => {
    if (isGurtVisible) {
      // Clear any existing timer
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current)
      }
      
      // Set new timer
      hideTimerRef.current = setTimeout(() => {
        setIsGurtVisible(false)
        hideTimerRef.current = null
      }, 4000)

      return () => {
        if (hideTimerRef.current) {
          clearTimeout(hideTimerRef.current)
          hideTimerRef.current = null
        }
      }
    }
  }, [isGurtVisible])

  const handleGurtInteract = useCallback(() => {
    // When user clicks on Gurt, he says "Yo!" again
    playSillySound()
    
    // Reset animation by toggling visibility
    setIsGurtVisible(false)
    
    // Clear existing timer
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
      hideTimerRef.current = null
    }
    
    // Force re-render after a brief moment and reset the timer
    setTimeout(() => {
      setIsGurtVisible(true)
    }, 50)
  }, [playSillySound])

  return (
    <div className="app">
      <ParticleBackground />
      <CenterBox onTriggerGurt={showGurt} />
      <Gurt isVisible={isGurtVisible} onInteract={handleGurtInteract} />
    </div>
  )
}

export default App
