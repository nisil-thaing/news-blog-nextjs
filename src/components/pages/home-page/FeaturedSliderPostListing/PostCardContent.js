import React from 'react';
import Link from 'next/link';

import { CardItemWrapper as Container } from './FeaturedSliderPostListing.style';
import LazyImage from 'components/LazyImage/LazyImage';

function PostCardContent ({ data }) {
  return <Container className="d-flex flex-column">
    <Link href="/" passHref><a href="/">
      <LazyImage
        src={ data?.featuredImage?.original || '' }
        ratio={ 16 / 9 } />
    </a></Link>
    <div></div>
  </Container>;
}

export default PostCardContent;