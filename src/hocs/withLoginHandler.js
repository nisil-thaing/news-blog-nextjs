import React, { useReducer, useRef } from 'react';
import { EMPTY, from, Subject } from 'rxjs';
import {
  catchError,
  finalize,
  takeUntil
} from 'rxjs/operators';
import debounce from 'lodash.debounce';

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
    // case ACTION_TYPES.REQUEST_TO_LOGIN_FAILURE:
    default:
      return {
        ...state,
        isFetching: false,
        data: null,
        error: action.payload
      };
  }
}

function withLoginHandler (WrapperComponent) {
  // eslint-disable-next-line react/display-name
  return function ({ onSkip, onFinish, ...restProps }) {
    const completionSubjectRef$ = useRef(null);
    const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE);
    const loginRequestHandler = debounce(handleLogin, 500);

    function unsubscribeLoginRequestHandle () {
      if (!completionSubjectRef$.current) {
        return false;
      }

      completionSubjectRef$.current.next();
      completionSubjectRef$.current.complete();
      completionSubjectRef$.current = null;

      return true;
    }

    function handleLogin (values) {
      const isRecentlyCompleted = unsubscribeLoginRequestHandle();
      
      if (!values?.email || !values?.password || isRecentlyCompleted) {
        return null;
      }

      completionSubjectRef$.current = new Subject();
      dispatch({ type: ACTION_TYPES.REQUEST_TO_LOGIN });

      return from(authenticationService.requestToLogin(values))
        .pipe(
          catchError(function (errorDescription) {
            dispatch({ type: ACTION_TYPES.REQUEST_TO_LOGIN_FAILURE, payload: errorDescription });
            return EMPTY;
          }),
          takeUntil(completionSubjectRef$.current),
          finalize(function () {
            unsubscribeLoginRequestHandle();
          })
        )
        .subscribe(function (result) {
          dispatch({
            type: ACTION_TYPES.REQUEST_TO_LOGIN_SUCCESS,
            payload: result
          });
          setCookie(COOKIE_KEYS.ACCESS_TOKEN, result.id_token);

          if (onSkip) {
            onSkip();
          }

          if (onFinish) {
            onFinish();
          }

          return null;
        });
    }

    return <WrapperComponent
      { ...restProps }
      isLoading={ state.isFetching }
      latestRequestError={ state.error }
      onSubmit={ loginRequestHandler } />;
  };
}

export default withLoginHandler;
