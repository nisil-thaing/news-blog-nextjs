import { createAction } from '@reduxjs/toolkit';

export const AUTHENTICATION_USER_ACTION_TYPES = {
  FETCH_AUTHENTICATION_USER_PROFILE:
    '[AUTHENTICATION_USER_STATE] - FETCH_AUTHENTICATION_USER_PROFILE',
  FETCH_AUTHENTICATION_USER_PROFILE_SUCCESS:
    '[AUTHENTICATION_USER_STATE] - FETCH_AUTHENTICATION_USER_PROFILE_SUCCESS',
  FETCH_AUTHENTICATION_USER_PROFILE_FAILURE:
    '[AUTHENTICATION_USER_STATE] - FETCH_AUTHENTICATION_USER_PROFILE_FAILURE',
  CLEAR_CURRENT_USER_CREDENTIALS:
    '[AUTHENTICATION_USER_STATE] - CLEAR_CURRENT_USER_CREDENTIALS',
  CLEAR_CURRENT_USER_CREDENTIALS_SUCCESS:
    '[AUTHENTICATION_USER_STATE] - CLEAR_CURRENT_USER_CREDENTIALS_SUCCESS',
  CLEAR_CURRENT_USER_CREDENTIALS_FAILURE:
    '[AUTHENTICATION_USER_STATE] - CLEAR_CURRENT_USER_CREDENTIALS_FAILURE'
};
  
export const AUTHENTICATION_USER_ACTIONS = {
  fetchAuthenticationUserProfile: createAction(AUTHENTICATION_USER_ACTION_TYPES.FETCH_AUTHENTICATION_USER_PROFILE),
  fetchAuthenticationUserProfileSuccess: createAction(
    AUTHENTICATION_USER_ACTION_TYPES.FETCH_AUTHENTICATION_USER_PROFILE_SUCCESS,
    responseData => ({
      payload: responseData
    })
  ),
  fetchAuthenticationUserProfileFailure: createAction(
    AUTHENTICATION_USER_ACTION_TYPES.FETCH_AUTHENTICATION_USER_PROFILE_FAILURE,
    errorDescription => ({
      payload: errorDescription
    })
  ),
  clearCurrentUserCredentials: createAction(
    AUTHENTICATION_USER_ACTION_TYPES.CLEAR_CURRENT_USER_CREDENTIALS
  ),
  clearCurrentUserCredentialsSuccess: createAction(
    AUTHENTICATION_USER_ACTION_TYPES.CLEAR_CURRENT_USER_CREDENTIALS_SUCCESS
  ),
  clearCurrentUserCredentialsFailure: createAction(
    AUTHENTICATION_USER_ACTION_TYPES.CLEAR_CURRENT_USER_CREDENTIALS_FAILURE,
    errorDescription => ({
      payload: errorDescription
    })
  )
};
