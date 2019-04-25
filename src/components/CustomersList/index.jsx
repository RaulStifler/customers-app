import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './CustomerListItem';

const CustomersList = ({
  customers,
  urlPath,
}) => (
  <div className="customers-list">
    { !customers.isFetching
      && customers.data.map(customer => (
        <CustomersListItem
          key={customer.dni}
          name={customer.name}
          dni={customer.dni}
          urlPath={urlPath}
          editAction="Editar"
          deleteAction="Eliminar"
        />
      ))
    }
    {
      customers.isFetching
      && <h4>Loading...</h4>
    }
    {
      customers.error
      && (
        <div>
          <h4>Ocurrio un error:</h4>
          <span>{customers.error}</span>
        </div>
      )
    }
  </div>
);

CustomersList.propTypes = {
  customers: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomersList;
