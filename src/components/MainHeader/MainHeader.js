import React from 'react';
import debounce from 'lodash/debounce';

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
  const toggleShowingRightSidebarHandler = debounce(onToggleShowingRightSidebar, 500);

  function handleOpenLoginDialog (event) {
    event.stopPropagation();
    showAuthenticationDialog(AUTHENTICATION_DIALOG_TYPES.LOGIN_DIALOG);
  }

  function handleOpenRegistrationDialog (event) {
    event.stopPropagation();
    showAuthenticationDialog(AUTHENTICATION_DIALOG_TYPES.REGISTRATION_DIALOG);
  }

  function onToggleShowingRightSidebar (isShowing) {
    const toggleClass = 'mb-sidebar-open',
      bodyElement = document?.querySelector('body');

    if (!bodyElement) {
      return;
    }

    const bodyElementClasslist = bodyElement.classList || '',
      isContainsToggleClass = bodyElementClasslist.contains(toggleClass);

    switch (true) {
      case isShowing && !isContainsToggleClass:
        bodyElementClasslist.add(toggleClass);
        break;
      case !isShowing && isContainsToggleClass:
        bodyElementClasslist.remove(toggleClass);
        break;
      default: break;
    }
  }

  return <Container className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark w-100">
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
              ? <RightSideBarWrapper onToggle={ toggleShowingRightSidebarHandler }>
                <Dropdown.Toggle variant="link" split={ false } className="p-0 border-0">
                  <LazyImage
                    src={ credentialsUserProfile?.avatar_url }
                    ratio={ 1/1 }
                    isRounded />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight renderOnMount className="p-0">
                  <Dropdown.Item className="p-0 backdrop" />
                  <div className="pt-3 pb-3 dropdown-inner">
                    <Dropdown.Item
                      as="div"
                      className="d-flex flex-column align-items-center pt-3 pb-3 user-info"
                      disabled>
                      <div className="avatar">
                        <LazyImage
                          src={ credentialsUserProfile?.avatar_url }
                          ratio={ 1/1 }
                          isRounded />
                      </div>
                      <h6 className="mt-3 mb-0 text-dark">{ credentialsUserProfile?.display_name }</h6>
                      {
                        credentialsUserProfile?.email
                          && <a
                            href={ `mailto:${ credentialsUserProfile.email }` }
                            className="mt-1 mb-0 text-secondary email">
                            { credentialsUserProfile.email }
                          </a>
                      }
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="text-center">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      className="text-center">
                      Something else
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </RightSideBarWrapper>
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