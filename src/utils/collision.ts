import { Position, BlockMatrix, CollisionData } from 'types';

export function canMove({ player, arena }: CollisionData, nextPosition: Position) {
  return true;
}

export function canRotate(state: CollisionData) {
  return canMove(state, state.player.position);
}

interface StackedBlocks {
  newArena: BlockMatrix;
  isPlayerOffGrid: boolean;
}

export function stackBlocks({ arena, player }: CollisionData): StackedBlocks {
  // todo

  return { newArena: arena, isPlayerOffGrid: false };
}
