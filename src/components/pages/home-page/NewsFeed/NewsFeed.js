import React from 'react';
import {
  arrayOf,
  shape,
  oneOfType,
  bool,
  number,
  string
} from 'prop-types';
import { isMobileOnly } from 'react-device-detect';
import classnames from 'classnames';

import { Container } from './NewsFeed.style';
import ArticleCard from './ArticleCard';
import ArticleCardPlaceholder from './ArticleCardPlaceholder';

function NewsFeed ({ data, isClientSide }) {
  const coverImageRatio = isClientSide && !isMobileOnly
    ? 16 / 9
    : 1;

  return <>{
    isClientSide
      ? <Container className="mt-3 mt-md-4 p-3">
        {
          data.map((article, index) => <li
            key={ article.id }
            aria-label="News Feed Item"
            className={ classnames({ 'mt-4 mt-md-5': index > 0 }) }>
            <ArticleCard
              data={ article }
              coverImageRatio={ coverImageRatio }
              isRenderHighResolutionImage={ !isMobileOnly } />
          </li>)
        }
      </Container>
      : <Container aria-label="News Feed Loading Placeholder" className="mt-3 p-3">
        <ArticleCardPlaceholder />
      </Container>
  }</>;
}

NewsFeed.propTypes = {
  data: arrayOf(shape({
    id: oneOfType([string, number])
  })),
  isClientSide: bool
};

NewsFeed.defaultProps = {
  data: [],
  isClientSide: false
};

export default NewsFeed;
