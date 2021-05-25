import { createReducer } from '@reduxjs/toolkit';

import { fetchPagingDataSuccessReducer } from 'utils/data-store.util';
import { ARTICLE_FEEDS_INITIAL_STATE } from 'store/states/pages/home-page/articleFeedsState';
import { ARTICLE_FEEDS_ACTIONS } from 'store/actions/pages/home-page/articleFeedsAction';

export default createReducer(ARTICLE_FEEDS_INITIAL_STATE, {
  [ARTICLE_FEEDS_ACTIONS.fetchArticleFeedsData]: state => ({
    ...state,
    isFetching: true
  }),
  [ARTICLE_FEEDS_ACTIONS.fetchArticleFeedsDataSuccess]: fetchPagingDataSuccessReducer,
  [ARTICLE_FEEDS_ACTIONS.fetchArticleFeedsDataFailure]: (state, action) => ({
    ...state,
    isFetching: false,
    error: action.payload
  })
});
