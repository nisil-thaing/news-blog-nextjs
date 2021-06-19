import React from 'react';
import { compose } from 'redux';
import { cleanup, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import withAuthenticationPopup from './withAuthenticationPopup';
import reduxWrapper from 'store';

function InnerComponent (props) {
  return <div data-testid="inner-component-wrapper">
    { JSON.stringify(props) }
  </div>;
}

describe('withAuthenticationPopup higher order component', function () {
  // beforeAll(function () {
  //   jest.mock('react-redux', () => {
  //     return {
  //       connect: (mapStateToProps, mapDispatchToProps) => ReactComponent => ({
  //         mapStateToProps,
  //         mapDispatchToProps,
  //         ReactComponent
  //       }),
  //       Provider: ({ children }) => children
  //     };
  //   });
  // });

  afterEach(cleanup);

  it('Should rendering the inner component', function () {
    const WrapperComponentWithHoc = compose(
      reduxWrapper.withRedux,
      withAuthenticationPopup
    )(InnerComponent);
    render(<WrapperComponentWithHoc />);
    const renderedElement = screen.getByTestId('inner-component-wrapper');
    expect(renderedElement).toBeInTheDocument();
  });

  it('Should rendering the inner component with LoginForm inside', function () {});
});
