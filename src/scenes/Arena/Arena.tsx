import { useStoreActions, useStoreState } from 'store';
import { useAnimation, useControls } from 'utils';

import { Block } from 'components/Block/Block';
import { Row } from 'components/Row/Row';
import { ArenaMenu } from 'components/ArenaMenu/ArenaMenu';

import styles from './arena.module.scss';

export const Arena: React.FC = () => {
  const arena = useStoreState((s) => s.arena);
  const speed = useStoreState((s) => s.speed);
  const isPaused = useStoreState((s) => s.isPaused);
  const moveDown = useStoreActions((actions) => actions.moveDown);

  useControls();

  useAnimation(() => {
    !isPaused && moveDown();
  }, speed);

  return (
    <div className={styles.arena}>
      <div className={styles.arenaGrid}>
        {arena.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((block, blockIndex) => (
              <Block key={`${rowIndex}-${blockIndex}`} type={block} />
            ))}
          </Row>
        ))}
      </div>
      <ArenaMenu />
    </div>
  );
};
