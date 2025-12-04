import { useState, useCallback } from 'react'
import ParticleBackground from './components/ParticleBackground'
import Gurt from './components/Gurt'
import './App.css'

function App() {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false)

  const handleGurtInteract = useCallback(() => {
    // When user clicks on Gurt, show the speech bubble
    setShowSpeechBubble(true)
    
    // Hide speech bubble after a moment
    setTimeout(() => {
      setShowSpeechBubble(false)
    }, 2000)
  }, [])

  return (
    <div className="app">
      <ParticleBackground />
      <Gurt showSpeechBubble={showSpeechBubble} onInteract={handleGurtInteract} />
    </div>
  )
}

export default App
