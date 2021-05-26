import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { END } from 'redux-saga';

import { Container } from 'styles/pages/HomePage.style';
import MainLayout from 'containers/MainLayout/MainLayout';
import MainHeader from 'components/MainHeader/MainHeader';
import MainFooter from 'components/MainFooter/MainFooter';
import FeaturedSliderPostListing
  from 'components/pages/home-page/FeaturedSliderPostListing/FeaturedSliderPostListing';
import NewsFeed from 'components/pages/home-page/NewsFeed/NewsFeed';

import reduxWrapper from 'store';
import { mapArticleContentData } from 'utils/article.util';
import ArticleService from 'services/articleService';
import { ARTICLE_FEEDS_ACTIONS } from 'store/actions/pages/home-page/articleFeedsAction';
import { getArticleFeedsData } from 'store/selectors/pages/home-page/articleFeedsSelector';

const articleService = new ArticleService();

function HomePage ({ featuredArticles, newsFeed }) {
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
            <section>
              <NewsFeed data={ newsFeed } />
            </section>
          </section>
          <section className="d-none d-md-block col-4 sticky-sidebar" />
        </section>
      </Container>
    </MainLayout>
  </>;
}

export const getServerSideProps = reduxWrapper.getServerSideProps(async function ({ store }) {
  try {
    store.dispatch(ARTICLE_FEEDS_ACTIONS.fetchArticleFeedsData(1, 10));
    store.dispatch(END);

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
  } finally {
    await store.sagaTask.toPromise();
  }
});


function mapStateToProps (state) {
  const newsFeed = getArticleFeedsData(state);

  return { newsFeed };
}

function mapDispatchToProps (_dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
