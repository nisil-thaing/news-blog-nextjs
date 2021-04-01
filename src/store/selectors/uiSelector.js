import { createSelector } from 'reselect';

export const getUIState = state => state.ui;

export const getUIToastMessageState = createSelector(
  getUIState,
  state => state.toastMessage
);
