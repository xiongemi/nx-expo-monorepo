import {
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';

export const VIEWED_FACTS_FEATURE_KEY = 'viewedFacts';

export interface ViewedFactsEntity {
  id: string;
  content: string;
}

export type ViewedFactsState = EntityState<ViewedFactsEntity>;

export const viewedFactsAdapter = createEntityAdapter<ViewedFactsEntity>();

export const initialViewedFactsState: ViewedFactsState =
  viewedFactsAdapter.getInitialState();

export const viewedFactsSlice = createSlice({
  name: VIEWED_FACTS_FEATURE_KEY,
  initialState: initialViewedFactsState,
  reducers: {
    add: viewedFactsAdapter.addOne,
    remove: viewedFactsAdapter.removeOne,
  },
});

/*
 * Export reducer for store configuration.
 */
export const viewedFactsReducer = viewedFactsSlice.reducer;

export const viewedFactsActions = viewedFactsSlice.actions;

const { selectAll } = viewedFactsAdapter.getSelectors();

const getViewedFactsState = (rootState: {
  [VIEWED_FACTS_FEATURE_KEY]: ViewedFactsState;
}): ViewedFactsState => rootState[VIEWED_FACTS_FEATURE_KEY];

const getViewedFacts = createSelector(getViewedFactsState, selectAll);

const getLastViewedFact = createSelector(getViewedFacts, (viewedFacts) => {
  if (viewedFacts.length > 2) {
    return viewedFacts[viewedFacts.length - 2];
  }
  return undefined;
});

export const viewFactsSelectors = {
  getLastViewedFact,
};
