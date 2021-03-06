import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';

import ArticleAuthorInfo from './ArticleAuthorInfo';

const SAMPLE_DATA = {
  id: 'this_is_a_sample_id',
  avatarUrl: 'https://alyadarinariestyadi46.files.wordpress.com/2015/02/motohira-hata-stand-by-me.jpg',
  slug: 'this-is-a-sample-slug',
  displayName: 'Motohiro Hata'
};
const UPDATED_AT = (new Date()).toUTCString();

describe('ArticleAuthorInfo component', function () {
  afterEach(cleanup);

  it('Should return full of author info on component snapshot', function () {
    const component = renderer.create(
      <ArticleAuthorInfo
        data={ SAMPLE_DATA }
        updatedAt={ UPDATED_AT }
        timeToReadInMinutes={ 10 } />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
