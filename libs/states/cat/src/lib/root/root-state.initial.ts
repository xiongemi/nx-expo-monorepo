import { initialLikesState } from '../likes/likes.slice';

import { RootState } from './root-state.interface';

export const initialRootState: RootState = {
  likes: initialLikesState,
};
