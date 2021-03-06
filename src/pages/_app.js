import React from 'react';
import Head from 'next/head';

import GlobalStyles from 'styles/index.style';
import reduxWrapper from 'store';

function MasterApp ({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap"
        rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap"
        rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
    </Head>
    <GlobalStyles />
    <Component { ...pageProps } />
  </>;
}

export default reduxWrapper.withRedux(MasterApp);
