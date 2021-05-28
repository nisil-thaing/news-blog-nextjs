import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, getByTestId, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AuthenticationDialog from './AuthenticationDialog';
import { LayoutContext } from 'hocs/withAuthenticationPopup';

const SAMPLE_DATA = <section data-testid="testingAuthenticationDialogBody">This is dialog body</section>;

describe('AuthenticationDialog component', function () {
  afterEach(cleanup);

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

    expect(getByTestId(document, 'testingAuthenticationDialogBody')).toBeInTheDocument();
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

    const closeDialogButton = document.querySelector('.modal-header .close');
    expect(closeDialogButton).toBeInTheDocument();

    fireEvent.click(closeDialogButton);

    expect(closeDialogHandler).toBeCalledTimes(1);
  });
});
