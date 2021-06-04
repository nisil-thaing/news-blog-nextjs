import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';

import FeaturedSliderPostListing from './FeaturedSliderPostListing';
import ARTICLES from 'mock-data/articles.json';

describe('FeaturedSliderPostListing - slider component', function () {
  afterEach(function () {
    cleanup();

    if (renderer && renderer.unmount) {
      renderer.unmount();
    }
  });

  it('Should return full of slider component snapshot', function () {
    const component = renderer.create(<FeaturedSliderPostListing data={ ARTICLES } />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should return all ${ ARTICLES.length } items from ARTICLES`, function () {
    const { container } = render(<FeaturedSliderPostListing data={ ARTICLES } />);
    const elementsWrapper = container.querySelector('.slick-track'),
      elements = elementsWrapper.querySelectorAll('.slick-slide:not(.slick-cloned)');
    expect(elements.length).toEqual(ARTICLES.length);
  });
});
