import combineSagas from 'utils/combine-sagas.util';

import demoDataSagas from './demoDataSaga';

const SAGAS = [
  demoDataSagas
];

function* rootSagas () {
  yield combineSagas(SAGAS);
}

export default rootSagas;