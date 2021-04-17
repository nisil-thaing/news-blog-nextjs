import { all, call, put, takeLatest } from 'redux-saga/effects';

import { COOKIE_KEYS, deleteCookie } from 'utils/api-request.util';
import AuthenticationService from 'services/authenticationService';
import { TOAST_MESSAGE_POSITION, TOAST_MESSAGE_TYPES } from 'store/states/uiState';
import { UI_ACTION_TYPES } from 'store/actions/uiAction';
import { AUTHENTICATION_USER_ACTION_TYPES } from 'store/actions/authenticationUserAction';

const authenticationService = new AuthenticationService();

function* fetchAuthenticationUserProfileSaga () {
  try {
    const responseData = yield call(authenticationService.fetchAuthenticationUserProfile);

    yield put({
      type: AUTHENTICATION_USER_ACTION_TYPES.FETCH_AUTHENTICATION_USER_PROFILE_SUCCESS,
      payload: responseData
    });
  } catch (err) {
    deleteCookie(COOKIE_KEYS.ACCESS_TOKEN);

    yield all([
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

function* authenticationUserSagas () {
  yield all([
    takeLatest(AUTHENTICATION_USER_ACTION_TYPES.FETCH_AUTHENTICATION_USER_PROFILE, fetchAuthenticationUserProfileSaga)
  ]);
}

export default authenticationUserSagas;