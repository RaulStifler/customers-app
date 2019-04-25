import { FETCH_CURSTOMERS, SET_CURSTOMERS, ERROR_CURSTOMERS } from '../actions/fetchCustomers';

const customersReducer = (state = {
  data: [],
  isFetching: false,
  error: null,
}, action) => {
  switch (action.type) {
    case FETCH_CURSTOMERS:
      return { ...state, isFetching: true, error: null };
    case SET_CURSTOMERS:
      return { ...state, data: action.customers, isFetching: false };
    case ERROR_CURSTOMERS:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
};

export default customersReducer;
