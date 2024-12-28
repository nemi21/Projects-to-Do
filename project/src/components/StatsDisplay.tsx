import React from 'react';
import { GameStats } from '../types/game';

interface StatsDisplayProps {
  stats: GameStats;
}

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats }) => {
  return (
    <div className="absolute top-4 left-4 text-white text-sm">
      <div>Rallies: {stats.rallies}</div>
      <div>Longest Rally: {stats.longestRally}</div>
      <div>Max Speed: {stats.maxBallSpeed.toFixed(2)}</div>
      <div>Game Time: {Math.floor(stats.gameTime / 1000)}s</div>
    </div>
  );
};