import httpClient from 'services/httpClient';

import { getDataBodyFromResponseToData } from 'utils/api-request.util';

class AuthenticationService {
  #baseUrl = '/auth-tokens';

  constructor () {
    this.requestToLogin = this.requestToLogin.bind(this);
  }

  requestToLogin ({ email: username, password }) {
    return httpClient.post(this.#baseUrl, { username, password })
      .then(getDataBodyFromResponseToData);
    // .catch(err => mapErrorResponseToErrorObject(err, 'Login'));
  }
}

export default AuthenticationService;