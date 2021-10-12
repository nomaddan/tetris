import { Scene, Tetromino, TetrominoType } from 'types';
import { createMatrix } from 'utils';

const tetrominos: Record<TetrominoType, Tetromino> = {
  [TetrominoType.I]: [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  [TetrominoType.T]: [
    [2, 2, 2],
    [0, 2, 0],
    [0, 0, 0],
  ],
  [TetrominoType.O]: [
    [3, 3],
    [3, 3],
  ],
  [TetrominoType.L]: [
    [0, 4, 0],
    [0, 4, 0],
    [0, 4, 4],
  ],
  [TetrominoType.J]: [
    [0, 5, 0],
    [0, 5, 0],
    [5, 5, 0],
  ],
  [TetrominoType.S]: [
    [0, 6, 6],
    [6, 6, 0],
    [0, 0, 0],
  ],
  [TetrominoType.Z]: [
    [7, 7, 0],
    [0, 7, 7],
    [0, 0, 0],
  ],
};

const arenaSize = {
  width: 11,
  height: 20,
};

export const CONFIG = {
  arena: {
    size: arenaSize,
    initialLayout: createMatrix(arenaSize.width, arenaSize.height),
  },
  player: {
    initialPosition: {
      x: 4,
      y: 0,
    },
  },
  scenes: Scene,
  tetrominos: Object.values(tetrominos),
} as const;
