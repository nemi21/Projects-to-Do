import React from 'react';

interface BallProps {
  position: { x: number; y: number };
  size: number;
}

/**
 * Ball component represents the game ball
 * @param position - Current x,y coordinates of the ball
 * @param size - Diameter of the ball in pixels
 */
export const Ball: React.FC<BallProps> = ({ position, size }) => {
  return (
    <div
      className="absolute bg-white rounded-full"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};