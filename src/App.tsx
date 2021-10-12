import { StoreProvider } from 'easy-peasy';
import React from 'react';

import { store } from 'store';

import { Game } from 'components/Game/Game';

export const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <Game />
    </StoreProvider>
  );
};
