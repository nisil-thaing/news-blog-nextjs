import { createReducer } from '@reduxjs/toolkit';

import { AUTHENTICATION_USER_INITIAL_STATE } from 'store/states/authenticationUserState';
import { AUTHENTICATION_USER_ACTIONS } from 'store/actions/authenticationUserAction';

export default createReducer(AUTHENTICATION_USER_INITIAL_STATE, {
  [AUTHENTICATION_USER_ACTIONS.fetchAuthenticationUserProfile]: state => ({
    ...state,
    isFetching: true
  }),
  [AUTHENTICATION_USER_ACTIONS.fetchAuthenticationUserProfileSuccess]: (state, action) => ({
    ...state,
    isFetching: false,
    data: action.payload
  }),
  [AUTHENTICATION_USER_ACTIONS.fetchAuthenticationUserProfileFailure]: (state, action) => ({
    ...state,
    isFetching: false,
    error: action.payload
  })
});
