import React from 'react';

import { Container } from './MainFooter.style';

function MainFooter () {
  return <Container className="w-100 h-100 pt-2 pb-4 pb-md-5">
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
      className="d-flex justify-content-center align-items-center">
      Powered by{' '}
      <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
    </a>
  </Container>;
}

export default MainFooter;
