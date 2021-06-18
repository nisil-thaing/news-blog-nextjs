import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import ArticleCard from './ArticleCard';
import ARTICLES from 'mock-data/articles.json';

const ARTICLE_DATA = ARTICLES[0];

describe('NewsFeed - ArticleCard component', function () {
  let rendererInstance = null;

  afterEach(function () {
    cleanup();

    if (rendererInstance?.unmount) {
      rendererInstance.unmount();
      rendererInstance = null;
    }
  });

  it('Should return full of article info on component snapshot', function () {
    rendererInstance = renderer.create(
      <ArticleCard
        data={ ARTICLE_DATA }
        coverImageRatio={ 16 / 9 }
        isRenderHighResolutionImage />
    );
    const tree = rendererInstance.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return rectangle cover image and a clickable link', async function () {
    render(
      <ArticleCard
        data={ ARTICLE_DATA }
        coverImageRatio={ 16 / 9 }
        isRenderHighResolutionImage />
    );

    const coverImageWrapperElement = screen.getByRole('link', { name: /Cover Image/i });
    expect(coverImageWrapperElement).toBeInTheDocument();
    expect(coverImageWrapperElement).toBeEnabled();
    expect(coverImageWrapperElement).toHaveAttribute('href', ARTICLE_DATA.link);
  });

  it('Should return article info without cover on tablet/desktop view', function () {
    const data = {
      ...ARTICLE_DATA,
      featuredImage: {
        ...ARTICLE_DATA.featuredImage,
        medium: ''
      }
    };
    render(
      <ArticleCard
        data={ data }
        coverImageRatio={ 16 / 9 }
        isRenderHighResolutionImage />
    );

    const coverImageWrapperElement = screen.getByRole('link', { name: /Cover Image/i });
    expect(coverImageWrapperElement).toBeInTheDocument();
    expect(coverImageWrapperElement).toContainHTML('<div data-testid="lazy-image" class="lazy-image" />');
  });

  it('Should return article info without cover on mobile view', function () {
    const data = {
      ...ARTICLE_DATA,
      featuredImage: {
        ...ARTICLE_DATA.featuredImage,
        thumbnail: ''
      }
    };
    render(<ArticleCard data={ data } coverImageRatio={ 1 } />);

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
