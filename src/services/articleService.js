import httpClient from 'services/httpClient';
import {
  getDataBodyFromResponseToData,
  mapErrorResponseToErrorObject
} from 'utils/api-request.util';

class ArticleService {
  #subscriberExclusiveUrl = '/categories/subscriber-exclusive/posts';

  constructor () {
    this.fetchSubscriberExclusiveArticles = this.fetchSubscriberExclusiveArticles.bind(this);
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
