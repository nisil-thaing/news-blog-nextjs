import React from 'react';

import { Container } from './LoginForm.style';

function LoginForm () {
  return <Container>
    <h1 className="mb-4 text-center">Log in</h1>
    <div className="row">
      <div className="col-6 pr-1">
        <button
          type="button"
          className="d-flex justify-content-center align-items-center w-100 btn btn-primary">
          <i className="mr-2 bi bi-facebook" />
          Facebook
        </button>
      </div>
      <div className="col-6 pl-1">
        <button
          type="button"
          className="d-flex justify-content-center align-items-center w-100 btn btn-outline-secondary">
          <i className="mr-2 bi bi-google" />
          Google
        </button>
      </div>
      <div className="col-12 mt-3">
        <button
          type="button"
          className="d-flex justify-content-center align-items-center w-100 btn btn-link">
          <i className="mr-2 bi bi-envelope" />
          Or log in using email
          <i className="ml-2 bi bi-arrow-down" />
        </button>
      </div>
    </div>
  </Container>;
}

export default LoginForm;
