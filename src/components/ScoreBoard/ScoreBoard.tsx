import { useStoreState } from 'store';

export const ScoreBoard: React.FC = () => {
  const score = useStoreState((s) => s.score);

  return <div>Score: {score}</div>;
};
