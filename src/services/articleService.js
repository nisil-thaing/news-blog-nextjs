import httpClient from 'services/httpClient';
import {
  getDataBodyFromResponseToData,
  mapDataWithPaginationFromDataDataResponse,
  mapErrorResponseToErrorObject
} from 'utils/api-request.util';
import { mapArticleContentData } from 'utils/article.util';

class ArticleService {
  #articleFeedsUrl = '/posts';
  #subscriberExclusiveUrl = '/categories/subscriber-exclusive/posts';

  constructor () {
    this.fetchArticleFeeds = this.fetchArticleFeeds.bind(this);
    this.fetchSubscriberExclusiveArticles = this.fetchSubscriberExclusiveArticles.bind(this);
  }

  /**
   * Fetching article feeds list
   *
   * @typedef {{ page: number, itemsPerPage: number }} PagingParams
   * @param {PagingParams} params
   * @return {Object}
   */
  async fetchArticleFeeds (params) {
    try {
      const responseData = await httpClient.get(
        this.#articleFeedsUrl,
        { params: { page: params.page, per_page: params.itemsPerPage } }
      );
      const dataWithPaging = mapDataWithPaginationFromDataDataResponse(responseData, 'posts');
      const { data: articles, pagingInfo } = dataWithPaging;
      const data = articles.map(articleItem => mapArticleContentData(articleItem));

      return { data, pagingInfo };
    } catch (err) {
      return mapErrorResponseToErrorObject(err);
    }
  }

  /**
   * Fetching subscriber exclusive article list
   *
   * @typedef {{ page: number, itemsPerPage: number }} PagingParams
   * @param {PagingParams} params
   * @return {Object}
   */
  async fetchSubscriberExclusiveArticles (params) {
    try {
      const responseData = await httpClient.get(
        this.#subscriberExclusiveUrl,
        { params: { page: params.page, per_page: params.itemsPerPage } }
      );
      return getDataBodyFromResponseToData(responseData);
    } catch (err) {
      return mapErrorResponseToErrorObject(err);
    }
  }
}

export default ArticleService;
