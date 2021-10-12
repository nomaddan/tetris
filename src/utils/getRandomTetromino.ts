import { Tetromino } from 'types';
import { CONFIG } from 'config';

export function getRandomTetromino(): Tetromino {
  return CONFIG.tetrominos[Math.floor(Math.random() * CONFIG.tetrominos.length)];
}
