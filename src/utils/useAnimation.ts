import { useEffect, useRef } from 'react';

type Callback = (deltaTime: number) => void;

export function useAnimation(callback: Callback, speed = 1, stop?: boolean) {
  const requestId = useRef<number>(0);
  const previousTime = useRef<number>(0);
  const progressTime = useRef<number>(0);

  const loop = (time: number) => {
    if (stop) {
      return;
    }

    if (typeof previousTime.current !== 'undefined') {
      const deltaTime = time - previousTime.current;
      progressTime.current += deltaTime;

      if (progressTime.current > 1000 / speed) {
        callback(deltaTime);
        progressTime.current = 0;
      }
    }

    previousTime.current = time;
    requestId.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    requestId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(requestId.current);
  }, []);
}
