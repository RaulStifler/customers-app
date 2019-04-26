import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from '../CustomerActions';

const CustomerData = ({
  name,
  dni,
  age,
  onBack,
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
    <CustomerActions>
      <button type="button" onClick={onBack}>Volver</button>
    </CustomerActions>
  </div>
);

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default CustomerData;
