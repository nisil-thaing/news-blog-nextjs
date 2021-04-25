import { createReducer } from '@reduxjs/toolkit';

import {
  AUTHENTICATION_DIALOG_TYPES,
  TOAST_MESSAGE_TYPES,
  UI_INITIAL_STATE
} from 'store/states/uiState';
import { UI_ACTIONS } from 'store/actions/uiAction';

export default createReducer(UI_INITIAL_STATE, {
  [UI_ACTIONS.showAuthenticationDialog]: showAuthenticationDialogReducer,
  [UI_ACTIONS.hideAuthenticationDialog]: resetAuthenticationDialog,
  [UI_ACTIONS.showToastMessage]: (state, action) => ({
    ...state,
    toastMessage: {
      isShowing: true,
      type: action.payload?.type || TOAST_MESSAGE_TYPES.INFO,
      message: action.payload?.message,
      position: action.payload?.position
    }
  }),
  [UI_ACTIONS.hideToastMessage]: state => ({
    ...state,
    toastMessage: UI_INITIAL_STATE.toastMessage
  })
});

function resetAuthenticationDialog (state) {
  return {
    ...state,
    authenticationDialog: { ...UI_INITIAL_STATE.authenticationDialog }
  };
}

function showAuthenticationDialogReducer (state, action) {
  const { type, data } = action.payload;
  const isShowing = Boolean(type) && Object.values(AUTHENTICATION_DIALOG_TYPES).includes(type);

  if (!isShowing) {
    return resetAuthenticationDialog(state);
  }

  return {
    ...state,
    authenticationDialog: {
      ...state.authenticationDialog,
      isShowing,
      type,
      data
    }
  };
}