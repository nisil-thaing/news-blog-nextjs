import React from 'react';
import renderer from 'react-test-renderer';
import {
  cleanup,
  fireEvent,
  waitFor,
  render,
  getByText
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
  afterEach(cleanup);

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
    const { container } = render(
      <Formik
        initialValues={ INITIAL_DATA }
        validationSchema={ SCHEMA }
        onSubmit={ () => {} }>
        { props => <FormRenderer { ...props } /> }
      </Formik>
    );

    expect(container.querySelector('button[type="submit"]')).toBeDisabled();
  });

  it('Should changes password input from "password" type to "text" type whenever user toggled showing password checkbox', function () {
    const hiddenPasswordInputSelector = 'input[name="password"][type="password"]',
      showingPasswordInputSelector = 'input[name="password"][type="text"]';
    const { container } = render(
      <Formik
        initialValues={ INITIAL_DATA }
        validationSchema={ SCHEMA }
        onSubmit={ () => {} }>
        { props => <FormRenderer { ...props } /> }
      </Formik>
    );

    expect(container.querySelector(hiddenPasswordInputSelector)).toBeTruthy();
    expect(container.querySelector(showingPasswordInputSelector)).toBeFalsy();

    const togglingShowingPasswordBtn = container.querySelector('button[type="button"]');
    expect(togglingShowingPasswordBtn).toBeTruthy();

    fireEvent.click(togglingShowingPasswordBtn);
    expect(container.querySelector(hiddenPasswordInputSelector)).toBeFalsy();
    expect(container.querySelector(showingPasswordInputSelector)).toBeTruthy();
  });

  it('Should showing required email error', async function () {
    const { container } = render(
      <Formik
        initialValues={ INITIAL_DATA }
        validationSchema={ SCHEMA }
        onSubmit={ () => {} }>
        { props => <FormRenderer { ...props } /> }
      </Formik>
    );

    const emailInput = container.querySelector('input[name="email"]');

    fireEvent.focus(emailInput);
    fireEvent.blur(emailInput);

    await waitFor(() => getByText(container, EMPTY_EMAIL_MESSAGE, { exact: true }));

    expect(getByText(container, EMPTY_EMAIL_MESSAGE, { exact: true })).not.toBe(null);
    expect(container.querySelector('button[type="submit"]')).toBeDisabled();
  });

  it('Should showing wrong email format error', async function () {
    const { container } = render(
      <Formik
        initialValues={ INITIAL_DATA }
        validationSchema={ SCHEMA }
        onSubmit={ () => {} }>
        { props => <FormRenderer { ...props } /> }
      </Formik>
    );

    const emailInput = container.querySelector('input[name="email"]');

    fireEvent.focus(emailInput);
    fireEvent.change(emailInput, { target: { value: 'somewrongemailformat' } });
    fireEvent.blur(emailInput);

    await waitFor(() => getByText(container, WRONG_EMAIL_FORMAT_MESSAGE, { exact: true }));

    expect(getByText(container, WRONG_EMAIL_FORMAT_MESSAGE, { exact: true })).not.toBe(null);
    expect(container.querySelector('button[type="submit"]')).toBeDisabled();
  });

  it('Should showing required password error', async function () {
    const { container } = render(
      <Formik
        initialValues={ INITIAL_DATA }
        validationSchema={ SCHEMA }
        onSubmit={ () => {} }>
        { props => <FormRenderer { ...props } /> }
      </Formik>
    );

    const passwordInput = container.querySelector('input[name="password"]');

    fireEvent.focus(passwordInput);
    fireEvent.blur(passwordInput);

    await waitFor(() => getByText(container, EMPTY_PASSWORD_MESSAGE, { exact: true }));

    expect(getByText(container, EMPTY_PASSWORD_MESSAGE, { exact: true })).not.toBe(null);
    expect(container.querySelector('button[type="submit"]')).toBeDisabled();
  });

  it('Should enabling submit button in case of valid data inputs', async function () {
    const { container } = render(
      <Formik
        initialValues={ INITIAL_DATA }
        validationSchema={ SCHEMA }
        onSubmit={ () => {} }>
        { props => <FormRenderer { ...props } /> }
      </Formik>
    );

    const emailInput = container.querySelector('input[name="email"]'),
      passwordInput = container.querySelector('input[name="password"]');

    fireEvent.change(emailInput, { target: { value: 'valid_email_here@testing_data.something' } });
    fireEvent.change(passwordInput, { target: { value: 'thisisavalidpassword' } });

    expect(container.querySelector('button[type="submit"]')).not.toBeDisabled();
  });
});
