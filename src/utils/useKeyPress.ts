import { useEffect, useState } from 'react';

import { KeyCode } from 'types';

export function useKeyPress(key: KeyCode) {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  function downHandler(e: KeyboardEvent) {
    if (key === e.code) {
      setKeyPressed(true);
    }
  }

  const upHandler = (e: KeyboardEvent) => {
    if (key === e.code) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return keyPressed;
}
