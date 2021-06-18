import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AuthenticationDialog from './AuthenticationDialog';
import { LayoutContextProvider } from 'hocs/withAuthenticationPopup';

const SAMPLE_DATA = <section data-testid="authentication-dialog-body-wrapper">This is dialog body</section>;

function renderComponentWithLayoutContext (data, contextValues) {
  return render(
    <LayoutContextProvider { ...contextValues }>
      <AuthenticationDialog>
        { data }
      </AuthenticationDialog>
    </LayoutContextProvider>
  );
}

describe('AuthenticationDialog component', function () {
  let rendererInstance = null;

  afterEach(function () {
    cleanup();

    if (rendererInstance?.unmount) {
      rendererInstance.unmount();
    }
  });

  it('Should return full of AuthenticationDialog \'s UI on component snapshot', function () {
    rendererInstance = renderer.create(
      <LayoutContextProvider value={{}}>
        <AuthenticationDialog>
          { SAMPLE_DATA }
        </AuthenticationDialog>
      </LayoutContextProvider>
    );
    const tree = rendererInstance.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should showing AuthenticationDialog \'s UI with body content', function () {
    renderComponentWithLayoutContext(SAMPLE_DATA, { isShowing: true });
    expect(screen.getByTestId('authentication-dialog-body-wrapper')).toBeInTheDocument();
  });

  it('Should showing AuthenticationDialog \'s UI with a clickable cross button to close the dialog', function () {
    const closeDialogHandler = jest.fn();
    renderComponentWithLayoutContext(
      SAMPLE_DATA,
      { isShowing: true, hideAuthenticationDialog: closeDialogHandler }
    );

    const closeDialogButtonElement = screen.getByRole('button');
    expect(closeDialogButtonElement).toBeInTheDocument();

    fireEvent.click(closeDialogButtonElement);

    expect(closeDialogHandler).toBeCalledTimes(1);
  });
});
