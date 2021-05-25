import combineSagas from 'utils/combine-sagas.util';

import demoDataSagas from './demoDataSaga';
import authenticationUserSagas from './authenticationUserSaga';
import articleFeedsSagas from './pages/home-page/articleFeedsSaga';

const SAGAS = [
  demoDataSagas,
  authenticationUserSagas,
  articleFeedsSagas
];

function* rootSagas () {
  yield combineSagas(SAGAS);
}

export default rootSagas;