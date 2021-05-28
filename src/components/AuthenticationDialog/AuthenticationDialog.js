import React from 'react';
import { node } from 'prop-types';

import { Container } from './AuthenticationDialog.style';
import { useAuthenticationDialog } from 'hocs/withAuthenticationPopup';

function AuthenticationDialog ({ children }) {
  const { isShowing, hideAuthenticationDialog } = useAuthenticationDialog();

  return <Container
    show={ isShowing }
    centered={ true }
    onHide={ hideAuthenticationDialog }
    autoFocus={ false }>
    <section className="justify-content-end align-items-center border-0 modal-header">
      <button
        type="button"
        className="d-block m-0 p-0 close"
        onClick={ hideAuthenticationDialog }>
        <i className="d-inherit bi bi-x" />
      </button>
    </section>
    <section className="p-4 modal-body">
      { children }
    </section>
  </Container>;
}

AuthenticationDialog.propTypes = {
  children: node.isRequired
};

export default AuthenticationDialog;
