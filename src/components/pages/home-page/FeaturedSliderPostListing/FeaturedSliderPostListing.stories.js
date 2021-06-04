import React from 'react';

import FeaturedSliderPostListing from './FeaturedSliderPostListing';
import ARTICLES from 'mock-data/articles.json';

export default {
  component: FeaturedSliderPostListing,
  title: 'FeaturedSliderPostListing'
};

const Template = args => <section style={{ width: '100%', maxWidth: '1000px' }}>
  <FeaturedSliderPostListing {...args} />
</section>;

export const DefaultSlider = Template.bind({});
DefaultSlider.args = {
  data: ARTICLES
};
