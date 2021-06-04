import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';

import '@testing-library/jest-dom';

import ArticleCard from './ArticleCard';
import ARTICLES from 'mock-data/articles.json';

const ARTICLE_DATA = ARTICLES[0];

describe('FeaturedSliderPostListing - ArticleCard component', function () {
  afterEach(function () {
    cleanup();

    if (renderer && renderer.unmount) {
      renderer.unmount();
    }
  });

  it('Should return full of article info on component snapshot', function () {
    const component = renderer.create(<ArticleCard data={ ARTICLE_DATA } isRenderHighResolutionImage={ true } />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return article info with LOW resolution cover', function () {
    const lowResolutionImageStyle = `url("${ ARTICLE_DATA.featuredImage.medium }");`;
    const { container } = render(
      <ArticleCard
        data={ ARTICLE_DATA } />
    );
    const coverImageElement = container.querySelector('.lazy-image');
    expect(coverImageElement).toBeInTheDocument();
    expect(coverImageElement).toHaveStyle({ backgroundImage: lowResolutionImageStyle });
  });

  it('Should return article info with HIGH resolution cover', function () {
    const highResolutionImageStyle = `url("${ ARTICLE_DATA.featuredImage.large }");`;
    const { container } = render(
      <ArticleCard
        data={ ARTICLE_DATA }
        isRenderHighResolutionImage={ true } />
    );
    const coverImageElement = container.querySelector('.lazy-image');
    expect(coverImageElement).toBeInTheDocument();
    expect(coverImageElement).toHaveStyle({ backgroundImage: highResolutionImageStyle });
  });

  it('Should return article info without cover', function () {
    const data = {
      ...ARTICLE_DATA,
      featuredImage: {
        ...ARTICLE_DATA.featuredImage,
        medium: ''
      }
    };
    const { container } = render(
      <ArticleCard data={ data } />
    );
    const coverImageElement = container.querySelector('.lazy-image');
    expect(coverImageElement).toBeInTheDocument();
    expect(coverImageElement).not.toHaveAttribute('style');
  });

  it('Should return article info without title', function () {
    const data = {
      ...ARTICLE_DATA,
      title: ''
    };
    const { container } = render(
      <ArticleCard data={ data } />
    );
    const titleElement = container.querySelector('.content-wrapper > a > h2');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('--');
  });
});
