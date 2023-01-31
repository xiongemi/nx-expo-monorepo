import { combineReducers } from '@reduxjs/toolkit';

import { likesReducer } from '../likes.slice';

import { RootState } from './root-state.interface';

export const createRootReducer = combineReducers<RootState>({
  likes: likesReducer
});
