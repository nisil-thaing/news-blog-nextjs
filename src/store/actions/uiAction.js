import { createAction } from '@reduxjs/toolkit';

export const UI_ACTION_TYPES = {
  SHOW_TOAST_MESSAGE: '[UI_STATE] - SHOW_TOAST_MESSAGE',
  HIDE_TOAST_MESSAGE: '[UI_STATE] - HIDE_TOAST_MESSAGE'
};

export const UI_ACTIONS = {
  showToastMessage: createAction(UI_ACTION_TYPES.SHOW_TOAST_MESSAGE, toastMessageState => ({
    payload: toastMessageState
  })),
  hideToastMessage: createAction(UI_ACTION_TYPES.HIDE_TOAST_MESSAGE)
};