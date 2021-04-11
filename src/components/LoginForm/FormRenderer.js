import React, { useMemo, useState } from 'react';
import { ErrorMessage } from 'formik';
import classnames from 'classnames';

import { FormWrapper as Container } from './LoginForm.style';

function FormRenderer ({ values, handleChange, handleBlur, handleSubmit }) {
  const [ isShowingPassword, toggleShowingPassword ] = useState(false);
  const isDisabledSubmission = useMemo(
    () => !values.email || !values.password,
    [ values.email, values.password ]
  );

  function handleToggleShowingPassword (event) {
    event.stopPropagation();
    toggleShowingPassword(!isShowingPassword);
  }

  return <Container
    className="mt-4 pt-3"
    onSubmit={ handleSubmit }>
    <div className="p-0 rounded-0 form-control">
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
      <input
        name="password"
        type={ isShowingPassword ? 'text' : 'password' }
        placeholder="Password"
        className="w-100 border-0"
        value={ values.password }
        onBlur={ handleBlur }
        onChange={ handleChange }
        autoComplete="on" />
      <button
        type="button"
        className="btn btn-link"
        onClick={ handleToggleShowingPassword }>
        <i className={ classnames('bi', {
          'bi-eye-fill': isShowingPassword,
          'bi-eye-slash-fill': !isShowingPassword
        }) } />
      </button>
    </div>
    <ErrorMessage
      name="password"
      render={ error => <p className="mt-2 mb-0 text-danger">{ error }</p> } />
    <button
      type="submit"
      className="text-uppercase mt-5 w-100 btn btn-danger"
      disabled={ isDisabledSubmission }>
      Log in
    </button>
  </Container>;
}

export default FormRenderer;