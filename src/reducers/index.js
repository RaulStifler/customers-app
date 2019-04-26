import { combineReducers } from 'redux';
import { reducer as formCustomer } from 'redux-form';
import customers from './customers';

const mainReducer = combineReducers({
  customers,
  form: formCustomer,
});

export default mainReducer;
