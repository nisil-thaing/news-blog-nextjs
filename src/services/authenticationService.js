import httpClient from 'services/httpClient';

class AuthenticationService {
  #baseUrl = '/auth-tokens';

  constructor () {
    this.requestToLogin = this.requestToLogin.bind(this);
  }

  requestToLogin ({ email: username, password }) {
    return httpClient.post(this.#baseUrl, { username, password });
    // .then(mapNonStatusResponseToData)
    // .catch(err => mapErrorResponseToErrorObject(err, 'Login'));
  }
}

export default AuthenticationService;