import { useState, useCallback } from 'react';
import { GameMode, Difficulty } from '../types/game';

/**
 * Hook to manage game mode and difficulty settings
 */
export function useGameMode() {
  const [gameMode, setGameMode] = useState<GameMode>({
    type: 'pvp',
    difficulty: 'medium'
  });

  const toggleGameMode = useCallback(() => {
    setGameMode(prev => ({
      ...prev,
      type: prev.type === 'pvp' ? 'ai' : 'pvp'
    }));
  }, []);

  const setDifficulty = useCallback((difficulty: Difficulty) => {
    setGameMode(prev => ({ ...prev, difficulty }));
  }, []);

  return { gameMode, toggleGameMode, setDifficulty };
}