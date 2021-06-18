import React from 'react';
import renderer from 'react-test-renderer';

import FeaturedSliderPostListing from './FeaturedSliderPostListing';
import ARTICLES from 'mock-data/articles.json';

describe('FeaturedSliderPostListing - slider component', function () {
  let rendererInstance = null;

  afterEach(function () {
    if (rendererInstance?.unmount) {
      rendererInstance.unmount();
      rendererInstance = null;
    }
  });

  it('Should return full of slider component snapshot', function () {
    rendererInstance = renderer.create(<FeaturedSliderPostListing data={ ARTICLES } />);
    const tree = rendererInstance.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
