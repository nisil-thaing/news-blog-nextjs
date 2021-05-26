import React from 'react';
import { arrayOf, number, oneOfType, shape, string } from 'prop-types';
import { isMobileOnly } from 'react-device-detect';
import classnames from 'classnames';

import { Container } from './NewsFeed.style';
import ArticleCard from './ArticleCard';
import ArticleCardPlaceholder from './ArticleCardPlaceholder';
import withSSREnvironment from 'hocs/withSSREnvironment';

function NewsFeed ({ data, isClientSide }) {
  const coverImageRatio = isClientSide
    ? (isMobileOnly ? 1 : 16 / 9)
    : 1;

  return <>{
    isClientSide
      ? <Container className="mt-3 mt-md-4 p-3">
        {
          data.map((article, index) => <li
            key={ article.id }
            className={ classnames({ 'mt-4 mt-md-5': index > 0 }) }>
            <ArticleCard data={ article } coverImageRatio={ coverImageRatio } />
          </li>)
        }
      </Container>
      : <Container className="mt-3 p-3">
        <ArticleCardPlaceholder />
      </Container>
  }</>;
}

NewsFeed.propTypes = {
  data: arrayOf(shape({
    id: oneOfType([string, number])
  }))
};

NewsFeed.defaultProps = {
  data: []
};

export default withSSREnvironment(NewsFeed);
