import React from 'react';
import { PowerUp } from '../types/game';

interface PowerUpDisplayProps {
  powerUp: PowerUp;
}

export const PowerUpDisplay: React.FC<PowerUpDisplayProps> = ({ powerUp }) => {
  const getColor = () => {
    switch (powerUp.type) {
      case 'speed': return 'bg-yellow-500';
      case 'size': return 'bg-green-500';
      case 'slow': return 'bg-blue-500';
      case 'reverse': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div
      className={`absolute rounded-full w-6 h-6 ${getColor()} animate-pulse`}
      style={{
        left: `${powerUp.position.x}px`,
        top: `${powerUp.position.y}px`
      }}
    />
  );
};