# Gurt: Yo 🍦

A fun React app featuring Gurt, a yogurt character that says "Yo!" when you interact with him.

## Features

- **Interactive Gurt Character**: Click on Gurt or type "yogurt" to make him appear and say "Yo!"
- **Animated Particles**: Beautiful floating particles in the background
- **Sound Effects**: Playful audio feedback when Gurt appears
- **Smooth Animations**: Wiggle animations and speech bubble effects
- **Responsive Design**: Works on all screen sizes

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## How to Use

1. Type "yogurt" in the input field and press Enter or click "Taste the Yogurt"
2. Gurt will appear at the bottom of the screen with a speech bubble saying "Yo!"
3. Click on Gurt to make him say "Yo!" again
4. Gurt will automatically disappear after 4 seconds

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Web Audio API** - Sound effects
- **CSS3** - Animations and styling

## Project Structure

```
src/
├── components/
│   ├── Gurt.jsx          # Gurt character component
│   ├── CenterBox.jsx     # Input form component
│   └── ParticleBackground.jsx  # Animated particles
├── hooks/
│   └── useAudio.js       # Custom hook for audio
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## License

MIT
