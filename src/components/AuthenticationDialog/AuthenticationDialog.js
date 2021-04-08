import React from 'react';

import { Modal } from 'react-bootstrap';

import { Container } from './AuthenticationDialog.style';
import { useAuthenticationDialog } from 'hocs/withAuthenticationPopup';

function AuthenticationDialog () {
  const { isShowing/* , type */, hideAuthenticationDialog } = useAuthenticationDialog();

  return <Container
    show={ isShowing }
    centered={ true }
    onHide={ hideAuthenticationDialog }
    autoFocus={ false }>
    <section className="justify-content-end align-items-center border-0 modal-header">
      <button type="button" className="d-block m-0 p-0 close">
        <i className="d-inherit bi bi-x" />
      </button>
    </section>
    <section className="modal-body">
      Form body
    </section>
    <Modal.Footer>
      <button type="button" className="btn btn-secondary">Close</button>
      <button type="button" className="btn btn-primary">Save changes</button>
    </Modal.Footer>
  </Container>;
}

export default AuthenticationDialog;