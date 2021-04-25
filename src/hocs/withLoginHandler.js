import React, { useReducer } from 'react';
import { EMPTY, from, Subject } from 'rxjs';
import { catchError, finalize, takeUntil } from 'rxjs/operators';
import debounce from 'lodash.debounce';

import { useAuthenticationDialog } from './withAuthenticationPopup';

import { DEFAULT_DATA_INITIAL_STATE } from 'utils/data-store.util';
import { COOKIE_KEYS, setCookie } from 'utils/api-request.util';
import AuthenticationService from 'services/authenticationService';

const authenticationService = new AuthenticationService(),
  ACTION_TYPES = {
    REQUEST_TO_LOGIN:
      '[WITH_LOGIN_HANDLER_HOC] - REQUEST_TO_LOGIN',
    REQUEST_TO_LOGIN_SUCCESS:
      '[WITH_LOGIN_HANDLER_HOC] - REQUEST_TO_LOGIN_SUCCESS',
    REQUEST_TO_LOGIN_FAILURE:
      '[WITH_LOGIN_HANDLER_HOC] - REQUEST_TO_LOGIN_FAILURE'
  }, INITIAL_STATE = {
    ...DEFAULT_DATA_INITIAL_STATE,
    data: null
  };

function reducer (
  state,
  action
) {
  switch (action.type) {
    case ACTION_TYPES.REQUEST_TO_LOGIN:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case ACTION_TYPES.REQUEST_TO_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case ACTION_TYPES.REQUEST_TO_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        data: null,
        error: action.payload
      };
    default:
      return state;
  }
}

function withLoginHandler (WrapperComponent) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    const {
      hideAuthenticationDialog,
      fetchCredentialsUserProfile
    } = useAuthenticationDialog();
    const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE);
    const loginRequestHandler = debounce(handleLogin, 500);

    function handleLogin (values) {
      const { email, password } = values;
      
      if (!email || !password) {
        return;
      }

      const completionSubject$ = new Subject();
      dispatch({ type: ACTION_TYPES.REQUEST_TO_LOGIN });

      from(authenticationService.requestToLogin(values))
        .pipe(
          catchError(function (errorDescription) {
            dispatch({ type: ACTION_TYPES.REQUEST_TO_LOGIN_FAILURE, payload: errorDescription });
            return EMPTY;
          }),
          takeUntil(completionSubject$),
          finalize(function () {
            completionSubject$.next();
            completionSubject$.complete();
          })
        )
        .subscribe(function (result) {
          if (result?.id_token) {
            dispatch({
              type: ACTION_TYPES.REQUEST_TO_LOGIN_SUCCESS,
              payload: result
            });
            setCookie(COOKIE_KEYS.ACCESS_TOKEN, result.id_token);
            hideAuthenticationDialog();
            fetchCredentialsUserProfile();
          }
        });
    }

    return <WrapperComponent
      { ...props }
      isLoading={ state.isFetching }
      onSubmit={ loginRequestHandler } />;
  };
}

export default withLoginHandler;