import React, { useEffect } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { END } from 'redux-saga';

import { Container } from 'styles/pages/HomePage.style';
import MainLayout from 'containers/MainLayout/MainLayout';
import MainHeader from 'components/MainHeader/MainHeader';
import MainFooter from 'components/MainFooter/MainFooter';
import FeaturedSliderPostListing from 'components/pages/home-page/FeaturedSliderPostListing/FeaturedSliderPostListing';

import reduxWrapper from 'store';
import { DEMO_DATA_ACTIONS } from 'store/actions/demoDataAction';
import { getDemoData } from 'store/selectors/demoDataSelector';

function HomePage ({ demoData }) {
  useEffect(function () {
    console.log('Techinasia data: ', demoData);
  }, [ demoData ]);

  return <>
    <Head>
      <title>Home - News Blog NextJs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout header={ MainHeader } footer={ MainFooter }>
      <Container className="container">
        <section className="row">
          <section className="col-12 col-md-8 left-content">
            <section className="bg-secondary py-4 featured-content-wrapper">
              <FeaturedSliderPostListing />
            </section>
          </section>
          <section className="d-none d-md-block col-4 sticky-sidebar" />
        </section>
      </Container>
    </MainLayout>
  </>;
}

export const getStaticProps = reduxWrapper.getStaticProps(async function ({ store }) {
  if (!store.getState().demoData?.data) {
    store.dispatch(DEMO_DATA_ACTIONS.fetchDemoData());
    store.dispatch(END);
  }

  await store.sagaTask.toPromise();
});

function mapStateToProps (state) {
  return {
    demoData: getDemoData(state)
  };
}

// eslint-disable-next-line no-unused-vars
function mapDispatchToProps (dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);