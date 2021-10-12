import { BlockMatrix } from 'types';

export const calculateScore = (grid: BlockMatrix) => {
  // todo
  let completedRows = 0;

  for (const row of grid) {
  }

  return completedRows ? 2 ** completedRows : 0;
};
