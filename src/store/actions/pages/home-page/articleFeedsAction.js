import { createAction } from '@reduxjs/toolkit';

export const ARTICLE_FEEDS_ACTION_TYPES = {
  FETCH_ARTICLE_FEEDS_DATA:
    '[ARTICLE_FEEDS_DATA_STATE] - FETCH_ARTICLE_FEEDS_DATA',
  FETCH_ARTICLE_FEEDS_DATA_SUCCESS:
    '[ARTICLE_FEEDS_DATA_STATE] - FETCH_ARTICLE_FEEDS_DATA_SUCCESS',
  FETCH_ARTICLE_FEEDS_DATA_FAILURE:
    '[ARTICLE_FEEDS_DATA_STATE] - FETCH_ARTICLE_FEEDS_DATA_FAILURE'
};

export const ARTICLE_FEEDS_ACTIONS = {
  fetchArticleFeedsData: createAction(
    ARTICLE_FEEDS_ACTION_TYPES.FETCH_ARTICLE_FEEDS_DATA,
    (page = 1, itemsPerPage = 10) => ({
      payload: { page, itemsPerPage }
    })
  ),
  fetchArticleFeedsDataSuccess: createAction(
    ARTICLE_FEEDS_ACTION_TYPES.FETCH_ARTICLE_FEEDS_DATA_SUCCESS,
    responseData => ({
      payload: responseData
    })
  ),
  fetchArticleFeedsDataFailure: createAction(
    ARTICLE_FEEDS_ACTION_TYPES.FETCH_ARTICLE_FEEDS_DATA_FAILURE,
    errorDescription => ({
      payload: errorDescription
    })
  )
};
