import React from 'react';
import { arrayOf, number, oneOfType, shape, string } from 'prop-types';
import Link from 'next/link';

import { ArticleCardWrapper as Container } from './NewsFeed.style';
import LazyImage from 'components/LazyImage/LazyImage';
import ArticleAuthorInfo from 'components/ArticleAuthorInfo/ArticleAuthorInfo';

function ArticleCard ({ data, coverImageRatio }) {
  return <Container className="row m-0">
    <Link href={ data?.link } passHref>
      <a
        href="/"
        className="col-4 col-md-5 p-0 left-content"
        target="_blank"
        rel="noopener noreferrer">
        <LazyImage
          src={
            coverImageRatio === 1
              ? data?.featuredImage?.thumbnail
              : data?.featuredImage?.medium
          }
          ratio={ coverImageRatio } />
      </a>
    </Link>
    <div className="col-8 col-md-7 pl-3 pl-md-4 pr-0 right-content">
      <ul className="d-flex flex-wrap tags-wrapper">
        {
          data?.categories?.map(category => <li
            key={ category.id }
            className="text-muted mb-1 mr-1 px-1 border border-secondary rounded">
            { category.name }
          </li>)
        }
      </ul>
      <Link href={ data?.link } passHref>
        <a
          href="/"
          className="d-block text-dark text-decoration-none mt-2 mt-md-3 pt-1 pt-md-0 title"
          target="_blank"
          rel="noopener noreferrer">
          <h4 className="m-0">{ data?.title || '--' }</h4>
        </a>
      </Link>
      <div className="mt-3">
        <ArticleAuthorInfo
          data={ data.author }
          updatedAt={ data.updatedAt }
          timeToReadInMinutes={ data.timeToReadInMinutes } />
      </div>
    </div>
  </Container>;
}

ArticleCard.propTypes = {
  data: shape({
    title: string,
    link: string,
    featuredImage: shape({
      thumbnail: string,
      medium: string
    }),
    categories: arrayOf(shape({
      id: oneOfType([string, number]),
      name: string
    }))
  }),
  coverImageRatio: number
};

ArticleCard.defaultProps = {
  data: {},
  coverImageRatio: 1
};

export default ArticleCard;
