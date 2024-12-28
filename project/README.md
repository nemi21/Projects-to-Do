# React Pong Game

A modern implementation of the classic Pong game built with React, TypeScript, and Tailwind CSS.

## Features

- 🎮 Two-player gameplay
- 🎯 Smooth animations and physics
- 📱 Responsive design
- 🏓 Progressive difficulty (ball speeds up after each hit)
- 🎯 Score tracking
- ⌨️ Keyboard controls

## Controls

- **Player 1 (Left)**
  - W: Move paddle up
  - S: Move paddle down

- **Player 2 (Right)**
  - ↑: Move paddle up
  - ↓: Move paddle down

## Project Structure

```
src/
├── components/     # UI components
│   ├── Ball.tsx   # Ball component
│   ├── Paddle.tsx # Paddle component
│   └── Score.tsx  # Score display component
├── hooks/         # Custom React hooks
│   └── useGameLoop.ts # Game animation loop
├── constants/     # Game constants
│   └── game.ts    # Game configuration
└── App.tsx        # Main game component
```

## Technical Details

- Built with React and TypeScript
- Uses requestAnimationFrame for smooth animations
- Implements collision detection
- Responsive design using Tailwind CSS
- Modular component architecture

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```