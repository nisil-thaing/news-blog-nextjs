import { createReducer } from '@reduxjs/toolkit';

import { DEMO_DATA_INITIAL_STATE } from 'store/states/demoDataState';
import { DEMO_DATA_ACTIONS } from 'store/actions/demoDataAction';

export default createReducer(DEMO_DATA_INITIAL_STATE, {
  [DEMO_DATA_ACTIONS.fetchDemoData]: state => ({
    ...state,
    isFetching: true
  }),
  [DEMO_DATA_ACTIONS.fetchDemoDataSuccess]: (state, action) => ({
    ...state,
    isFetching: false,
    data: action.payload
  }),
  [DEMO_DATA_ACTIONS.fetchDemoDataFailure]: (state, action) => ({
    ...state,
    isFetching: false,
    error: action.payload
  })
});
