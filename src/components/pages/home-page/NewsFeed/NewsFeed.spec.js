import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import NewsFeed from './NewsFeed';
import ARTICLES from 'mock-data/articles.json';

describe('NewsFeed - listing component', function () {
  let rendererInstance = null;

  afterEach(function () {
    cleanup();

    if (rendererInstance?.unmount) {
      rendererInstance.unmount();
      rendererInstance = null;
    }
  });

  it('Should return full of news feed component snapshot', function () {
    rendererInstance = renderer.create(<NewsFeed data={ ARTICLES } isClientSide />);
    const tree = rendererInstance.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return news feed component listing on client side', function () {
    render(<NewsFeed data={ ARTICLES } isClientSide />);

    const renderingArticleElements = screen
      .getAllByRole('listitem', { name: /News Feed Item/i });
    expect(renderingArticleElements.length).toEqual(ARTICLES.length);
  });

  it('Should return news feed loading placeholder in case the app still remain on server side', function () {
    render(<NewsFeed data={ ARTICLES } isClientSide={ false } />);
    const renderingArticlesPlaceholder = screen
      .getByRole('list', { name: /News Feed Loading Placeholder/i });
    expect(renderingArticlesPlaceholder).toBeInTheDocument();
  });
});
