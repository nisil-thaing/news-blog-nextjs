import React from 'react';
import { bool, number, oneOfType, shape, string } from 'prop-types';
import Link from 'next/link';

import { Container } from './ArticleCard.style';
import LazyImage from 'components/LazyImage/LazyImage';
import ArticleAuthorInfo from 'components/ArticleAuthorInfo/ArticleAuthorInfo';

function ArticleCard ({ data, isRenderHighResolutionImage }) {
  const largeCoverImage = data?.featuredImage?.large || data?.featuredImage?.original || '',
    mediumCoverImage = data?.featuredImage?.medium || '';
  const coverImage = isRenderHighResolutionImage
    ? largeCoverImage
    : mediumCoverImage;

  return <Container className="d-flex flex-column bg-white rounded rounded-md-0 overflow-hidden">
    <Link href={ data?.link } passHref>
      <a
        aria-label="Cover Image"
        href="/"
        target="__blank"
        rel="noopener noreferrer">
        <LazyImage
          src={ coverImage }
          ratio={ 16 / 9 } />
      </a>
    </Link>
    <div className="p-3 p-md-4 content-wrapper">
      <Link href={ data?.link } passHref>
        <a
          href="/"
          target="__blank"
          rel="noopener noreferrer"
          className="d-block text-dark text-decoration-none">
          <h2 className="m-0">{ data.title || '--' }</h2>
        </a>
      </Link>
      <div className="mt-3">
        <ArticleAuthorInfo
          data={ data.author }
          updatedAt={ data.updatedAt }
          timeToReadInMinutes={ data.timeToReadInMinutes } />
      </div>
      <div
        className="mt-3 text-secondary short-description"
        dangerouslySetInnerHTML={{ __html: data.description }} />
    </div>
  </Container>;
}

ArticleCard.propTypes = {
  data: shape({
    id: oneOfType([ string, number ]),
    title: string,
    updatedAt: string,
    description: string,
    timeToReadInMinutes: number
  }).isRequired,
  isRenderHighResolutionImage: bool
};

ArticleCard.defaultProps = {
  isRenderHighResolutionImage: false
};

export default ArticleCard;
