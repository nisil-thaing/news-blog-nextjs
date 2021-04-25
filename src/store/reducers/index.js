import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';

import demoDataReducer from './demoDataReducer';
import uiReducer from './uiReducer';
import authenticationUserReducer from './authenticationUserReducer';

function createRootReducer (/* history */) {
  return combineReducers({
    // router: connectRouter(history),
    demoData: demoDataReducer,
    ui: uiReducer,
    authenticationUser: authenticationUserReducer
  });
}

export default createRootReducer;