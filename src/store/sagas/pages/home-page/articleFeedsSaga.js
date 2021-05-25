import { all, call, put, takeLatest } from 'redux-saga/effects';

import ArticleService from 'services/articleService';
import { ARTICLE_FEEDS_ACTION_TYPES } from 'store/actions/pages/home-page/articleFeedsAction';

const articleService = new ArticleService();

function* fetchArticleFeedsDataSaga (action) {
  const { page, itemsPerPage } = action.payload;

  try {
    const responseData = yield call(
      articleService.fetchArticleFeeds,
      { page, itemsPerPage }
    );

    yield put({
      type: ARTICLE_FEEDS_ACTION_TYPES.FETCH_ARTICLE_FEEDS_DATA_SUCCESS,
      payload: responseData
    });
  } catch (err) {
    yield put({
      type: ARTICLE_FEEDS_ACTION_TYPES.FETCH_ARTICLE_FEEDS_DATA_FAILURE,
      payload: err
    });
  }
}

function* articleFeedsSagas () {
  yield all([
    takeLatest(ARTICLE_FEEDS_ACTION_TYPES.FETCH_ARTICLE_FEEDS_DATA, fetchArticleFeedsDataSaga)
  ]);
}

export default articleFeedsSagas;
