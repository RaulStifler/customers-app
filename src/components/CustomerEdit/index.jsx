/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Prompt } from 'react-router-dom';
import CustomerAction from '../CustomerActions';

const toNumber = value => value && Number(value);

const CustomerEdit = ({
  handleSubmit,
  submitting,
  onBack,
  pristine,
  submitSucceeded,
}) => (
  <div>
    <h2>Edicion del cliente</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre: </label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="dni">DNI: </label>
        <Field name="dni" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="age">Edad: </label>
        <Field name="age" component="input" type="number" parse={toNumber} />
      </div>
      <CustomerAction>
        <button type="submit" disabled={pristine || submitting}>Guardar</button>
        <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
      </CustomerAction>
      <Prompt
        when={!pristine && !submitSucceeded}
        message="Se perderan los datos modificados"
      />
    </form>
  </div>
);

CustomerEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
};

export default reduxForm({ form: 'customerForm' })(CustomerEdit);
