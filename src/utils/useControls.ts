import { useEffect } from 'react';

import { useStoreActions } from 'store';
import { KeyCode } from 'types';

import { useKeyPress } from 'utils';

export function useControls() {
  // Move Left
  const moveLeft = useStoreActions((actions) => actions.moveLeft);

  const arrowLeftPress = useKeyPress(KeyCode.ArrowLeft);
  const keyJPress = useKeyPress(KeyCode.J);

  useEffect(() => {
    arrowLeftPress && moveLeft();
  }, [arrowLeftPress]);

  useEffect(() => {
    keyJPress && moveLeft();
  }, [keyJPress]);

  // Move Right
  const moveRight = useStoreActions((actions) => actions.moveRight);

  const arrowRightPress = useKeyPress(KeyCode.ArrowRight);
  const keyLPress = useKeyPress(KeyCode.L);

  useEffect(() => {
    arrowRightPress && moveRight();
  }, [arrowRightPress]);

  useEffect(() => {
    keyLPress && moveRight();
  }, [keyLPress]);

  // Move Down
  const moveDown = useStoreActions((actions) => actions.moveDown);

  const arrowDownPress = useKeyPress(KeyCode.ArrowDown);
  const keyKPress = useKeyPress(KeyCode.K);

  useEffect(() => {
    arrowDownPress && moveDown();
  }, [arrowDownPress]);

  useEffect(() => {
    keyKPress && moveDown();
  }, [keyKPress]);

  // Rotate
  const rotate = useStoreActions((actions) => actions.rotate);

  const arrowUpPress = useKeyPress(KeyCode.ArrowUp);
  const keyIPress = useKeyPress(KeyCode.I);

  useEffect(() => {
    arrowUpPress && rotate();
  }, [arrowUpPress]);

  useEffect(() => {
    keyIPress && rotate();
  }, [keyIPress]);

  // Pause
  const pause = useStoreActions((actions) => actions.pause);

  const escapePress = useKeyPress(KeyCode.Escape);
  const pPress = useKeyPress(KeyCode.P);

  useEffect(() => {
    escapePress && pause();
  }, [escapePress]);

  useEffect(() => {
    pPress && pause();
  }, [pPress]);
}
