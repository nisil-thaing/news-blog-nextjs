import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Container } from './LoginForm.style';
import FormRenderer from './FormRenderer';

const SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email('Please input a valid email!')
    .required('Please input a valid email!'),
  password: Yup.string()
    .required('Please choose a secure password!')
});

const INITIAL_DATA = {
  email: '',
  password: ''
};

function LoginForm () {
  function handleSubmit (values) {
    console.log({ values });
  }

  return <Container className="p-2 pl-md-4 pr-md-4">
    <h1 className="mb-4 text-center">Log in</h1>
    <div className="row">
      <div className="col-6 pr-1">
        <button
          type="button"
          className="d-flex justify-content-center align-items-center w-100 btn btn-primary">
          <i className="mr-2 bi bi-facebook" />
          Facebook
        </button>
      </div>
      <div className="col-6 pl-1">
        <button
          type="button"
          className="d-flex justify-content-center align-items-center w-100 btn btn-outline-secondary">
          <i className="mr-2 bi bi-google" />
          Google
        </button>
      </div>
      <div className="col-12 mt-3">
        <p className="d-flex justify-content-center align-items-center text-uppercase w-100 mb-0">
          <i className="mr-2 bi bi-envelope" />
          Or log in using email
          <i className="ml-2 bi bi-arrow-down" />
        </p>
      </div>
    </div>
    <Formik
      initialValues={ INITIAL_DATA }
      validationSchema={ SCHEMA }
      onSubmit={ handleSubmit }>
      { props => <FormRenderer { ...props } /> }
    </Formik>
  </Container>;
}

export default LoginForm;
