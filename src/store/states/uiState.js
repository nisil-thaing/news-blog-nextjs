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

export const UI_INITIAL_STATE = {
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
