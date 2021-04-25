import { createSelector } from 'reselect';

import { AUTHENTICATION_DIALOG_TYPES } from 'store/states/uiState';

export const getUIState = state => state.ui;

export const getAuthenticationDialogState = createSelector(
  getUIState,
  state => state.authenticationDialog
);

export const getWhetherShowingAuthenticationDialog = createSelector(
  getAuthenticationDialogState,
  authenticationDialog => Boolean(authenticationDialog.isShowing)
    && Boolean(authenticationDialog.type)
    && Object.values(AUTHENTICATION_DIALOG_TYPES).includes(authenticationDialog.type)
);

export const getUIToastMessageState = createSelector(
  getUIState,
  state => state.toastMessage
);
