import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestCustomers as requestCustomersAction } from '../actions/fetchCustomers';
import Frame from '../components/Frame';
import CustomersList from '../components/CustomersList';
import CustomerActions from '../components/CustomerActions';

const CustomersContainer = ({
  history,
  requestCustomers,
  customers,
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
            <button type="button" onClick={requestCustomers}>fetch customers</button>
          </React.Fragment>
        )}
      />
    </div>
  );
};

CustomersContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  customers: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  requestCustomers: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  customers,
}) => ({
  customers,
});

const mapDispatchToProps = ({
  requestCustomers: requestCustomersAction,
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomersContainer);
