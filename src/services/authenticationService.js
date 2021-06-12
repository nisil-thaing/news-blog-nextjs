import httpClient from 'services/httpClient';

import {
  getDataBodyFromResponseToData,
  mapErrorResponseToErrorObject
} from 'utils/api-request.util';

class AuthenticationService {
  #authTokenUrl = '/auth-tokens';
  #userProfileUrl = '/users/me/profile';

  constructor () {
    this.requestToLogin = this.requestToLogin.bind(this);
    this.requestToLogout = this.requestToLogout.bind(this);
    this.fetchAuthenticationUserProfile = this.fetchAuthenticationUserProfile.bind(this);
  }

  async requestToLogin ({ email: username, password }) {
    try {
      const responseData = await httpClient.post(this.#authTokenUrl, { username, password }),
        result = getDataBodyFromResponseToData(responseData);

      if (!result?.id_token) {
        throw new Error('Oops! Something went wrong!');
      }

      return result;
    } catch (err) {
      return mapErrorResponseToErrorObject(err);
    }
  }

  async requestToLogout () {
    try {
      const responseData = await httpClient.delete(this.#authTokenUrl, { params: { logout: 1 } });
      return getDataBodyFromResponseToData(responseData);
    } catch (err) {
      return mapErrorResponseToErrorObject(err);
    }
  }

  async fetchAuthenticationUserProfile () {
    try {
      const responseData = await httpClient.get(this.#userProfileUrl),
        data = getDataBodyFromResponseToData(responseData);

      if (!data?.users[0]) {
        return mapErrorResponseToErrorObject('No credential user found!');
      }

      return data.users[0];
    } catch (err) {
      return mapErrorResponseToErrorObject(err);
    }
  }
}

export default AuthenticationService;