import { createAction } from '@reduxjs/toolkit';

export const UI_ACTION_TYPES = {
  SHOW_AUTHENTICATION_DIALOG: '[UI_STATE] - SHOW_AUTHENTICATION_DIALOG',
  HIDE_AUTHENTICATION_DIALOG: '[UI_STATE] - HIDE_AUTHENTICATION_DIALOG',
  SHOW_TOAST_MESSAGE: '[UI_STATE] - SHOW_TOAST_MESSAGE',
  HIDE_TOAST_MESSAGE: '[UI_STATE] - HIDE_TOAST_MESSAGE'
};

export const UI_ACTIONS = {
  showAuthenticationDialog: createAction(UI_ACTION_TYPES.SHOW_AUTHENTICATION_DIALOG, (type, data = {}) => ({
    payload: { type, data }
  })),
  hideAuthenticationDialog: createAction(UI_ACTION_TYPES.HIDE_AUTHENTICATION_DIALOG),
  showToastMessage: createAction(UI_ACTION_TYPES.SHOW_TOAST_MESSAGE, toastMessageState => ({
    payload: toastMessageState
  })),
  hideToastMessage: createAction(UI_ACTION_TYPES.HIDE_TOAST_MESSAGE)
};