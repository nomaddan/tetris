import { Matrix, BlockType } from 'types';

export enum TetrominoType {
  I = 1,
  T = 2,
  O = 3,
  L = 4,
  J = 5,
  S = 6,
  Z = 7,
}

export type Tetromino = Matrix<BlockType>;
