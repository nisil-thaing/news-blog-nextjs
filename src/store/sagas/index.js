import combineSagas from 'utils/combine-sagas.util';

import demoDataSagas from './demoDataSaga';
import authenticationUserSagas from './authenticationUserSaga';

const SAGAS = [
  demoDataSagas,
  authenticationUserSagas
];

function* rootSagas () {
  yield combineSagas(SAGAS);
}

export default rootSagas;