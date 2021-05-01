import { all, call, put, takeLatest } from 'redux-saga/effects';

import { COOKIE_KEYS, deleteCookie, getCookie } from 'utils/api-request.util';
import AuthenticationService from 'services/authenticationService';
import { TOAST_MESSAGE_POSITION, TOAST_MESSAGE_TYPES } from 'store/states/uiState';
import { UI_ACTION_TYPES } from 'store/actions/uiAction';
import { AUTHENTICATION_USER_ACTION_TYPES } from 'store/actions/authenticationUserAction';

const authenticationService = new AuthenticationService();

function* fetchAuthenticationUserProfileSaga () {
  try {
    const accessToken = getCookie(COOKIE_KEYS.ACCESS_TOKEN);

    if (!accessToken) {
      return yield put({
        type: AUTHENTICATION_USER_ACTION_TYPES.FETCH_AUTHENTICATION_USER_PROFILE_SUCCESS,
        payload: null
      });
    }

    const responseData = yield call(authenticationService.fetchAuthenticationUserProfile);

    return yield put({
      type: AUTHENTICATION_USER_ACTION_TYPES.FETCH_AUTHENTICATION_USER_PROFILE_SUCCESS,
      payload: responseData
    });
  } catch (err) {
    deleteCookie(COOKIE_KEYS.ACCESS_TOKEN);

    return yield all([
      put({
        type: AUTHENTICATION_USER_ACTION_TYPES.FETCH_AUTHENTICATION_USER_PROFILE_FAILURE,
        payload: err
      }),
      put({
        type: UI_ACTION_TYPES.SHOW_TOAST_MESSAGE,
        payload: {
          type: TOAST_MESSAGE_TYPES.ERROR,
          message: err.message,
          position: {
            vertical: TOAST_MESSAGE_POSITION.VERTICAL.TOP,
            horizontal: TOAST_MESSAGE_POSITION.HORIZONTAL.RIGHT
          }
        }
      })
    ]);
  }
}

function* clearCurrentUserCredentialsSaga () {
  try {
    const accessToken = getCookie(COOKIE_KEYS.ACCESS_TOKEN);

    if (!accessToken) {
      return yield put({ type: AUTHENTICATION_USER_ACTION_TYPES.CLEAR_CURRENT_USER_CREDENTIALS_SUCCESS });
    }

    const responseData = yield call(authenticationService.requestToLogout);

    if (!responseData?.success) {
      throw new Error('Logout failed!');
    }

    deleteCookie(COOKIE_KEYS.ACCESS_TOKEN);
    return yield put({ type: AUTHENTICATION_USER_ACTION_TYPES.CLEAR_CURRENT_USER_CREDENTIALS_SUCCESS });
  } catch (err) {
    return yield all([
      put({
        type: AUTHENTICATION_USER_ACTION_TYPES.CLEAR_CURRENT_USER_CREDENTIALS_FAILURE,
        payload: err
      }),
      put({
        type: UI_ACTION_TYPES.SHOW_TOAST_MESSAGE,
        payload: {
          type: TOAST_MESSAGE_TYPES.ERROR,
          message: err.message,
          position: {
            vertical: TOAST_MESSAGE_POSITION.VERTICAL.TOP,
            horizontal: TOAST_MESSAGE_POSITION.HORIZONTAL.RIGHT
          }
        }
      })
    ]);
  }
}

function* authenticationUserSagas () {
  yield all([
    takeLatest(
      AUTHENTICATION_USER_ACTION_TYPES.FETCH_AUTHENTICATION_USER_PROFILE,
      fetchAuthenticationUserProfileSaga
    ),
    takeLatest(
      AUTHENTICATION_USER_ACTION_TYPES.CLEAR_CURRENT_USER_CREDENTIALS,
      clearCurrentUserCredentialsSaga
    )
  ]);
}

export default authenticationUserSagas;