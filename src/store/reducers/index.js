import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';

import uiReducer from './uiReducer';
// import authReducer from './authReducer';
// import userProfileReducer from './userProfileReducer';
// import pageReducers from './pagesReducer';

function createRootReducer(/* history */) {
  return combineReducers({
    // router: connectRouter(history),
    ui: uiReducer/* ,
    auth: authReducer,
    userProfile: userProfileReducer,
    pages: pageReducers
   */});
}

export default createRootReducer;