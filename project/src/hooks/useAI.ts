import { useCallback } from 'react';
import { Position } from '../types/game';

/**
 * Hook to manage AI opponent behavior
 */
export function useAI(difficulty: string) {
  const calculateAIMove = useCallback((
    paddlePos: Position,
    ballPos: Position,
    ballVelocity: Position
  ): number => {
    // Difficulty-based reaction time and accuracy
    const reactionSpeed = {
      easy: 0.3,
      medium: 0.6,
      hard: 0.9
    }[difficulty] || 0.6;

    // Predict ball position
    const predictedY = ballPos.y + ballVelocity.y * reactionSpeed;
    
    // Add some randomness based on difficulty
    const randomError = (1 - reactionSpeed) * Math.random() * 50;
    const targetY = predictedY + randomError;

    // Return movement direction (-1, 0, or 1)
    const diff = targetY - paddlePos.y;
    if (Math.abs(diff) < 10) return 0;
    return diff > 0 ? 1 : -1;
  }, [difficulty]);

  return { calculateAIMove };
}