import { FETCH_CUSTOMERS, SET_CUSTOMERS, ERROR_CUSTOMERS } from '../actions/constants';

const customersReducer = (state = {
  data: [],
  isFetching: false,
  error: null,
}, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return { ...state, isFetching: true, error: null };
    case SET_CUSTOMERS:
      return { ...state, data: action.customers, isFetching: false };
    case ERROR_CUSTOMERS:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
};

export default customersReducer;
