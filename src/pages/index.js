import React, { useEffect } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';

import { Container } from 'styles/pages/HomePage.style';
import MainLayout from 'containers/MainLayout/MainLayout';
import MainHeader from 'components/MainHeader/MainHeader';
import MainFooter from 'components/MainFooter/MainFooter';
import FeaturedSliderPostListing
  from 'components/pages/home-page/FeaturedSliderPostListing/FeaturedSliderPostListing';

import reduxWrapper from 'store';
import { mapArticleContentData } from 'utils/article.util';
import ArticleService from 'services/articleService';

const articleService = new ArticleService();

function HomePage ({ featuredArticles }) {
  useEffect(function () {
    console.log('Techinasia data: ', featuredArticles);
  }, [ featuredArticles ]);

  return <>
    <Head>
      <title>Home - News Blog NextJs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout header={ MainHeader } footer={ MainFooter }>
      <Container className="container">
        <section className="row">
          <section className="col-12 col-md-8 left-content">
            <section className="py-4 py-md-0 featured-content-wrapper">
              <FeaturedSliderPostListing data={ featuredArticles } />
            </section>
          </section>
          <section className="d-none d-md-block col-4 sticky-sidebar" />
        </section>
      </Container>
    </MainLayout>
  </>;
}

// eslint-disable-next-line no-unused-vars
export const getStaticProps = reduxWrapper.getStaticProps(async function ({ store }) {
  try {
    const res = await articleService
        .fetchSubscriberExclusiveArticles({ page: 1, itemsPerPage: 4 }),
      featuredArticles = res.posts.map(post => mapArticleContentData(post));

    return {
      props: { featuredArticles }
    };
  } catch (err) {
    console.log('load data error: ', err);

    return {
      props: { featuredArticles: null }
    };
  }
});

// eslint-disable-next-line no-unused-vars
function mapStateToProps (state) {
  return {};
}

// eslint-disable-next-line no-unused-vars
function mapDispatchToProps (dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);