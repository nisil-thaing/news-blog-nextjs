import React, { useMemo } from 'react';
import { number, oneOfType, shape, string } from 'prop-types';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Container } from './ArticleAuthorInfo.style';
import LazyImage from 'components/LazyImage/LazyImage';

dayjs.extend(utc);
dayjs.extend(relativeTime);

function ArticleAuthorInfo ({ data, updatedAt, timeToReadInMinutes }) {
  const avatarUrl = (data?.avatarUrl
      && `https://res.cloudinary.com/tia-img/image/fetch/t_author_avatar/${ data.avatarUrl }`)
    || '';
  const modDateUntilNow = useMemo(
    () => (updatedAt && dayjs.utc(updatedAt).fromNow()) || 'Unknown',
    [ updatedAt ]
  );

  return <Container className="d-flex align-items-center">
    <div className="my-1 avatar-wrapper">
      <LazyImage
        src={ avatarUrl }
        ratio={ 1 }
        isRounded />
    </div>
    <div className="d-flex flex-wrap align-items-center text-muted ml-2 pl-1">
      <p data-testid="author-display-name" className="mb-0 display-name">
        { data?.displayName || '--' }
      </p>
      <p className="mb-0 px-1">&bull;</p>
      <p data-testid="author-modify-date" className="mb-0">{ modDateUntilNow }</p>
      {
        timeToReadInMinutes && <>
          <p className="mb-0 px-1">&bull;</p>
          <p className="mb-0">{ timeToReadInMinutes } min read</p>
        </>
      }
    </div>
  </Container>;
}

ArticleAuthorInfo.propTypes = {
  data: shape({
    id: oneOfType([ string, number ]).isRequired,
    avatarUrl: string,
    slug: string,
    displayName: string
  }),
  updatedAt: string,
  timeToReadInMinutes: number
};

export default ArticleAuthorInfo;
