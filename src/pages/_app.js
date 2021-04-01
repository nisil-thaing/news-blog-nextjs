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
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin="anonymous"></link>
    </Head>
    <GlobalStyles />
    <Component { ...pageProps } />
  </>;
}

export default reduxWrapper.withRedux(MasterApp);
