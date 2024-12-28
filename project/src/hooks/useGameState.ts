import { useState, useCallback } from 'react';
import { 
  PADDLE_WIDTH, 
  PADDLE_HEIGHT, 
  BALL_SIZE,
  PADDLE_SPEED,
  BALL_SPEED,
  SPEED_INCREASE_FACTOR,
  PADDLE_OFFSET
} from '../constants/game';

interface WindowSize {
  width: number;
  height: number;
}

interface Position {
  x: number;
  y: number;
}

interface GameState {
  paddle1Pos: Position;
  paddle2Pos: Position;
  ballPos: Position;
  ballVelocity: Position;
  score: { player1: number; player2: number };
  updateGameState: (deltaTime: number, keys: Set<string>) => void;
  resetBall: () => void;
}

export function useGameState(windowSize: WindowSize): GameState {
  const [paddle1Pos, setPaddle1Pos] = useState({ 
    x: PADDLE_OFFSET, 
    y: windowSize.height / 2 - PADDLE_HEIGHT / 2 
  });
  
  const [paddle2Pos, setPaddle2Pos] = useState({ 
    x: windowSize.width - PADDLE_OFFSET - PADDLE_WIDTH, 
    y: windowSize.height / 2 - PADDLE_HEIGHT / 2 
  });
  
  const [ballPos, setBallPos] = useState({ 
    x: windowSize.width / 2 - BALL_SIZE / 2, 
    y: windowSize.height / 2 - BALL_SIZE / 2 
  });
  
  const [ballVelocity, setBallVelocity] = useState({ x: BALL_SPEED, y: BALL_SPEED });
  const [score, setScore] = useState({ player1: 0, player2: 0 });

  const resetBall = useCallback(() => {
    setBallPos({ 
      x: windowSize.width / 2 - BALL_SIZE / 2, 
      y: windowSize.height / 2 - BALL_SIZE / 2 
    });
    setBallVelocity({ 
      x: BALL_SPEED * (Math.random() > 0.5 ? 1 : -1), 
      y: BALL_SPEED * (Math.random() > 0.5 ? 1 : -1) 
    });
  }, [windowSize]);

  const updateGameState = useCallback((deltaTime: number, keys: Set<string>) => {
    // Update paddle positions
    if (keys.has('w') && paddle1Pos.y > 0) {
      setPaddle1Pos(prev => ({ ...prev, y: prev.y - PADDLE_SPEED * deltaTime }));
    }
    if (keys.has('s') && paddle1Pos.y < windowSize.height - PADDLE_HEIGHT) {
      setPaddle1Pos(prev => ({ ...prev, y: prev.y + PADDLE_SPEED * deltaTime }));
    }
    if (keys.has('ArrowUp') && paddle2Pos.y > 0) {
      setPaddle2Pos(prev => ({ ...prev, y: prev.y - PADDLE_SPEED * deltaTime }));
    }
    if (keys.has('ArrowDown') && paddle2Pos.y < windowSize.height - PADDLE_HEIGHT) {
      setPaddle2Pos(prev => ({ ...prev, y: prev.y + PADDLE_SPEED * deltaTime }));
    }

    // Update ball position
    const newBallPos = {
      x: ballPos.x + ballVelocity.x * deltaTime,
      y: ballPos.y + ballVelocity.y * deltaTime
    };

    // Handle collisions
    if (newBallPos.y <= 0 || newBallPos.y >= windowSize.height - BALL_SIZE) {
      setBallVelocity(prev => ({ ...prev, y: -prev.y }));
      return;
    }

    const hitLeftPaddle = 
      newBallPos.x <= paddle1Pos.x + PADDLE_WIDTH &&
      newBallPos.y + BALL_SIZE >= paddle1Pos.y &&
      newBallPos.y <= paddle1Pos.y + PADDLE_HEIGHT;

    const hitRightPaddle = 
      newBallPos.x + BALL_SIZE >= paddle2Pos.x &&
      newBallPos.y + BALL_SIZE >= paddle2Pos.y &&
      newBallPos.y <= paddle2Pos.y + PADDLE_HEIGHT;

    if (hitLeftPaddle || hitRightPaddle) {
      setBallVelocity(prev => ({ 
        x: -prev.x * SPEED_INCREASE_FACTOR,
        y: prev.y * SPEED_INCREASE_FACTOR
      }));
      return;
    }

    // Handle scoring
    if (newBallPos.x < 0) {
      setScore(prev => ({ ...prev, player2: prev.player2 + 1 }));
      resetBall();
      return;
    }
    if (newBallPos.x > windowSize.width - BALL_SIZE) {
      setScore(prev => ({ ...prev, player1: prev.player1 + 1 }));
      resetBall();
      return;
    }

    setBallPos(newBallPos);
  }, [ballPos, ballVelocity, paddle1Pos, paddle2Pos, windowSize, resetBall]);

  return {
    paddle1Pos,
    paddle2Pos,
    ballPos,
    ballVelocity,
    score,
    updateGameState,
    resetBall
  };
}