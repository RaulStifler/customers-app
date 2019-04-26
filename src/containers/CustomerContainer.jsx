import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { requestUpdateCustomers } from '../actions/updateCustomer';
import { requestCustomers as requestCustomersAction } from '../actions/fetchCustomers';
import Frame from '../components/Frame';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';

const CustomerContainer = ({
  dni,
  customer,
  history,
  updateCustomer,
  requestCustomers,
}) => {
  const handleOnBack = () => {
    requestCustomers();
    history.goBack();
  };
  const handleSubmit = value => (updateCustomer(value));

  return (
    <Frame
      title={`Cliente ${dni}`}
      body={(
        <Route path="/customers/:dni/edit">
          {
            ({ match }) => {
              const CustomerControl = match ? CustomerEdit : CustomerData;
              return (
                <CustomerControl
                  initialValues={customer}
                  {...customer}
                  onSubmit={handleSubmit}
                  onSubmitSuccess={handleOnBack}
                  onBack={handleOnBack}
                />
              );
            }
          }
        </Route>
      )}
    />
  );
};

CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.shape({
    dni: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  updateCustomer: PropTypes.func.isRequired,
  requestCustomers: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  customers,
},
{
  dni,
}) => ({
  customer: customers.data.find(customer => customer.dni === dni),
});

const mapDispatchToProps = ({
  updateCustomer: requestUpdateCustomers,
  requestCustomers: requestCustomersAction,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerContainer));
