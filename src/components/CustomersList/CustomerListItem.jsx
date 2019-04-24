import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomersListItem = ({
  name,
  dni,
  editAction,
  deleteAction,
  urlPath,
}) => (
  <div className="customers-list-item">
    <div className="field">
      <Link to={`${urlPath}${dni}`}>{name}</Link>
    </div>
    <div className="field">
      <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
    </div>
    <div className="field">
      <Link to={`${urlPath}${dni}/delete`}>{deleteAction}</Link>
    </div>
  </div>
);

CustomersListItem.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  deleteAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomersListItem;
