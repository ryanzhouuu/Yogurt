# Gurt: Yo 🍦

A fun React app featuring Gurt, a yogurt character that says "Yo!" when you interact with him.

## Features

- **Interactive Gurt Character**: Click on Gurt to make him say "Yo!"
- **Draggable**: Drag Gurt anywhere on the screen with your mouse
- **Cool Animated Background**: Beautiful gradient background with floating particles and shapes
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

1. Gurt appears on the page automatically
2. Click on Gurt to make him say "Yo!" with a speech bubble
3. Drag Gurt anywhere on the screen - click and drag to move him around

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Animations and styling
- **GitHub Pages** - Hosting

## Project Structure

```
src/
├── components/
│   ├── Gurt.jsx              # Gurt character component
│   └── ParticleBackground.jsx # Animated background
├── App.jsx                    # Main app component
├── main.jsx                   # Entry point
└── index.css                  # Global styles
```

## License

MIT
