import React, { useEffect } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container,
  MainWrapper
} from 'styles/pages/HomePage.style';
import MainLayout from 'containers/MainLayout/MainLayout';
import MainHeader from 'components/MainHeader/MainHeader';
import MainFooter from 'components/MainFooter/MainFooter';

import reduxWrapper from 'store';
import { TOAST_MESSAGE_POSITION, TOAST_MESSAGE_TYPES } from 'store/states/uiState';
import { UI_ACTIONS } from 'store/actions/uiAction';
import { getUIToastMessageState } from 'store/selectors/uiSelector';

function HomePage ({ data, toastMessageState, showToastMessage }) {
  useEffect(function () {
    if (showToastMessage) {
      showToastMessage({
        type: TOAST_MESSAGE_TYPES.ERROR,
        message: 'Client-side dispatch: This is a testing error',
        position: {
          vertical: TOAST_MESSAGE_POSITION.VERTICAL.TOP,
          horizontal: TOAST_MESSAGE_POSITION.HORIZONTAL.RIGHT
        }
      });
    }
  }, [ showToastMessage ]);

  useEffect(function () {
    console.log('Techinasia data: ', data);
  }, [ data ]);

  useEffect(function () {
    console.log('toastMessageState: ', toastMessageState);
  }, [ toastMessageState ]);

  return <Container className="d-flex flex-column justify-content-center align-items-center">
    <Head>
      <title>News Blog NextJs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout header={ MainHeader } footer={ MainFooter }>
      <MainWrapper className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="m-0 text-center title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="text-center description">
          Get started by editing{' '}
          <code className="code">pages/index.js</code>
        </p>

        <div className="d-flex flex-wrap flex-column flex-md-row justify-content-center align-items-center w-100 grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card">
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </MainWrapper>
    </MainLayout>
  </Container>;
}

// eslint-disable-next-line no-unused-vars
export const getServerSideProps = reduxWrapper.getServerSideProps(async function ({ store }) {
  const res = await fetch('https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1&per_page=10');
  const data = await res.json();

  store.dispatch(UI_ACTIONS.showToastMessage({
    type: TOAST_MESSAGE_TYPES.ERROR,
    message: 'Server-side dispatch: This is a testing error',
    position: {
      vertical: TOAST_MESSAGE_POSITION.VERTICAL.TOP,
      horizontal: TOAST_MESSAGE_POSITION.HORIZONTAL.RIGHT
    }
  }));

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { data }
  };
});

function mapStateToProps (state) {
  return {
    toastMessageState: getUIToastMessageState(state)
  };
}

function mapDispatchToProps (dispatch) {
  return {
    showToastMessage: bindActionCreators(UI_ACTIONS.showToastMessage, dispatch)
    // startClock: bindActionCreators(startClock, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);