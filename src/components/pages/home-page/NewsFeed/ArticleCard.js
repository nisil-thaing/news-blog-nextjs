import React from 'react';
import { number, shape } from 'prop-types';
import Link from 'next/link';

import { ArticleCardWrapper as Container } from './NewsFeed.style';
import LazyImage from 'components/LazyImage/LazyImage';
import ArticleAuthorInfo from 'components/ArticleAuthorInfo/ArticleAuthorInfo';

function ArticleCard ({ _data, coverImageRatio }) {
  return <Container className="row m-0">
    <div className="col-4 col-md-5 p-0 left-content">
      <LazyImage
        src="https://cdn.techinasia.com/wp-content/uploads/2021/05/1621936187_Twitter-Banner-1200-x-675-b-07-750x423.jpg"
        ratio={ coverImageRatio } />
    </div>
    <div className="col-8 col-md-7 pl-3 pl-md-4 pr-0 right-content">
      <ul className="d-flex flex-wrap tags-wrapper">
        <li className="text-muted mb-1 mr-1 px-1 border border-secondary rounded">Briefing</li>
        <li className="text-muted mb-1 mr-1 px-1 border border-secondary rounded">Briefing</li>
        <li className="text-muted mb-1 mr-1 px-1 border border-secondary rounded">Briefing</li>
        <li className="text-muted mb-1 mr-1 px-1 border border-secondary rounded">Briefing</li>
      </ul>
      <Link href="/" passHref><a href="/" className="d-block text-dark text-decoration-none mt-2 mt-md-3 pt-1 pt-md-0 title">
        <h4 className="m-0">Blockchain startup SpaceChain partners with Kazakhstan-based space tech firm</h4>
      </a></Link>
      <div className="mt-3"><ArticleAuthorInfo /></div>
    </div>
  </Container>;
}

ArticleCard.propTypes = {
  data: shape({}),
  coverImageRatio: number
};

ArticleCard.defaultProps = {
  data: {},
  coverImageRatio: 1
};

export default ArticleCard;
