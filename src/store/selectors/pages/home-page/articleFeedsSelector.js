import { createSelector } from 'reselect';

import { getHomePageState } from 'store/selectors/pages';

export const getArticleFeedsState = createSelector(
  getHomePageState,
  state => state.articleFeeds
);

export const getWhetherArticleFeedsLoading = createSelector(
  getArticleFeedsState,
  state => state.isFetching
);

export const getArticleFeedsData = createSelector(
  getArticleFeedsState,
  state => state.data
);

export const getArticleFeedsPagingInfo = createSelector(
  getArticleFeedsState,
  state => state.pagingInfo
);

export const getWhetherArticleFeedsCouldBeLoadedMore = createSelector(
  getArticleFeedsPagingInfo,
  ({ currentPage, totalPages }) => currentPage < totalPages
);
