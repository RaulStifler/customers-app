import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCustomer as createCustomerAction } from '../actions/createCustomer';
import Frame from '../components/Frame';
import CustomerEdit from '../components/CustomerEdit';

const NewCustomerContainer = ({
  history,
  createCustomer,
}) => {
  const handleOnSubmit = value => (createCustomer(value));
  const handleOnBack = () => (history.goBack());
  return (
    <Frame
      title="Nuevo cliente"
      body={
        (
          <CustomerEdit
            onSubmit={handleOnSubmit}
            onSubmitSuccess={handleOnBack}
            onBack={handleOnBack}
          />
        )
      }
    />
  );
};

NewCustomerContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  createCustomer: PropTypes.func.isRequired,
};

const mapDispatchToProps = ({
  createCustomer: createCustomerAction,
});

export default connect(null, mapDispatchToProps)(NewCustomerContainer);
