import classNames from 'classnames';

import { TetrominoType, BlockType } from 'types';

import styles from './block.module.scss';

interface BlockProps {
  type?: BlockType;
}

export const Block: React.FC<BlockProps> = ({ type }) => {
  return (
    <div
      className={classNames(styles.block, {
        [styles.blockIsTetromino]: type !== 0,
        [styles.colorI]: type === TetrominoType.I,
        [styles.colorT]: type === TetrominoType.T,
        [styles.colorO]: type === TetrominoType.O,
        [styles.colorL]: type === TetrominoType.L,
        [styles.colorJ]: type === TetrominoType.J,
        [styles.colorS]: type === TetrominoType.S,
        [styles.colorZ]: type === TetrominoType.Z,
      })}
    />
  );
};
