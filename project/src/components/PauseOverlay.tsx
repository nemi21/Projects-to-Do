import React from 'react';

interface PauseOverlayProps {
  isPaused: boolean;
}

/**
 * Overlay component shown when game is paused
 */
export const PauseOverlay: React.FC<PauseOverlayProps> = ({ isPaused }) => {
  if (!isPaused) return null;

  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div className="text-white text-center">
        <h2 className="text-4xl font-bold mb-4">PAUSED</h2>
        <p className="text-xl">Press 'P' to resume</p>
      </div>
    </div>
  );
};