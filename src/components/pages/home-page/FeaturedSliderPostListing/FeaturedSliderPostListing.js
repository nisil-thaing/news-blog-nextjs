import React from 'react';
import {
  arrayOf,
  number,
  oneOfType,
  shape,
  string
} from 'prop-types';
import { isMobileOnly } from 'react-device-detect';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from './FeaturedSliderPostListing.style';
import PostCardContent from './PostCardContent';

function FeaturedSliderPostListing ({ data }) {
  const isLazyLoad = !isMobileOnly;
  const settings = {
    infinite: true,
    lazyLoad: isLazyLoad,
    speed: 500,
    autoplaySpeed: 5000,
    arrows: false,
    variableWidth: true,
    mobileFirst: true,
    autoplay: true
  };

  return <Container { ...settings } className="pl-4 pl-md-0">
    {
      data.map(item => <PostCardContent
        key={ item.id }
        data={ item } />)
    }
  </Container>;
}

FeaturedSliderPostListing.propTypes = {
  data: arrayOf(shape({
    id: oneOfType([ string, number ]),
    title: string,
    updatedAt: string,
    description: string,
    timeToReadInMinutes: number
  })).isRequired
};

export default FeaturedSliderPostListing;
