import { combineReducers } from '@reduxjs/toolkit';

import { likesReducer } from '../likes/likes.slice';
import { RootState } from './root-state.interface';
import { viewedFactsReducer } from '../viewed-facts/viewed-facts.slice';

export const createRootReducer = combineReducers<RootState>({
  likes: likesReducer,
  viewedFacts: viewedFactsReducer,
});
