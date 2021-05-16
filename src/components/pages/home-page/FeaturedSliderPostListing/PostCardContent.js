import React from 'react';
import Link from 'next/link';

import { CardItemWrapper as Container } from './FeaturedSliderPostListing.style';
import LazyImage from 'components/LazyImage/LazyImage';

function PostCardContent ({ data }) {
  return <Container className="d-flex flex-column bg-white rounded rounded-md-0 overflow-hidden">
    <Link href="/" passHref><a href="/">
      <LazyImage
        src={ data?.featuredImage?.original || '' }
        ratio={ 16 / 9 } />
    </a></Link>
    <div className="p-3 p-md-4 content-wrapper">
      <h2 className="m-0">{ data.title || '--' }</h2>
    </div>
  </Container>;
}

export default PostCardContent;