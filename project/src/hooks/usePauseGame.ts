import { useState, useCallback, useEffect } from 'react';

/**
 * Custom hook to manage game pause state
 * @returns Object containing pause state and toggle function
 */
export function usePauseGame() {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  // Handle pause key press (P key)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'p') {
        togglePause();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [togglePause]);

  return { isPaused, togglePause };
}