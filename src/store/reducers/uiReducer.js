import { createReducer } from '@reduxjs/toolkit';

import { TOAST_MESSAGE_TYPES, UI_INITIAL_STATE } from 'store/states/uiState';
import { UI_ACTIONS } from 'store/actions/uiAction';

export default createReducer(UI_INITIAL_STATE, {
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
