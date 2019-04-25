import { combineReducers } from 'redux';
import customers from './customers';

const mainReducer = combineReducers({
  customers,
});

export default mainReducer;
