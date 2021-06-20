import React from 'react';
import { compose } from 'redux';
import {
  act,
  cleanup,
  render,
  screen
} from '@testing-library/react';

import '@testing-library/jest-dom';

import withAuthenticationPopup from './withAuthenticationPopup';
import reduxWrapper from 'store';

import * as uiSelectors from 'store/selectors/uiSelector';

function InnerComponent (props) {
  return <div data-testid="inner-component-wrapper">
    { JSON.stringify(props) }
  </div>;
}

const WrapperComponentWithHoc = compose(
  reduxWrapper.withRedux,
  withAuthenticationPopup
)(InnerComponent);

describe('withAuthenticationPopup higher order component', function () {
  let getAuthenticationDialogStateSelectorSpy = null,
    getWhetherShowingAuthenticationDialogSelectorSpy = null;

  beforeEach(function () {
    // jest.mock('react-redux', () => {
    //   return {
    //     connect: (mapStateToProps, mapDispatchToProps) => ReactComponent => ({
    //       mapStateToProps,
    //       mapDispatchToProps,
    //       ReactComponent
    //     }),
    //     Provider: ({ children }) => children
    //   };
    // });
  });

  afterEach(function () {
    cleanup();

    if (getAuthenticationDialogStateSelectorSpy) {
      getAuthenticationDialogStateSelectorSpy.mockRestore();
      getAuthenticationDialogStateSelectorSpy = null;
    }

    if (getWhetherShowingAuthenticationDialogSelectorSpy) {
      getWhetherShowingAuthenticationDialogSelectorSpy.mockRestore();
      getWhetherShowingAuthenticationDialogSelectorSpy = null;
    }
  });

  it('Should rendering the inner component', function () {
    act(function () {
      render(<WrapperComponentWithHoc />);
      return;
    });

    const renderedElement = screen.getByTestId('inner-component-wrapper');
    expect(renderedElement).toBeInTheDocument();
  });

  it('Should rendering the inner component with LoginForm inside', function () {
    jest.mock('../store/selectors/uiSelector');
    getAuthenticationDialogStateSelectorSpy = jest.spyOn(uiSelectors, 'getAuthenticationDialogState')
      .mockReturnValue({
        isShowing: true,
        type: 'AUTHENTICATION_LOGIN_DIALOG'
      });
    getWhetherShowingAuthenticationDialogSelectorSpy = jest.spyOn(uiSelectors, 'getWhetherShowingAuthenticationDialog')
      .mockReturnValue(true);

    act(function () {
      render(<WrapperComponentWithHoc />);
      return;
    });

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('dialog'))
      .toContainHTML('<h1 class="mb-5 text-center">Log in</h1>');
    expect(screen.getByRole('button', { name: /Log in/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Log in/i })).toHaveAttribute('type', 'submit');
    expect(screen.getByRole('button', { name: /Log in/i })).toBeDisabled();
  });
});
