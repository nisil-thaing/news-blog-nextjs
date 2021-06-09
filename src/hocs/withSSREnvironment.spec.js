import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import withSSREnvironment from './withSSREnvironment';

const CLIENT_SIDE_RENDERED_TEXT = 'This component is rendered from CLIENT SIDE',
  SERVER_SIDE_RENDERED_TEXT = 'This component is rendered from SERVER SIDE';

describe('withSSREnvironment higher order component', function () {
  afterEach(cleanup);

  it('Should passing isClientSide prop to inner component', function () {
    const WrapperComponent = props => <section data-testid="wrapper-component">
        {
          props.isClientSide
            ? CLIENT_SIDE_RENDERED_TEXT
            : SERVER_SIDE_RENDERED_TEXT
        }
      </section>,
      WrapperComponentWithHoc = withSSREnvironment(WrapperComponent);
    render(<WrapperComponentWithHoc />);
    const renderedElement = screen.getByTestId('wrapper-component');
    expect(renderedElement).toBeInTheDocument();
    expect(screen.getByText(CLIENT_SIDE_RENDERED_TEXT)).toBeInTheDocument;
  });
});
