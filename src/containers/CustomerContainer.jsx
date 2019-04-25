import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Frame from '../components/Frame';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';

const CustomerContainer = ({
  dni,
  customer,
}) => (
  <Frame
    title={`Cliente ${dni}`}
    body={(
      <Route path="/customers/:dni/edit">
        {
          ({ match }) => {
            const CustomerControl = match ? CustomerEdit : CustomerData;
            return <CustomerControl {...customer} />;
          }
        }
      </Route>
    )}
  />
);

CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.shape({
    dni: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = ({
  customers,
},
{
  dni,
}) => ({
  customer: customers.data.find(customer => customer.dni === dni),
});

export default connect(mapStateToProps, null)(CustomerContainer);
