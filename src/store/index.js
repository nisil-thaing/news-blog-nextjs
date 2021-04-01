import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

// import thunkMiddleware from 'redux-thunk';
// import count from './count/reducer';
// import tick from './tick/reducer';

import createRootReducer from 'store/reducers';

function bindMiddleware (middleware) {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
}

const combinedReducer = createRootReducer();

function reducer (state, action) {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    };

    // if (state.count.count) nextState.count.count = state.count.count; // preserve count value on client side navigation

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
}

function initStore () {
  return createStore(reducer, bindMiddleware([/* thunkMiddleware */]));
}

export default createWrapper(initStore);