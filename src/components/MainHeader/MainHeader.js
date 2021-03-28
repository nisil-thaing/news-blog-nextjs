import React from 'react';

import { Container } from './MainHeader.style';

function MainHeader () {
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
          <button
            type="button"
            className="text-decoration-none text-light btn btn-link">
            Sign In
          </button>
          <button
            type="button"
            className="ml-1 ml-md-3 btn btn-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </Container>;
}

export default MainHeader;