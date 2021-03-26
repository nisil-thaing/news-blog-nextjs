import GlobalStyles from 'styles/index.style';

function MyApp ({ Component, pageProps }) {
  return <>
    <GlobalStyles />
    <Component { ...pageProps } />
  </>;
}

export default MyApp
