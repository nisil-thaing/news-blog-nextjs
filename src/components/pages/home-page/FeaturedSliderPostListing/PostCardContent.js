import React from 'react';
import Link from 'next/link';

import { CardItemWrapper as Container } from './FeaturedSliderPostListing.style';
import LazyImage from 'components/LazyImage/LazyImage';

function PostCardContent () {
  return <Container className="d-flex flex-column">
    <Link href="/" passHref><a href="/">
      <LazyImage
        src="https://cdn.techinasia.com/wp-content/uploads/2017/12/55476313_l-750x500.jpg"
        ratio={ 16 / 9 } />
    </a></Link>
    <div></div>
  </Container>;
}

export default PostCardContent;