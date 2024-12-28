import React from 'react';
import { GameMode, Difficulty } from '../types/game';

interface GameMenuProps {
  gameMode: GameMode;
  onModeToggle: () => void;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

export const GameMenu: React.FC<GameMenuProps> = ({
  gameMode,
  onModeToggle,
  onDifficultyChange
}) => {
  return (
    <div className="absolute top-4 right-4 text-white">
      <button
        onClick={onModeToggle}
        className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 mb-2 w-full"
      >
        Mode: {gameMode.type.toUpperCase()}
      </button>
      
      {gameMode.type === 'ai' && (
        <div className="space-y-2">
          {(['easy', 'medium', 'hard'] as Difficulty[]).map(diff => (
            <button
              key={diff}
              onClick={() => onDifficultyChange(diff)}
              className={`px-4 py-2 rounded-lg w-full ${
                gameMode.difficulty === diff
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-gray-600 hover:bg-gray-700'
              }`}
            >
              {diff.charAt(0).toUpperCase() + diff.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};