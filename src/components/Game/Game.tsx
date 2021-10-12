import { Scene } from 'types';

import { useStoreState } from 'store';

import { MainMenu } from 'scenes/MainMenu/MainMenu';
import { Arena } from 'scenes/Arena/Arena';
import { EndGameSummary } from 'scenes/EndGameSummary/EndGameSummary';

export const Game: React.FC = () => {
  const currentScene = useStoreState((state) => state.scene);

  return (
    <>
      {currentScene === Scene.MainMenu && <MainMenu />}
      {currentScene === Scene.Arena && <Arena />}
      {currentScene === Scene.EndGameSummary && <EndGameSummary />}
    </>
  );
};
