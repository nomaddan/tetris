import { BlockMatrix, Tetromino } from 'types';

export function getNextTetromino4x4Grid(nextTetromino: Tetromino): BlockMatrix {
  return [
    ...nextTetromino.map((r) => [...r, ...Array(4 - r.length).fill(0)]),
    ...Array(4 - nextTetromino.length)
      .fill(0)
      .map(() => Array(4).fill(0)),
  ];
}
