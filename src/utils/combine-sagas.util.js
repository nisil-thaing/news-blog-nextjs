import { all, fork } from 'redux-saga/effects';

function* combineSagas (sagas) {
  yield all(sagas.map(saga => fork(saga)));
}

export default combineSagas;