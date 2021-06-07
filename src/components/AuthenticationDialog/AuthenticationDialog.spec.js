import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AuthenticationDialog from './AuthenticationDialog';
import { LayoutContext } from 'hocs/withAuthenticationPopup';

const SAMPLE_DATA = <section data-testid="authentication-dialog-body-wrapper">This is dialog body</section>;

describe('AuthenticationDialog component', function () {
  afterEach(function () {
    cleanup();

    if (renderer && renderer.unmount) {
      renderer.unmount();
    }
  });

  it('Should return full of AuthenticationDialog \'s UI on component snapshot', function () {
    const component = renderer.create(
      <LayoutContext.Provider value={{}}>
        <AuthenticationDialog>
          { SAMPLE_DATA }
        </AuthenticationDialog>
      </LayoutContext.Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should showing AuthenticationDialog \'s UI with body content', function () {
    render(
      <LayoutContext.Provider value={{ isShowing: true }}>
        <AuthenticationDialog>
          { SAMPLE_DATA }
        </AuthenticationDialog>
      </LayoutContext.Provider>
    );

    expect(screen.getByTestId('authentication-dialog-body-wrapper')).toBeInTheDocument();
  });

  it('Should showing AuthenticationDialog \'s UI with a clickable cross button to close the dialog', function () {
    const closeDialogHandler = jest.fn();

    render(
      <LayoutContext.Provider value={{ isShowing: true, hideAuthenticationDialog: closeDialogHandler }}>
        <AuthenticationDialog>
          { SAMPLE_DATA }
        </AuthenticationDialog>
      </LayoutContext.Provider>
    );

    const closeDialogButtonElement = screen.getByRole('button');
    expect(closeDialogButtonElement).toBeInTheDocument();

    fireEvent.click(closeDialogButtonElement);

    expect(closeDialogHandler).toBeCalledTimes(1);
  });
});
