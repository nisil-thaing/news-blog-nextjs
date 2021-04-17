import { createSelector } from 'reselect';

export const getAuthenticationUserState = state => state.authenticationUser;

export const getAuthenticationUserProfile = createSelector(
  getAuthenticationUserState,
  state => state.data
);

export const getWhetherCredentialsUserExisted = createSelector(
  getAuthenticationUserProfile,
  data => Boolean(data?.email)
);
