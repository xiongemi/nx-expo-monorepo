import { initialLikesState } from '../likes.slice';

import { RootState } from './root-state.interface';

export const initialRootState: RootState = {
  likes: initialLikesState
};
