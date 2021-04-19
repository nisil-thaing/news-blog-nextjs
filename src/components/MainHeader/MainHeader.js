import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import { Container, RightSideBarWrapper } from './MainHeader.style';
import LazyImage from 'components/LazyImage/LazyImage';
import { useAuthenticationDialog } from 'hocs/withAuthenticationPopup';

import { AUTHENTICATION_DIALOG_TYPES } from 'store/states/uiState';

function MainHeader () {
  const {
    isLoggedInState,
    showAuthenticationDialog,
    credentialsUserProfile
  } = useAuthenticationDialog();

  function handleOpenLoginDialog (event) {
    event.stopPropagation();
    showAuthenticationDialog(AUTHENTICATION_DIALOG_TYPES.LOGIN_DIALOG);
  }

  function handleOpenRegistrationDialog (event) {
    event.stopPropagation();
    showAuthenticationDialog(AUTHENTICATION_DIALOG_TYPES.REGISTRATION_DIALOG);
  }

  return <Container className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark w-100">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="left-content">
          <a className="navbar-brand" href="/">
            <h2 className="d-md-none m-0">NBN</h2>
            <h1 className="d-none d-md-block m-0">NBN</h1>
          </a>
        </div>
        <div className="right-content">
          {
            isLoggedInState
              ? <>
                <RightSideBarWrapper>
                  <Dropdown.Toggle variant="link" split={ false } className="p-0 border-0">
                    <LazyImage
                      src={ credentialsUserProfile?.avatar_url }
                      ratio={ 1/1 }
                      isRounded />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </RightSideBarWrapper>
              </>
              : <>
                <button
                  type="button"
                  className="text-decoration-none text-light btn btn-link"
                  onClick={ handleOpenLoginDialog }>
                  Sign In
                </button>
                <button
                  type="button"
                  className="ml-1 ml-md-3 btn btn-secondary"
                  onClick={ handleOpenRegistrationDialog }>
                  Get Started
                </button>
              </>
          }
        </div>
      </div>
    </div>
  </Container>;
}

export default MainHeader;