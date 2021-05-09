import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from './FeaturedSliderPostListing.style';
import PostCardContent from './PostCardContent';

function FeaturedSliderPostListing () {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    variableWidth: true,
    mobileFirst: true/* ,
    autoplay: true */
  };

  return <Container { ...settings } className="pl-4 pl-md-0">
    <PostCardContent />
    <PostCardContent />
    <PostCardContent />
    <PostCardContent />
    <PostCardContent />
  </Container>;
}

export default FeaturedSliderPostListing;