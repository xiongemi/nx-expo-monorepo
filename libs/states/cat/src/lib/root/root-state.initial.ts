import { initialLikesState } from '../likes/likes.slice';
import { initialViewedFactsState } from '../viewed-facts/viewed-facts.slice';

import { RootState } from './root-state.interface';

export const initialRootState: RootState = {
  likes: initialLikesState,
  viewedFacts: initialViewedFactsState,
};
