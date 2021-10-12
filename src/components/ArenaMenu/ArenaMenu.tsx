import { useStoreActions, useStoreState } from 'store';

import { NextTetromino } from 'components/NextTetromino/NextTetromino';
import { ScoreBoard } from 'components/ScoreBoard/ScoreBoard';

import styles from './arenaMenu.module.scss';
import { Button } from 'components/Button/Button';
import { Controls } from 'components/Controls/Controls';

export const ArenaMenu: React.FC = () => {
  const pause = useStoreActions((actions) => actions.pause);
  const restart = useStoreActions((actions) => actions.restart);

  const isPaused = useStoreState((state) => state.isPaused);

  return (
    <div className={styles.arenaMenu}>
      <div className={styles.buttonWrapper}>
        <Button className={styles.buttonMargin} onClick={() => restart()}>
          Restart
        </Button>
        <Button onClick={() => pause()}>{isPaused ? 'Resume' : 'Pause'}</Button>
      </div>
      <NextTetromino />
      <ScoreBoard />
      <Controls />
    </div>
  );
};
