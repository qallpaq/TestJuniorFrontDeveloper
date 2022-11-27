import { combineReducers } from '@reduxjs/toolkit';

import auctions from './auctions';
import filter from './filter';
import error from './error';
import toast from './toast';

const rootReducer = combineReducers({
  auctions,
  filter,
  error,
  toast,
});

export default rootReducer;
