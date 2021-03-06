import { createAction } from '@reduxjs/toolkit';

export const DEMO_DATA_ACTION_TYPES = {
  FETCH_DEMO_DATA: '[DEMO_DATA_STATE] - FETCH_DEMO_DATA',
  FETCH_DEMO_DATA_SUCCESS: '[DEMO_DATA_STATE] - FETCH_DEMO_DATA_SUCCESS',
  FETCH_DEMO_DATA_FAILURE: '[DEMO_DATA_STATE] - FETCH_DEMO_DATA_FAILURE'
};

export const DEMO_DATA_ACTIONS = {
  fetchDemoData: createAction(DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA, (page = 1, itemsPerPage = 10) => ({
    payload: { page, itemsPerPage }
  })),
  fetchDemoDataSuccess: createAction(DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_SUCCESS, responseData => ({
    payload: responseData
  })),
  fetchDemoDataFailure: createAction(DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_FAILURE, errorDescription => ({
    payload: errorDescription
  }))
};
