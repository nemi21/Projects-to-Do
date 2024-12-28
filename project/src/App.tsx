import React, { useCallback, useEffect } from 'react';
import { Paddle } from './components/Paddle';
import { Ball } from './components/Ball';
import { Score } from './components/Score';
import { PauseOverlay } from './components/PauseOverlay';
import { GameMenu } from './components/GameMenu';
import { PowerUpDisplay } from './components/PowerUpDisplay';
import { StatsDisplay } from './components/StatsDisplay';
import { useGameLoop } from './hooks/useGameLoop';
import { useGameState } from './hooks/useGameState';
import { useWindowSize } from './hooks/useWindowSize';
import { useKeyboardControls } from './hooks/useKeyboardControls';
import { usePauseGame } from './hooks/usePauseGame';
import { useGameMode } from './hooks/useGameMode';
import { usePowerUps } from './hooks/usePowerUps';
import { useGameStats } from './hooks/useGameStats';
import { useAI } from './hooks/useAI';
import { PADDLE_WIDTH, PADDLE_HEIGHT, BALL_SIZE } from './constants/game';

export function App() {
  const windowSize = useWindowSize();
  const { keys, handleKeyDown, handleKeyUp } = useKeyboardControls();
  const { isPaused } = usePauseGame();
  const { gameMode, toggleGameMode, setDifficulty } = useGameMode();
  const { powerUps, spawnPowerUp, collectPowerUp } = usePowerUps(windowSize);
  const { stats, updateStats } = useGameStats();
  const { calculateAIMove } = useAI(gameMode.difficulty);
  
  const { 
    paddle1Pos, 
    paddle2Pos, 
    ballPos, 
    ballVelocity,
    score,
    updateGameState,
    resetBall,
    currentRally
  } = useGameState(windowSize);

  // Spawn power-ups periodically
  useEffect(() => {
    if (!isPaused && Math.random() < 0.001) { // 0.1% chance per frame
      spawnPowerUp();
    }
  }, [isPaused, spawnPowerUp]);

  // Main game update loop
  const updateGame = useCallback((deltaTime: number) => {
    if (!isPaused) {
      // Update AI if in AI mode
      if (gameMode.type === 'ai') {
        const aiMove = calculateAIMove(paddle2Pos, ballPos, ballVelocity);
        const aiKeys = new Set(keys);
        if (aiMove > 0) aiKeys.add('ArrowDown');
        if (aiMove < 0) aiKeys.add('ArrowUp');
        updateGameState(deltaTime, aiKeys);
      } else {
        updateGameState(deltaTime, keys);
      }

      // Check for power-up collisions
      powerUps.forEach(powerUp => {
        if (
          Math.abs(ballPos.x - powerUp.position.x) < BALL_SIZE &&
          Math.abs(ballPos.y - powerUp.position.y) < BALL_SIZE
        ) {
          const effect = collectPowerUp(powerUp.id);
          // Apply power-up effect...
        }
      });

      // Update statistics
      updateStats(
        currentRally,
        Math.sqrt(ballVelocity.x ** 2 + ballVelocity.y ** 2),
        Date.now()
      );
    }
  }, [
    isPaused,
    gameMode,
    updateGameState,
    keys,
    calculateAIMove,
    paddle2Pos,
    ballPos,
    ballVelocity,
    powerUps,
    collectPowerUp,
    updateStats,
    currentRally
  ]);

  // Start game loop
  useGameLoop(updateGame);

  return (
    <div className="relative w-screen h-screen bg-gray-900 overflow-hidden">
      <Score player1={score.player1} player2={score.player2} />
      <StatsDisplay stats={stats} />
      <GameMenu
        gameMode={gameMode}
        onModeToggle={toggleGameMode}
        onDifficultyChange={setDifficulty}
      />
      
      <div className="absolute top-0 left-1/2 w-1 h-full bg-white opacity-20" />
      
      <Paddle position={paddle1Pos} width={PADDLE_WIDTH} height={PADDLE_HEIGHT} />
      <Paddle position={paddle2Pos} width={PADDLE_WIDTH} height={PADDLE_HEIGHT} />
      <Ball position={ballPos} size={BALL_SIZE} />
      
      {powerUps.map(powerUp => (
        <PowerUpDisplay key={powerUp.id} powerUp={powerUp} />
      ))}
      
      <PauseOverlay isPaused={isPaused} />
      
      <div className="absolute bottom-8 left-0 right-0 text-center text-white opacity-50">
        <p>
          Player 1: W/S keys | 
          {gameMode.type === 'pvp' ? 'Player 2: ↑/↓ arrows' : 'AI Opponent'} | 
          Pause: P
        </p>
      </div>
    </div>
  );
}