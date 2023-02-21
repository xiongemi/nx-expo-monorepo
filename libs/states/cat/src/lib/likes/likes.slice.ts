import {
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';

export const LIKES_FEATURE_KEY = 'likes';

export interface LikesEntity {
  id: string;
  content: string;
  dateAdded: Date;
}

export type LikesState = EntityState<LikesEntity>;

export const likesAdapter = createEntityAdapter<LikesEntity>();

export const initialLikesState: LikesState = likesAdapter.getInitialState();

export const likesSlice = createSlice({
  name: LIKES_FEATURE_KEY,
  initialState: initialLikesState,
  reducers: {
    like: likesAdapter.addOne,
    remove: likesAdapter.removeOne,
    clear: likesAdapter.removeAll,
  },
});

/*
 * Export reducer for store configuration.
 */
export const likesReducer = likesSlice.reducer;

export const likesActions = likesSlice.actions;

const { selectAll } = likesAdapter.getSelectors();

const getlikesState = <ROOT extends { likes: LikesState }>(
  rootState: ROOT
): LikesState => rootState[LIKES_FEATURE_KEY];

const selectAllLikes = createSelector(getlikesState, selectAll);

export const likesSelectors = {
  selectAllLikes,
};
