import React from 'react';
import Link from 'next/link';
import { isMobileOnly } from 'react-device-detect';

import { CardItemWrapper as Container } from './FeaturedSliderPostListing.style';
import LazyImage from 'components/LazyImage/LazyImage';
import ArticleAuthorInfo from 'components/ArticleAuthorInfo/ArticleAuthorInfo';

function PostCardContent ({ data }) {
  return <Container className="d-flex flex-column bg-white rounded rounded-md-0 overflow-hidden">
    <Link href="/" passHref><a href="/">
      {
        isMobileOnly
          ? <LazyImage
            src={ data?.featuredImage?.medium || '' }
            ratio={ 16 / 9 } />
          : <LazyImage
            src={ data?.featuredImage?.large || '' }
            ratio={ 16 / 9 } />
      }
    </a></Link>
    <div className="p-3 p-md-4 content-wrapper">
      <h2 className="m-0">{ data.title || '--' }</h2>
      <div className="mt-3">
        <ArticleAuthorInfo
          data={ data.author }
          updatedAt={ data.updatedAt }
          timeToReadInMinutes={ data.timeToReadInMinutes } />
      </div>
    </div>
  </Container>;
}

export default PostCardContent;
