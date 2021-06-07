import React from 'react';
import renderer from 'react-test-renderer';
import {
  cleanup,
  fireEvent,
  render,
  screen
} from '@testing-library/react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import '@testing-library/jest-dom';

import FormRenderer from './FormRenderer';

const EMPTY_EMAIL_MESSAGE = 'EMPTY_EMAIL_MESSAGE',
  WRONG_EMAIL_FORMAT_MESSAGE = 'WRONG_EMAIL_FORMAT_MESSAGE',
  EMPTY_PASSWORD_MESSAGE = 'EMPTY_PASSWORD_MESSAGE';
const SCHEMA = Yup.object().shape({
    email: Yup.string()
      .email(WRONG_EMAIL_FORMAT_MESSAGE)
      .required(EMPTY_EMAIL_MESSAGE),
    password: Yup.string()
      .required(EMPTY_PASSWORD_MESSAGE)
  }), INITIAL_DATA = {
    email: '',
    password: ''
  };

describe('FormRenderer inside LoginForm component', function () {
  afterEach(function () {
    cleanup();

    if (renderer && renderer.unmount) {
      renderer.unmount();
    }
  });

  it('Should return form\'s snapshot', function () {
    const component = renderer.create(
      <Formik
        initialValues={ INITIAL_DATA }
        validationSchema={ SCHEMA }
        onSubmit={ () => {} }>
        { props => <FormRenderer { ...props } /> }
      </Formik>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should disabled submit button by default', async function () {
    render(
      <Formik
        initialValues={ INITIAL_DATA }
        validationSchema={ SCHEMA }
        onSubmit={ () => {} }>
        { props => <FormRenderer { ...props } /> }
      </Formik>
    );
    const submitButtonElement = screen.getByRole('button', { name: /Log in/i });
    expect(submitButtonElement).toBeDisabled();
  });

  it('Should changes password input from "password" type to "text" type whenever user toggled showing password checkbox', function () {
    render(
      <Formik
        initialValues={ INITIAL_DATA }
        validationSchema={ SCHEMA }
        onSubmit={ () => {} }>
        { props => <FormRenderer { ...props } /> }
      </Formik>
    );
    const passwordInputElement = screen.getByPlaceholderText(/Password/i);
    expect(passwordInputElement).toBeInTheDocument();
    expect(passwordInputElement).toHaveAttribute('type', 'password');

    const togglingShowingPasswordBtn = screen.getByRole('button', { name: /Toggle Showing Password/i });
    expect(togglingShowingPasswordBtn).toBeInTheDocument();

    fireEvent.click(togglingShowingPasswordBtn);
    expect(passwordInputElement).toHaveAttribute('type', 'text');

    fireEvent.click(togglingShowingPasswordBtn);
    expect(passwordInputElement).toHaveAttribute('type', 'password');
  });

  it('Should showing required email error', async function () {
    render(
      <Formik
        initialValues={ INITIAL_DATA }
        validationSchema={ SCHEMA }
        onSubmit={ () => {} }>
        { props => <FormRenderer { ...props } /> }
      </Formik>
    );

    const emailInputElement = screen.getByPlaceholderText(/Email Address/i);
    expect(emailInputElement).toBeInTheDocument();

    fireEvent.focus(emailInputElement);
    fireEvent.blur(emailInputElement);

    const submitButtonElement = screen.getByRole('button', { name: /Log in/i });
    const emailErrorMessageElement = await screen.findByText(EMPTY_EMAIL_MESSAGE, { exact: true });

    expect(emailErrorMessageElement).toBeInTheDocument(null);
    expect(submitButtonElement).toBeDisabled();
  });

  it('Should showing wrong email format error', async function () {
    render(
      <Formik
        initialValues={ INITIAL_DATA }
        validationSchema={ SCHEMA }
        onSubmit={ () => {} }>
        { props => <FormRenderer { ...props } /> }
      </Formik>
    );

    const emailInputElement = screen.getByPlaceholderText(/Email Address/i);

    fireEvent.focus(emailInputElement);
    fireEvent.change(emailInputElement, { target: { value: 'this_is_a_wrong_email_format_value' } });
    fireEvent.blur(emailInputElement);

    const submitButtonElement = screen.getByRole('button', { name: /Log in/i });
    const emailErrorMessageElement = await screen.findByText(WRONG_EMAIL_FORMAT_MESSAGE, { exact: true });

    expect(emailErrorMessageElement).toBeInTheDocument();
    expect(submitButtonElement).toBeDisabled();
  });

  it('Should showing required password error', async function () {
    render(
      <Formik
        initialValues={ INITIAL_DATA }
        validationSchema={ SCHEMA }
        onSubmit={ () => {} }>
        { props => <FormRenderer { ...props } /> }
      </Formik>
    );

    const passwordInputElement = screen.getByPlaceholderText(/Password/i);

    fireEvent.focus(passwordInputElement);
    fireEvent.blur(passwordInputElement);

    const submitButtonElement = screen.getByRole('button', { name: /Log in/i });
    const passwordErrorMessageElement = await screen.findByText(EMPTY_PASSWORD_MESSAGE, { exact: true });

    expect(passwordErrorMessageElement).toBeInTheDocument();
    expect(submitButtonElement).toBeDisabled();
  });

  it('Should enabling submit button in case of valid data inputs', function () {
    render(
      <Formik
        initialValues={ INITIAL_DATA }
        validationSchema={ SCHEMA }
        onSubmit={ () => {} }>
        { props => <FormRenderer { ...props } /> }
      </Formik>
    );

    const submitButtonElement = screen.getByRole('button', { name: /Log in/i }),
      emailInputElement = screen.getByPlaceholderText(/Email Address/i),
      passwordInputElement = screen.getByPlaceholderText(/Password/i);

    fireEvent.change(emailInputElement, { target: { value: 'valid_email_here@testing_data.something' } });
    fireEvent.change(passwordInputElement, { target: { value: 'this_is_a_valid_password' } });

    expect(submitButtonElement).toBeEnabled();
  });
});
