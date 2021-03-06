import React, { useState } from 'react';
import { func } from 'prop-types';

import classnames from 'classnames';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Accordion, Card } from 'react-bootstrap';

import { Container } from './RegistrationForm.style';
import FormRenderer from './FormRenderer';

const SCHEMA = Yup.object().shape({
    firstName: Yup.string()
      .required('Please input your first name!'),
    lastName: Yup.string()
      .required('Please input your last name!'),
    email: Yup.string()
      .email('Please input a valid email!')
      .required('Please input a valid email!'),
    password: Yup.string()
      .required('Please choose a secure password!'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Passwords must match')
  }), INITIAL_DATA = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };

function RegistrationForm ({ onSwitchToLoginForm, onSubmit }) {
  const [ isShowingForm, updateWhetherFormIsShowing ] = useState(false);

  function onToggleShowingForm (activeKey) {
    const isShowing = activeKey === '0';

    return updateWhetherFormIsShowing(isShowing);
  }

  return <Container  className="p-2 pl-md-4 pr-md-4">
    <h1 className="mb-5 text-center">Sign up</h1>
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
    </div>
    <Accordion className="mt-4" onSelect={ onToggleShowingForm }>
      <Card className={ classnames('border-0', { 'active': isShowingForm }) }>
        <Card.Header className="text-center p-0 border-0 bg-white">
          <Accordion.Toggle
            as="button"
            className="d-block text-decoration-none w-100 p-0 border-0 btn btn-link"
            eventKey="0">
            <p className="d-flex justify-content-center align-items-center text-uppercase text-dark w-100 mb-0 span-note">
              <i className="mr-2 bi bi-envelope" />
              Or sign up using email
              <i className="d-block text-danger ml-2 bi bi-arrow-right" />
            </p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="p-0">
            <Formik
              initialValues={ INITIAL_DATA }
              validationSchema={ SCHEMA }
              onSubmit={ onSubmit }>
              { props => <FormRenderer { ...props } /> }
            </Formik>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    <div className="d-flex justify-content-center align-items-baseline mt-5 switching-form-button">
      <p className="m-0">Already have an account?</p>
      <button
        type="button"
        className="text-dark ml-1 p-0 btn btn-link"
        onClick={ onSwitchToLoginForm }>
        <u>Log in</u>
      </button>
    </div>
  </Container>;
}

RegistrationForm.propTypes = {
  onSwitchToLoginForm: func,
  onSubmit: func// .isRequired
};

export default RegistrationForm;
