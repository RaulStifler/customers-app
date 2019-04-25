export const FETCH_CURSTOMERS = 'FETCH_CURSTOMERS';
export const SET_CURSTOMERS = 'SET_CURSTOMERS';
export const ERROR_CURSTOMERS = 'ERROR_CURSTOMERS';

const url = 'http://localhost:3001/customers';


export const fetchCustomers = () => ({
  type: FETCH_CURSTOMERS,
});

export const setCustomers = customers => ({
  type: SET_CURSTOMERS,
  customers,
});

export const errorCustomers = error => ({
  type: ERROR_CURSTOMERS,
  error,
});

export const requestCustomers = () => (dispatch) => {
  dispatch(fetchCustomers());
  return fetch(url).then(
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
