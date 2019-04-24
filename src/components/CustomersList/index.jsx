import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './CustomerListItem';

const CustomersList = ({
  customers,
  urlPath,
}) => (
  <div className="customers-list">
    {
      customers.map(customer => (
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
  </div>
);

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomersList;
