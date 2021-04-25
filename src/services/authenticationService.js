import httpClient from 'services/httpClient';

import {
  getDataBodyFromResponseToData,
  mapErrorResponseToErrorObject
} from 'utils/api-request.util';

class AuthenticationService {
  async requestToLogin ({ email: username, password }) {
    try {
      const responseData = await httpClient.post('/auth-tokens', { username, password });
      return getDataBodyFromResponseToData(responseData);
    } catch (err) {
      return mapErrorResponseToErrorObject(err);
    }
  }

  async fetchAuthenticationUserProfile () {
    try {
      const responseData = await httpClient.get('/users/me/profile'),
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