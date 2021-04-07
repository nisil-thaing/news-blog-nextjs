import React, { createContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import AuthenticationDialog from 'components/AuthenticationDialog/AuthenticationDialog';

import { UI_ACTIONS } from 'store/actions/uiAction';
import {
  getAuthenticationDialogState,
  getWhetherShowingAuthenticationDialog
} from 'store/selectors/uiSelector';

function mapStateToProps (state) {
  const authenticationDialogState = getAuthenticationDialogState(state),
    isShowingAuthenticationDialog = getWhetherShowingAuthenticationDialog(state);

  return {
    authenticationDialogState,
    isShowingAuthenticationDialog
  };
}

function mapDispatchToProps (dispatch) {
  const showAuthenticationDialog = bindActionCreators(UI_ACTIONS.showAuthenticationDialog, dispatch),
    hideAuthenticationDialog = bindActionCreators(UI_ACTIONS.hideAuthenticationDialog, dispatch);

  return {
    showAuthenticationDialog,
    hideAuthenticationDialog
  };
}

const LayoutContext = createContext();

function withAuthenticationPopup (WrapperComponent) {
  const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

  return enhance(function (props) {
    const contextProps = {
      ...props.authenticationDialogState,
      isShowing: props.isShowingAuthenticationDialog,
      showAuthenticationDialog: props.showAuthenticationDialog,
      hideAuthenticationDialog: props.hideAuthenticationDialog
    };

    return <LayoutContext.Provider value={ contextProps }>
      <WrapperComponent
        { ...props }
        authenticationDialogState={ undefined }
        isShowingAuthenticationDialog={ undefined }
        showAuthenticationDialog={ undefined }
        hideAuthenticationDialog={ undefined } />
      <AuthenticationDialog />
    </LayoutContext.Provider>;
  });
}

export function useAuthenticationDialog () {
  const context = React.useContext(LayoutContext);

  if (context === undefined) {
    throw new Error('useAuthenticationDialog must be used within a MainLayout');
  }

  return context;
}

export default withAuthenticationPopup;