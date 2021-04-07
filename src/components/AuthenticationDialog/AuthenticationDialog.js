import React from 'react';

import { Modal } from 'react-bootstrap';

import { useAuthenticationDialog } from 'hocs/withAuthenticationPopup';

function AuthenticationDialog () {
  const { isShowing, type, hideAuthenticationDialog } = useAuthenticationDialog();

  return <Modal show={ isShowing } onHide={ hideAuthenticationDialog }>
    <Modal.Header closeButton>
      <Modal.Title>This is { type } dialog</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>

    <Modal.Footer>
      <button type="button" className="btn btn-secondary">Close</button>
      <button type="button" className="btn btn-primary">Save changes</button>
    </Modal.Footer>
  </Modal>;
}

export default AuthenticationDialog;