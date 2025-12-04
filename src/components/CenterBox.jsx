import { useState, useMemo } from 'react'
import './CenterBox.css'

/**
 * CenterBox - The input form that triggers Gurt to appear
 */
export default function CenterBox({ onTriggerGurt }) {
  const [inputValue, setInputValue] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.toLowerCase() === 'yogurt') {
      setMessage('')
      onTriggerGurt()
    } else {
      setMessage("Try typing 'yogurt'!")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  // Generate berries once - memoized so they don't regenerate on every render
  const berries = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 10 + 5,
        color: ['#ff6b9d', '#ff8e8e', '#f8c1d8'][Math.floor(Math.random() * 3)],
      })),
    []
  )

  return (
    <div className="container">
      <div className="center-box">
        {berries.map((berry) => (
          <div
            key={berry.id}
            className="berry"
            style={{
              left: `${berry.left}%`,
              top: `${berry.top}%`,
              width: `${berry.size}px`,
              height: `${berry.size}px`,
              backgroundColor: berry.color,
            }}
          />
        ))}
        <div className="yogurt-icon">🍦</div>
        <h2>Yogurt Simulator</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type 'yogurt' to see the magic..."
            aria-label="Input field to trigger Gurt"
          />
          <br />
          <button type="submit">Taste the Yogurt</button>
        </form>
        {message && <p className="result">{message}</p>}
      </div>
    </div>
  )
}