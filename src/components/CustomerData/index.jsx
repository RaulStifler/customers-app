import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({
  name,
  dni,
  age,
}) => (
  <div className="customer-data">
    <h2>Datos del cliente</h2>
    <p>
      <strong>Nombre: </strong>
      <i>{name}</i>
    </p>
    <p>
      <strong>DNI: </strong>
      <i>{dni}</i>
    </p>
    <p>
      <strong>Edad: </strong>
      <i>{age}</i>
    </p>
  </div>
);

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default CustomerData;
