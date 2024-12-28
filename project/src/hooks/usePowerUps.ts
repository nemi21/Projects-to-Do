import { useState, useCallback } from 'react';
import { PowerUp, Position } from '../types/game';
import { v4 as uuidv4 } from 'uuid';

/**
 * Hook to manage power-up spawning and effects
 */
export function usePowerUps(windowSize: { width: number; height: number }) {
  const [powerUps, setPowerUps] = useState<PowerUp[]>([]);

  const spawnPowerUp = useCallback(() => {
    const types: PowerUp['type'][] = ['speed', 'size', 'slow', 'reverse'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    
    const newPowerUp: PowerUp = {
      id: uuidv4(),
      type: randomType,
      position: {
        x: Math.random() * (windowSize.width - 30) + 15,
        y: Math.random() * (windowSize.height - 30) + 15
      },
      active: true,
      duration: 5000 // 5 seconds
    };

    setPowerUps(prev => [...prev, newPowerUp]);
  }, [windowSize]);

  const collectPowerUp = useCallback((id: string) => {
    setPowerUps(prev => prev.filter(p => p.id !== id));
    // Return power-up effect details
    return powerUps.find(p => p.id === id)?.type;
  }, [powerUps]);

  return { powerUps, spawnPowerUp, collectPowerUp };
}