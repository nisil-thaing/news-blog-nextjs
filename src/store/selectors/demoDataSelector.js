import { createSelector } from 'reselect';

export const getDemoDataState = state => state.demoData;

export const getDemoData = createSelector(
  getDemoDataState,
  state => state.data
);
