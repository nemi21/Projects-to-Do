import { useState, useCallback } from 'react';
import { GameStats } from '../types/game';

/**
 * Hook to track and update game statistics
 */
export function useGameStats() {
  const [stats, setStats] = useState<GameStats>({
    rallies: 0,
    longestRally: 0,
    maxBallSpeed: 0,
    gameTime: 0
  });

  const updateStats = useCallback((
    currentRally: number,
    ballSpeed: number,
    elapsedTime: number
  ) => {
    setStats(prev => ({
      rallies: prev.rallies + 1,
      longestRally: Math.max(prev.longestRally, currentRally),
      maxBallSpeed: Math.max(prev.maxBallSpeed, ballSpeed),
      gameTime: elapsedTime
    }));
  }, []);

  return { stats, updateStats };
}