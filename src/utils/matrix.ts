import { Matrix } from 'types';

export function createMatrix<T = number>(columns: number, rows: number, value?: T): Matrix<T> {
  return Array(rows)
    .fill([])
    .map(() => Array(columns).fill(value || 0));
}

export function transposeMatrix<T = number>(matrix: Matrix<T>) {
  let m = matrix;
  for (let y = 0; y < m.length; y++) {
    for (let x = 0; x < y; x++) {
      [m[x][y], m[y][x]] = [m[y][x], m[x][y]];
    }
  }
  return m;
}

export function rotateMatrix<T = number>(matrix: Matrix<T>, direction?: 'clockwise' | 'counter-clockwise'): Matrix<T> {
  const m = transposeMatrix(matrix);

  if (direction === 'counter-clockwise') {
    return m.reverse();
  }
  return m.map((row) => row.reverse());
}
