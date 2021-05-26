import React from 'react';

import { ArticleCardPlaceholderWrapper as Container } from './NewsFeed.style';
import LazyImage from 'components/LazyImage/LazyImage';

function ArticleCardPlaceholder () {
  return <Container>
    <div className="d-md-none left-content">
      <LazyImage
        src=""
        ratio={ 1 } />
    </div>
    <div className="d-none d-md-block left-content">
      <LazyImage
        src=""
        ratio={ 16 / 9 } />
    </div>
    <div className="right-content"></div>
  </Container>;
}

export default ArticleCardPlaceholder;
