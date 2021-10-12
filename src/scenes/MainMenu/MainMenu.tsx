import { CONFIG } from 'config';
import { useStoreActions } from 'store';
import { getNextTetromino4x4Grid } from 'utils';
import { Scene } from 'types';

import { Row } from 'components/Row/Row';
import { Block } from 'components/Block/Block';
import { Button } from 'components/Button/Button';

import styles from './mainMenu.module.scss';

export const MainMenu: React.FC = () => {
  const setScene = useStoreActions((actions) => actions.setScene);

  return (
    <div className={styles.mainMenu}>
      <h1>Welcome to Tetris!</h1>

      <Button big onClick={() => setScene(Scene.Arena)}>
        Play
      </Button>

      <div className={styles.tetrominosWrapper}>
        <h2>Tetrominos:</h2>
        <div className={styles.tetrominos}>
          {CONFIG.tetrominos.map(getNextTetromino4x4Grid).map((t, tetrominoIndex) => (
            <div className={styles.tetro} key={tetrominoIndex}>
              {t.map((row, rowIndex) => (
                <Row key={`${tetrominoIndex}-${rowIndex}`}>
                  {row.map((blockType, blockIndex) => (
                    <Block type={blockType} key={`${tetrominoIndex}-${rowIndex}-${blockIndex}`} />
                  ))}
                </Row>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
