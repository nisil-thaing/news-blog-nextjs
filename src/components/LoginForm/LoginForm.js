import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';

import { Container, FormWrapper } from './LoginForm.style';

function LoginForm () {
  const [ isShowingPassword, toggleShowingPassword ] = useState(false);
  const { register, handleSubmit } = useForm();

  function handleToggleShowingPassword (event) {
    event.stopPropagation();
    toggleShowingPassword(!isShowingPassword);
  }

  function onSubmit (formData) {
    console.log('formData: ', JSON.stringify(formData));
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
    <FormWrapper
      className="mt-4 pt-3"
      onSubmit={ handleSubmit(onSubmit) }>
      <div className="p-0 rounded-0 form-control">
        <input
          type="email"
          { ...register('email') }
          placeholder="Email Address"
          className="w-100 border-0" />
      </div>
      <div className="d-flex align-items-center mt-4 p-0 rounded-0 form-control">
        <input
          type={ isShowingPassword ? 'text' : 'password' }
          { ...register('password') }
          placeholder="Password"
          className="w-100 border-0" />
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
      <button type="submit" className="text-uppercase mt-5 w-100 btn btn-danger">
        Log in
      </button>
    </FormWrapper>
  </Container>;
}

export default LoginForm;
