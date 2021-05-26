import React from 'react';
import { isMobileOnly } from 'react-device-detect';

import { Container } from './NewsFeed.style';
import ArticleCard from './ArticleCard';
import ArticleCardPlaceholder from './ArticleCardPlaceholder';
import withSSREnvironment from 'hocs/withSSREnvironment';

function NewsFeed ({ isClientSide }) {
  const coverImageRatio = isClientSide
    ? (isMobileOnly ? 1 : 16 / 9)
    : 1;

  return <>{
    isClientSide
      ? <Container className="mt-3 mt-md-4 p-3">
        <li><ArticleCard coverImageRatio={ coverImageRatio } /></li>
        <li className="mt-4 mt-md-5"><ArticleCard coverImageRatio={ coverImageRatio } /></li>
        <li className="mt-4 mt-md-5"><ArticleCard coverImageRatio={ coverImageRatio } /></li>
        <li className="mt-4 mt-md-5"><ArticleCard coverImageRatio={ coverImageRatio } /></li>
        <li className="mt-4 mt-md-5"><ArticleCard coverImageRatio={ coverImageRatio } /></li>
        <li className="mt-4 mt-md-5"><ArticleCard coverImageRatio={ coverImageRatio } /></li>
      </Container>
      : <Container className="mt-3 p-3">
        <ArticleCardPlaceholder />
      </Container>
  }</>;
}

export default withSSREnvironment(NewsFeed);
