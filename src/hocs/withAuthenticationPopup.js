import React, { createContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import AuthenticationDialog from 'components/AuthenticationDialog/AuthenticationDialog';
import LoginForm from 'components/LoginForm/LoginForm';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import withLoginHandler from './withLoginHandler';

import { AUTHENTICATION_DIALOG_TYPES } from 'store/states/uiState';
import { UI_ACTIONS } from 'store/actions/uiAction';
import { AUTHENTICATION_USER_ACTIONS } from 'store/actions/authenticationUserAction';
import {
  getAuthenticationDialogState,
  getWhetherShowingAuthenticationDialog
} from 'store/selectors/uiSelector';
import {
  getAuthenticationUserProfile,
  getWhetherCredentialsUserExisted
} from 'store/selectors/authenticationUserSelector';

function mapStateToProps (state) {
  const authenticationDialogState = getAuthenticationDialogState(state),
    isShowingAuthenticationDialog = getWhetherShowingAuthenticationDialog(state),
    isLoggedInState = getWhetherCredentialsUserExisted(state),
    credentialsUserProfile = getAuthenticationUserProfile(state);

  return {
    authenticationDialogState,
    isShowingAuthenticationDialog,
    isLoggedInState,
    credentialsUserProfile
  };
}

function mapDispatchToProps (dispatch) {
  const showAuthenticationDialog = bindActionCreators(UI_ACTIONS.showAuthenticationDialog, dispatch),
    hideAuthenticationDialog = bindActionCreators(UI_ACTIONS.hideAuthenticationDialog, dispatch),
    fetchAuthenticationUserProfile = bindActionCreators(
      AUTHENTICATION_USER_ACTIONS.fetchAuthenticationUserProfile,
      dispatch
    ),
    clearCurrentUserCredentials = bindActionCreators(
      AUTHENTICATION_USER_ACTIONS.clearCurrentUserCredentials,
      dispatch
    );

  return {
    showAuthenticationDialog,
    hideAuthenticationDialog,
    fetchAuthenticationUserProfile,
    clearCurrentUserCredentials
  };
}

const LayoutContext = createContext(),
  LoginFormRenderer = withLoginHandler(LoginForm);

function withAuthenticationPopup (WrapperComponent) {
  const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

  return enhance(function (props) {
    const contextProps = {
      ...props.authenticationDialogState,
      isShowing: props.isShowingAuthenticationDialog,
      isLoggedInState: props.isLoggedInState,
      credentialsUserProfile: props.credentialsUserProfile,
      showAuthenticationDialog: props.showAuthenticationDialog,
      hideAuthenticationDialog: props.hideAuthenticationDialog,
      fetchCredentialsUserProfile: props.fetchAuthenticationUserProfile,
      logout: props.clearCurrentUserCredentials
    };

    useEffect(function () {
      props.fetchAuthenticationUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleSwitchingToRegistrationForm () {
      props.showAuthenticationDialog(AUTHENTICATION_DIALOG_TYPES.REGISTRATION_DIALOG);
    }

    function handleSwitchingToLoginForm () {
      props.showAuthenticationDialog(AUTHENTICATION_DIALOG_TYPES.LOGIN_DIALOG);
    }

    return <LayoutContext.Provider value={ contextProps }>
      <WrapperComponent
        { ...props }
        authenticationDialogState={ undefined }
        isShowingAuthenticationDialog={ undefined }
        showAuthenticationDialog={ undefined }
        hideAuthenticationDialog={ undefined }
        fetchAuthenticationUserProfile={ undefined } />
      {
        !props.isLoggedInState && <AuthenticationDialog>
          {
            props.authenticationDialogState.type === AUTHENTICATION_DIALOG_TYPES.LOGIN_DIALOG
              && <LoginFormRenderer onSwitchToRegistrationForm={ handleSwitchingToRegistrationForm } />
          }
          {
            props.authenticationDialogState.type === AUTHENTICATION_DIALOG_TYPES.REGISTRATION_DIALOG
              && <RegistrationForm onSwitchToLoginForm={ handleSwitchingToLoginForm } />
          }
        </AuthenticationDialog>
      }
    </LayoutContext.Provider>;
  });
}

export function useAuthenticationDialog () {
  const context = React.useContext(LayoutContext);

  if (context === undefined) {
    throw new Error('useAuthenticationDialog must be used within the withAuthenticationPopup');
  }

  return context;
}

export default withAuthenticationPopup;