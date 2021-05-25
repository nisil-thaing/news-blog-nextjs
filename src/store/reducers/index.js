import { combineReducers } from 'redux';

import demoDataReducer from './demoDataReducer';
import uiReducer from './uiReducer';
import authenticationUserReducer from './authenticationUserReducer';
import homePageReducers from './pages/home-page';

const pageReducers = combineReducers({
  homePage: homePageReducers
});

function createRootReducer () {
  return combineReducers({
    demoData: demoDataReducer,
    ui: uiReducer,
    authenticationUser: authenticationUserReducer,
    pages: pageReducers
  });
}

export default createRootReducer;