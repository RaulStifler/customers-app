import { FETCH_CUSTOMERS, SET_CUSTOMERS, ERROR_CUSTOMERS } from './constants';
import GLOBAL from './config';

export const fetchCustomers = () => ({
  type: FETCH_CUSTOMERS,
});

export const setCustomers = customers => ({
  type: SET_CUSTOMERS,
  customers,
});

export const errorCustomers = error => ({
  type: ERROR_CUSTOMERS,
  error,
});

export const requestCustomers = () => (dispatch) => {
  dispatch(fetchCustomers());
  return fetch(GLOBAL.url).then(
    response => response.json(),
  ).then(
    (json) => {
      dispatch(setCustomers(json));
    },
  ).catch(
    (error) => {
      dispatch(errorCustomers(String(error)));
    },
  );
};
