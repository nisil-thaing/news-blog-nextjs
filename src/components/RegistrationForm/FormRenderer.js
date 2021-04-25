import React, { useMemo, useState } from 'react';
import { ErrorMessage } from 'formik';
import classnames from 'classnames';

import { FormWrapper as Container } from 'components/LoginForm/LoginForm.style';

const REQUIRED_FIELDS = ['firstName', 'lastName', 'email', 'password', 'passwordConfirmation'];

function PasswordInput ({
  name,
  placeholder,
  value,
  onChanges,
  onBlur
}) {
  const [ isShowingPassword, toggleShowingPassword ] = useState(false);

  function handleToggleShowingPassword (event) {
    event.stopPropagation();
    toggleShowingPassword(!isShowingPassword);
  }

  return <>
    <input
      name={ name }
      type={ isShowingPassword ? 'text' : 'password' }
      placeholder={ placeholder }
      className="w-100 border-0"
      value={ value }
      onBlur={ onBlur }
      onChange={ onChanges }
      autoComplete="off" />
    <button
      type="button"
      className="text-dark text-decoration-none p-0 pl-2 btn btn-link"
      onClick={ handleToggleShowingPassword }>
      <i className={ classnames('d-block bi', {
        'bi-eye-fill': isShowingPassword,
        'bi-eye-slash-fill': !isShowingPassword
      }) } />
    </button>
  </>;
}

function FormRenderer ({ isValid, values, handleChange, handleBlur, handleSubmit }) {
  const isDisabledSubmission = useMemo(
    () => !isValid || REQUIRED_FIELDS.findIndex(fieldKey => !values[fieldKey]) > -1,
    [ values, isValid ]
  );

  return <Container
    className="mt-4 pt-3"
    onSubmit={ handleSubmit }>
    <div className="d-flex align-items-center p-0 rounded-0 form-control">
      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        className="w-100 border-0"
        value={ values.firstName }
        onBlur={ handleBlur }
        onChange={ handleChange } />
    </div>
    <ErrorMessage
      name="firstName"
      render={ error => <p className="mt-2 mb-0 text-danger">{ error }</p> } />
    <div className="d-flex align-items-center mt-4 p-0 rounded-0 form-control">
      <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        className="w-100 border-0"
        value={ values.lastName }
        onBlur={ handleBlur }
        onChange={ handleChange } />
    </div>
    <ErrorMessage
      name="lastName"
      render={ error => <p className="mt-2 mb-0 text-danger">{ error }</p> } />
    <div className="d-flex align-items-center mt-4 p-0 rounded-0 form-control">
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        className="w-100 border-0"
        value={ values.email }
        onBlur={ handleBlur }
        onChange={ handleChange } />
    </div>
    <ErrorMessage
      name="email"
      render={ error => <p className="mt-2 mb-0 text-danger">{ error }</p> } />
    <div className="d-flex align-items-center mt-4 p-0 rounded-0 form-control">
      <PasswordInput
        name="password"
        placeholder="Password"
        value={ values.password }
        onBlur={ handleBlur }
        onChanges={ handleChange } />
    </div>
    <ErrorMessage
      name="password"
      render={ error => <p className="mt-2 mb-0 text-danger">{ error }</p> } />
    <div className="d-flex align-items-center mt-4 p-0 rounded-0 form-control">
      <PasswordInput
        name="passwordConfirmation"
        placeholder="Confirm Password"
        value={ values.passwordConfirmation }
        onBlur={ handleBlur }
        onChanges={ handleChange } />
    </div>
    <ErrorMessage
      name="passwordConfirmation"
      render={ error => <p className="mt-2 mb-0 text-danger">{ error }</p> } />
    <button
      type="submit"
      className="text-uppercase mt-5 w-100 btn btn-danger"
      disabled={ isDisabledSubmission }>
      Sign up
    </button>
  </Container>;
}

export default FormRenderer;