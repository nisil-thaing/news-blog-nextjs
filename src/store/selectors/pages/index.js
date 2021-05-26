import { createSelector } from 'reselect';

export const pagesState = state => state.pages;

export const getHomePageState = createSelector(
  pagesState,
  state => state.homePage
);
