import { LikesState } from '../likes/likes.slice';
import { ViewedFactsState } from '../viewed-facts/viewed-facts.slice';

export interface RootState {
  likes: LikesState;
  viewedFacts: ViewedFactsState;
}
