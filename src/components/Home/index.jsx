import React from 'react';
import PropTypes from 'prop-types';

const Home = ({
  title,
}) => (
  <div>
    <h1>Home</h1>
    <span>{title}</span>
  </div>
);

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
