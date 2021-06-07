import React from 'react';
import renderer from 'react-test-renderer';

import FeaturedSliderPostListing from './FeaturedSliderPostListing';
import ARTICLES from 'mock-data/articles.json';

describe('FeaturedSliderPostListing - slider component', function () {
  afterEach(function () {
    if (renderer && renderer.unmount) {
      renderer.unmount();
    }
  });

  it('Should return full of slider component snapshot', function () {
    const component = renderer.create(<FeaturedSliderPostListing data={ ARTICLES } />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
