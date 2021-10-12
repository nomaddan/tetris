import { Action, action, Computed, computed, createStore } from 'easy-peasy';

import { CONFIG } from 'config';
import { Player, BlockMatrix, Tetromino, Scene } from 'types';
import { canMove, canRotate, getRandomTetromino, rotateMatrix } from 'utils';

export interface StoreState {
  scene: Scene;
  arena: BlockMatrix;
  player: Player;
  score: number;
  nextTetromino: Tetromino;
  isPaused: boolean;
  isGameOver: boolean;
  speed: number;
  isRunning?: Computed<StoreState, boolean>;
}

type A<P = void> = Action<StoreState, P>;
interface StoreActions {
  setScene: A<Scene>;
  rotate: A;
  moveDown: A;
  moveLeft: A;
  moveRight: A;
  pause: A;
  restart: A;
}

const storeState: StoreState = {
  scene: Scene.MainMenu,
  arena: CONFIG.arena.initialLayout,
  player: {
    shape: getRandomTetromino(),
    position: CONFIG.player.initialPosition,
  },
  score: 0,
  nextTetromino: getRandomTetromino(),
  isPaused: false,
  isGameOver: false,
  speed: 1,
  isRunning: computed((state) => !(state.isPaused || state.isGameOver)),
};

const storeActions: StoreActions = {
  setScene: action((state, newScene) => {
    state.scene = newScene;
  }),
  rotate: action((state) => {
    if (state.isRunning && canRotate(state)) {
      state.player.shape = rotateMatrix(state.player.shape);

      // todo: remove rotation of next tetromino
      state.nextTetromino = rotateMatrix(state.nextTetromino);
    }
  }),
  moveLeft: action((state) => {
    const nextX = state.player.position.x - 1;
    if (state.isRunning && canMove(state, { ...state.player.position, x: nextX })) {
      state.player.position = { ...state.player.position, x: nextX };
    }
  }),
  moveRight: action((state) => {
    const nextX = state.player.position.x + 1;
    if (state.isRunning && canMove(state, { ...state.player.position, x: nextX })) {
      state.player.position = { ...state.player.position, x: nextX };
    }
  }),
  pause: action((state) => {
    state.isPaused = !state.isPaused;
  }),
  restart: action((state) => {
    state.score = 0;
    state.arena = CONFIG.arena.initialLayout;
    state.player = {
      shape: getRandomTetromino(),
      position: CONFIG.player.initialPosition,
    };
    state.nextTetromino = getRandomTetromino();
    state.isPaused = false;
    state.isGameOver = false;
  }),
  moveDown: action((state) => {
    if (state.isRunning) {
      const nextY = state.player.position.y + 1;

      if (canMove(state, { ...state.player.position, y: nextY })) {
        state.player.position = { ...state.player.position, y: nextY };
      }
    }

    // todo
  }),
};

export type StoreModel = StoreState & StoreActions;

const storeModel: StoreModel = {
  ...storeState,
  ...storeActions,
};

export const store = createStore(storeModel);
