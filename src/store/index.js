import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';

// import count from './count/reducer';
// import tick from './tick/reducer';

import createRootReducer from 'store/reducers';
import rootSaga from 'store/sagas';

function bindMiddlewares (middlewares) {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middlewares));
  }

  return applyMiddleware(...middlewares);
}

function reducer (state, action) {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    };
  } else {
    const combinedReducer = createRootReducer();
    return combinedReducer(state, action);
  }
}

function initStore () {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, bindMiddlewares([ sagaMiddleware ]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default createWrapper(initStore);
