import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { DEFAULT_PAGING_INFO } from 'utils/data-store.util';
import ArticleService from 'services/articleService';
import { ARTICLE_FEEDS_ACTION_TYPES } from 'store/actions/pages/home-page/articleFeedsAction';
import { getArticleFeedsPagingInfo } from 'store/selectors/pages/home-page/articleFeedsSelector';

const articleService = new ArticleService();

function* fetchArticleFeedsDataSaga (action) {
  const { isLoadMore = false } = action.payload;
  const params = {
    page: DEFAULT_PAGING_INFO.currentPage,
    itemsPerPage: DEFAULT_PAGING_INFO.itemsPerPage
  };

  if (isLoadMore) {
    const pagingInfo = yield select(getArticleFeedsPagingInfo);
    const couldBeLoadedMore = pagingInfo.currentPage < pagingInfo.totalPages;

    if (!couldBeLoadedMore) {
      throw new Error('You’re all caught up!');
    } else {
      params.page = pagingInfo.currentPage + 1;
      params.itemsPerPage = pagingInfo.itemsPerPage;
    }
  }

  try {
    const responseData = yield call(
      articleService.fetchArticleFeeds,
      params
    );

    return yield put({
      type: ARTICLE_FEEDS_ACTION_TYPES.FETCH_ARTICLE_FEEDS_DATA_SUCCESS,
      payload: responseData
    });
  } catch (err) {
    return yield put({
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
