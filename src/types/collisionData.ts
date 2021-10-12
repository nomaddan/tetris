import { StoreState } from 'store';

export type CollisionData = Pick<StoreState, 'arena'> & Pick<StoreState, 'player'>;
