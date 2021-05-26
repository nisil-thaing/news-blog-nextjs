import React from 'react';
import Link from 'next/link';
import { isMobileOnly } from 'react-device-detect';

import { CardItemWrapper as Container } from './FeaturedSliderPostListing.style';
import LazyImage from 'components/LazyImage/LazyImage';
import ArticleAuthorInfo from 'components/ArticleAuthorInfo/ArticleAuthorInfo';

function PostCardContent ({ data }) {
  return <Container className="d-flex flex-column bg-white rounded rounded-md-0 overflow-hidden">
    <Link href={ data?.link } passHref>
      <a href="/" target="__blank" rel="noopener noreferrer">
        {
          isMobileOnly
            ? <LazyImage
              src={ data?.featuredImage?.medium || '' }
              ratio={ 16 / 9 } />
            : <LazyImage
              src={ data?.featuredImage?.large || '' }
              ratio={ 16 / 9 } />
        }
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

export default PostCardContent;
