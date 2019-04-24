import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

const Frame = ({
  title,
  body,
}) => (
  <div className="app-frame">
    <Header title={title} />
    <div>{body}</div>
    <div>
      Aplicacion simple de Ejemplo
    </div>
  </div>
);

Frame.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
};

export default Frame;
