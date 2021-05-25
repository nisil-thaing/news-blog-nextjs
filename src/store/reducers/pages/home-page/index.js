import { combineReducers } from 'redux';

import articleFeedsReducer from './articleFeedsReducer';

export default combineReducers({
  articleFeeds: articleFeedsReducer
});
