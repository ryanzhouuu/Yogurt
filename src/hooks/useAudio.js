import { useRef } from "react";

/**
 * Custom hook for playing audio sounds using Web Audio API
 */
export function useAudio() {
  const audioContextRef = useRef(null);

  const playSillySound = () => {
    try {
      // Initialize AudioContext on first interaction
      if (!audioContextRef.current) {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!window.AudioContext) {
          console.warn("Web Audio API is not supported in this browser.");
          return;
        }
        audioContextRef.current = new AudioContext();
      }

      // Resume context if it's suspended (necessary in some browsers)
      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }

      const now = audioContextRef.current.currentTime;
      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();

      // Configure oscillator (simple "boop" sound)
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(300, now);
      oscillator.frequency.exponentialRampToValueAtTime(150, now + 0.1);

      // Configure gain (volume envelope for "plop")
      gainNode.gain.setValueAtTime(0.5, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

      // Connect nodes: Oscillator -> Gain -> Output
      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);

      // Start and stop the sound
      oscillator.start(now);
      oscillator.stop(now + 0.2);
    } catch (e) {
      console.error("Error playing sound:", e);
    }
  };

  return { playSillySound };
}
