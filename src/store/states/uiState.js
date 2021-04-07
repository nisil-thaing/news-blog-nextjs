export const TOAST_MESSAGE_POSITION = {
  VERTICAL: {
    TOP: 'top',
    BOTTOM: 'bottom'
  },
  HORIZONTAL: {
    LEFT: 'left',
    RIGHT: 'right'
  }
};

export const TOAST_MESSAGE_TYPES = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success'
};

export const AUTHENTICATION_DIALOG_TYPES = {
  LOGIN_DIALOG: 'AUTHENTICATION_LOGIN_DIALOG',
  REGISTRATION_DIALOG: 'AUTHENTICATION_REGISTRATION_DIALOG'
};

export const UI_INITIAL_STATE = {
  authenticationDialog: {
    isShowing: false,
    type: null,
    data: null
  },
  toastMessage: {
    isShowing: false,
    type: null,
    message: null,
    position: {
      vertical: TOAST_MESSAGE_POSITION.VERTICAL.TOP,
      horizontal: TOAST_MESSAGE_POSITION.HORIZONTAL.RIGHT
    }
  }
};
