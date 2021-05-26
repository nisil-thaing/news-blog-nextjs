import { createSelector } from 'reselect';

import { getHomePageState } from 'store/selectors/pages';

export const getArticleFeedsState = createSelector(
  getHomePageState,
  state => state.articleFeeds
);

export const getArticleFeedsData = createSelector(
  getArticleFeedsState,
  state => state.data
);
