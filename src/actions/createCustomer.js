import GLOBAL from './config';

// eslint-disable-next-line import/prefer-default-export
export const createCustomer = customer => () => (
  fetch(
    GLOBAL.url,
    {
      method: 'POST',
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
