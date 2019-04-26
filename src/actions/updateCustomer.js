import { UPDATE_CUSTOMER } from './constants';
import GLOBAL from './config';

export const updateCustomer = customer => ({
  type: UPDATE_CUSTOMER,
  customer,
});

export const requestUpdateCustomers = customer => () => (
  fetch(
    `${GLOBAL.url}/${customer.id}`,
    {
      method: 'PUT',
      body: JSON.stringify(customer),
      headers: new Headers({ 'Content-type': 'application/json' }),
    },
  ).then(
    response => response.json(),
  ).then(
    (json) => {
      console.log(json);
    },
  ).catch(
    (error) => {
      console.log(error);
    },
  )
);
