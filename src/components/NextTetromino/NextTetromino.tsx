import { useStoreState } from 'store';

import { Block } from 'components/Block/Block';
import { Row } from 'components/Row/Row';
import { getNextTetromino4x4Grid } from 'utils';

import styles from './nextTetromino.module.scss';

export const NextTetromino: React.FC = () => {
  const nextTetromino = useStoreState((state) => state.nextTetromino);

  return (
    <div className={styles.wrapper}>
      <p>Next:</p>
      <div className={styles.nextTetromino} data-columns={4}>
        {getNextTetromino4x4Grid(nextTetromino).map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((block, blockIndex) => (
              <Block type={block} key={`${rowIndex}${blockIndex}`} />
            ))}
          </Row>
        ))}
      </div>
    </div>
  );
};
