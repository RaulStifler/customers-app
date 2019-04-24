import React from 'react';
import PropTypes from 'prop-types';
import Frame from '../components/Frame';
import CustomersList from '../components/CustomersList';
import CustomerActions from '../components/CustomerActions';

const customers = [
  {
    dni: '19920001',
    name: 'Raul Stifler',
    age: 27,
  },
  {
    dni: '19920002',
    name: 'Adrienne Stifler',
    age: 27,
  },
  {
    dni: '19920003',
    name: 'Alex Band',
    age: 37,
  },
];

const CustomerContainer = ({
  history,
}) => {
  const nuevoCliente = () => {
    history.push('/customers/new');
  };
  return (
    <div>
      <Frame
        title="Listado de Clientes"
        body={(
          <React.Fragment>
            <CustomersList
              customers={customers}
              urlPath="customers/"
            />
            <CustomerActions>
              <button type="button" onClick={nuevoCliente}>Nuevo cliente</button>
            </CustomerActions>
          </React.Fragment>
        )}
      />
    </div>
  );
};

CustomerContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default CustomerContainer;
