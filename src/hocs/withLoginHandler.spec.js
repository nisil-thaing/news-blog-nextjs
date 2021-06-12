import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';

import '@testing-library/jest-dom';

import withLoginHandler from './withLoginHandler';
import AuthenticationService from 'services/authenticationService';

jest.mock('../services/authenticationService');

const MOCK_FORM_DATA = {
    email: 'some-email@alias.com',
    password: 'this-is-a-password'
  }, MOCK_RESPONSE_DATA = {
    id_token: 'this_is_a_sample_token'
  };

function WrapperComponent (props) {
  function handleSubmit (event) {
    event.preventDefault();

    return props.onSubmit && props.onSubmit(props.mockData);
  }

  return <form
    data-testid="wrapper-component"
    data-loading={ props.isLoading }
    onSubmit={ handleSubmit }>
    <div data-testid="error-description">{ JSON.stringify(props.latestRequestError) }</div>
    <button type="submit">Submit</button>
  </form>;
}

describe('withLoginHandler higher order component', function () {
  let authenticationServiceSpy;

  beforeEach(function () {
    authenticationServiceSpy = jest.spyOn(AuthenticationService.prototype, 'requestToLogin')
      .mockImplementation(() => Promise.resolve(MOCK_RESPONSE_DATA));
  });

  afterEach(function () {
    cleanup();
    authenticationServiceSpy.mockRestore();
  });

  it('Should rendering the inner component', function () {
    const WrapperComponentWithHoc = withLoginHandler(WrapperComponent);
    render(<WrapperComponentWithHoc />);
    const renderedElement = screen.getByTestId('wrapper-component');
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement).toHaveAttribute('data-loading', 'false');
  });

  it('Should do nothing in case of no form data submitted', async function () {
    const WrapperComponentWithHoc = withLoginHandler(WrapperComponent);
    render(<WrapperComponentWithHoc mockData={ null } />);

    const submitButtonElement = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButtonElement);

    await waitFor(function () {
      expect(AuthenticationService.prototype.requestToLogin).not.toBeCalled();

      const renderedElement = screen.getByTestId('wrapper-component');
      expect(renderedElement).toBeInTheDocument();
      expect(renderedElement).toHaveAttribute('data-loading', 'false');
    });
  });

  it('Should fire event submitting from the inner form correctly', async function () {
    const WrapperComponentWithHoc = withLoginHandler(WrapperComponent);
    render(<WrapperComponentWithHoc mockData={ MOCK_FORM_DATA } />);

    const submitButtonElement = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButtonElement);

    await waitFor(function () {
      expect(AuthenticationService.prototype.requestToLogin).toBeCalledTimes(1);

      const renderedElement = screen.getByTestId('wrapper-component');
      expect(renderedElement).toBeInTheDocument();
      expect(renderedElement).toHaveAttribute('data-loading', 'true');
    });
  });

  it('Should fire event submitting from the inner form and call the callback functions in case of login request is FULFILLED', async function () {
    const onSkipSpy = jest.fn(),
      onFinishSpy = jest.fn();
    const WrapperComponentWithHoc = withLoginHandler(WrapperComponent);
    render(
      <WrapperComponentWithHoc
        mockData={ MOCK_FORM_DATA }
        onSkip={ onSkipSpy }
        onFinish={ onFinishSpy } />
    );

    const submitButtonElement = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButtonElement);

    await waitFor(function () {
      expect(AuthenticationService.prototype.requestToLogin).toBeCalledTimes(1);

      const renderedElement = screen.getByTestId('wrapper-component');
      expect(renderedElement).toBeInTheDocument();
      expect(renderedElement).toHaveAttribute('data-loading', 'false');
      expect(onSkipSpy).toBeCalledTimes(1);
      expect(onFinishSpy).toBeCalledTimes(1);
    });
  });

  it('Should fire event submitting from the inner form and call the callback functions in case of login request is FAILED', async function () {
    authenticationServiceSpy = jest.spyOn(AuthenticationService.prototype, 'requestToLogin')
      .mockImplementation(() => Promise.reject('Mock response: requestToLogin Failed!'));

    const WrapperComponentWithHoc = withLoginHandler(WrapperComponent);
    render(<WrapperComponentWithHoc mockData={ MOCK_FORM_DATA } />);

    const submitButtonElement = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButtonElement);

    await waitFor(function () {
      expect(AuthenticationService.prototype.requestToLogin).toBeCalledTimes(1);

      const renderedElement = screen.getByTestId('wrapper-component');
      expect(renderedElement).toBeInTheDocument();
      expect(renderedElement).toHaveAttribute('data-loading', 'false');
      expect(screen.getByTestId('error-description'))
        .toHaveTextContent(/Mock response: requestToLogin Failed!/i);
    });
  });
});
