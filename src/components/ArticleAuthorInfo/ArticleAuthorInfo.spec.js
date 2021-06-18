import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import ArticleAuthorInfo from './ArticleAuthorInfo';

const SAMPLE_DATA = {
  id: 'this_is_a_sample_id',
  avatarUrl: 'https://alyadarinariestyadi46.files.wordpress.com/2015/02/motohira-hata-stand-by-me.jpg',
  slug: 'this-is-a-sample-slug',
  displayName: 'Motohiro Hata'
};
const UPDATED_AT = (new Date()).toUTCString();

describe('ArticleAuthorInfo component', function () {
  let rendererInstance = null;

  afterEach(function () {
    cleanup();

    if (rendererInstance?.unmount) {
      rendererInstance.unmount();
      rendererInstance = null;
    }
  });

  it('Should return full of author info on component snapshot', function () {
    rendererInstance = renderer.create(
      <ArticleAuthorInfo
        data={ SAMPLE_DATA }
        updatedAt={ UPDATED_AT }
        timeToReadInMinutes={ 10 } />
    );
    const tree = rendererInstance.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return default displaying name in case of the article is missing name', function () {
    const data = {
      ...SAMPLE_DATA,
      displayName: ''
    };

    render(
      <ArticleAuthorInfo
        data={ data }
        updatedAt={ UPDATED_AT }
        timeToReadInMinutes={ 10 } />
    );

    const displayingNameElement = screen.getByTestId('author-display-name');
    expect(displayingNameElement).toBeInTheDocument();
    expect(displayingNameElement).toHaveTextContent('--');
  });

  it('Should return default modify diffing date in case of missing "updateAt" information', function () {
    render(
      <ArticleAuthorInfo
        data={ SAMPLE_DATA }
        timeToReadInMinutes={ 10 } />
    );

    const modifyDateDiffingElement = screen.getByTestId('author-modify-date');
    expect(modifyDateDiffingElement).toBeInTheDocument();
    expect(modifyDateDiffingElement).toHaveTextContent('Unknown');
  });

  it('Should return default grey background avatar in case of missing "avatarUrl" information', function () {
    const data = {
      ...SAMPLE_DATA,
      avatarUrl: ''
    };

    render(
      <ArticleAuthorInfo
        data={ data }
        updatedAt={ UPDATED_AT }
        timeToReadInMinutes={ 10 } />
    );

    const coverImageElement = screen.getByTestId('lazy-image');
    expect(coverImageElement).toBeInTheDocument();
    expect(coverImageElement).not.toHaveAttribute('style');
  });
});
