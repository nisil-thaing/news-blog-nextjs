import { all, call, put, takeLatest } from 'redux-saga/effects';

import httpClient from 'services/httpClient';
import {
  getDataBodyFromResponseToData,
  mapErrorResponseToErrorObject
} from 'utils/api-request.util';
import { DEMO_DATA_ACTION_TYPES } from 'store/actions/demoDataAction';
import { UI_ACTION_TYPES } from 'store/actions/uiAction';
import { TOAST_MESSAGE_POSITION, TOAST_MESSAGE_TYPES } from 'store/states/uiState';

function* fetchDemoDataSaga (action) {
  const { page, itemsPerPage } = action.payload;

  try {
    const responseData = yield call(
      httpClient.get,
      'posts',
      { params: { page, per_page: itemsPerPage } }
    );
    const data = getDataBodyFromResponseToData(responseData);

    yield put({
      type: DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_SUCCESS,
      payload: data
    });
  } catch (err) {
    const errorDescription = mapErrorResponseToErrorObject(err);

    yield all([
      put({
        type: DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_FAILURE,
        payload: errorDescription
      }),
      put({
        type: UI_ACTION_TYPES.SHOW_TOAST_MESSAGE,
        payload: {
          type: TOAST_MESSAGE_TYPES.ERROR,
          message: errorDescription.message,
          position: {
            vertical: TOAST_MESSAGE_POSITION.VERTICAL.TOP,
            horizontal: TOAST_MESSAGE_POSITION.HORIZONTAL.RIGHT
          }
        }
      })
    ]);
  }
}

function* demoDataSagas () {
  yield all([
    takeLatest(DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA, fetchDemoDataSaga)
  ]);
}

export default demoDataSagas;