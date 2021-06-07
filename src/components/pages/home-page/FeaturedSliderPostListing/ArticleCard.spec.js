import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react';

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
    const component = renderer.create(
      <ArticleCard
        data={ ARTICLE_DATA }
        isRenderHighResolutionImage />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return article info without cover on mobile view', function () {
    const data = {
      ...ARTICLE_DATA,
      featuredImage: {
        ...ARTICLE_DATA.featuredImage,
        medium: ''
      }
    };
    render(<ArticleCard data={ data } />);

    const coverImageWrapperElement = screen.getByRole('link', { name: /Cover Image/i });
    expect(coverImageWrapperElement).toBeInTheDocument();
    expect(coverImageWrapperElement).toContainHTML('<div data-testid="lazy-image" class="lazy-image" />');
  });

  it('Should return article info without cover on tablet/desktop view', function () {
    const data = {
      ...ARTICLE_DATA,
      featuredImage: {
        ...ARTICLE_DATA.featuredImage,
        original: '',
        large: ''
      }
    };
    render(<ArticleCard data={ data } isRenderHighResolutionImage />);

    const coverImageWrapperElement = screen.getByRole('link', { name: /Cover Image/i });
    expect(coverImageWrapperElement).toBeInTheDocument();
    expect(coverImageWrapperElement).toContainHTML('<div data-testid="lazy-image" class="lazy-image" />');
  });

  it('Should return article info without title', function () {
    const data = {
      ...ARTICLE_DATA,
      title: ''
    };
    render(
      <ArticleCard data={ data } />
    );
    const titleElement = screen.getByRole('link', { name: /--/i });
    expect(titleElement).toBeInTheDocument();
  });
});
