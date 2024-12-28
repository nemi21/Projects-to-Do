import React from 'react';

interface ScoreProps {
  player1: number;
  player2: number;
}

/**
 * Score component displays the current score for both players
 * @param player1 - Score for player 1
 * @param player2 - Score for player 2
 */
export const Score: React.FC<ScoreProps> = ({ player1, player2 }) => {
  return (
    <div className="absolute top-8 left-0 right-0 flex justify-center gap-16 text-4xl text-white font-bold">
      <span>{player1}</span>
      <span>{player2}</span>
    </div>
  );
};