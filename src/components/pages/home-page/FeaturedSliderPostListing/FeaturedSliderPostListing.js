import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from './FeaturedSliderPostListing.style';
import PostCardContent from './PostCardContent';

function FeaturedSliderPostListing () {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1/* ,
    autoplay: true */
  };

  return <Container { ...settings } className="pl-3">
    <PostCardContent />
    <PostCardContent />
    <PostCardContent />
    <PostCardContent />
    <PostCardContent />
  </Container>;
}

export default FeaturedSliderPostListing;