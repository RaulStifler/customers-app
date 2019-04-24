import React from 'react';
import PropTypes from 'prop-types';

const CustomerActions = ({
  children,
}) => (
  <div className="customers-actions">
    {children}
  </div>
);

CustomerActions.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomerActions;
