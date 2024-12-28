/**
 * Type definitions for game entities and states
 */
export interface PowerUp {
  id: string;
  type: 'speed' | 'size' | 'slow' | 'reverse';
  position: Position;
  active: boolean;
  duration: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface GameStats {
  rallies: number;
  longestRally: number;
  maxBallSpeed: number;
  gameTime: number;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameMode {
  type: 'pvp' | 'ai';
  difficulty: Difficulty;
}