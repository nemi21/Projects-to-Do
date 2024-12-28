import React from 'react';

interface PaddleProps {
  position: { x: number; y: number };
  width: number;
  height: number;
}

/**
 * Paddle component represents a player's paddle
 * @param position - Current x,y coordinates of the paddle
 * @param width - Width of the paddle in pixels
 * @param height - Height of the paddle in pixels
 */
export const Paddle: React.FC<PaddleProps> = ({ position, width, height }) => {
  return (
    <div
      className="absolute bg-white rounded"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
};