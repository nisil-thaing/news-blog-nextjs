import React, { useState } from 'react';
import { isMobileOnly } from 'react-device-detect';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from './FeaturedSliderPostListing.style';
import ArticleCard from './ArticleCard';

function FeaturedSliderPostListing ({ data }) {
  const [ isRenderHighResolutionImage, toggleRenderingHighResolutionImage ] = useState(false);
  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    arrows: false,
    variableWidth: true,
    mobileFirst: true,
    autoplay: true
  };

  useState(function () {
    const shouldToggleRenderingHighResolutionImage = !isMobileOnly;
    toggleRenderingHighResolutionImage(shouldToggleRenderingHighResolutionImage);

    return;
  }, []);

  return <Container { ...settings } className="pl-4 pl-md-0">
    {
      data.map(item => <ArticleCard
        key={ item.id }
        data={ item }
        isRenderHighResolutionImage={ isRenderHighResolutionImage } />)
    }
  </Container>;
}

export default FeaturedSliderPostListing;
