import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import MainLayout from './MainLayout';

const SAMPLE_BODY = <section data-testid="pageBody">This is Page body</section>;
const SAMPLE_DATA = {
  // eslint-disable-next-line react/display-name
  header: () => <header data-testid="pageHeader">This is Page header</header>,
  children: SAMPLE_BODY,
  // eslint-disable-next-line react/display-name
  footer: () => <footer data-testid="pageFooter">This is Page footer</footer>
};

describe('MainLayout component', function () {
  let rendererInstance = null;

  afterEach(function () {
    cleanup();

    if (rendererInstance?.unmount) {
      rendererInstance.unmount();
      rendererInstance = null;
    }
  });

  it('Should return full of MainLayout\'s UI on component snapshot', function () {
    rendererInstance = renderer.create(<MainLayout { ...SAMPLE_DATA } />);
    const tree = rendererInstance.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should showing minimize required props of MainLayout\'s UI with page body', function () {
    render(<MainLayout>{ SAMPLE_BODY }</MainLayout>);
    expect(screen.getByTestId('pageBody')).toBeInTheDocument();
  });

  it('Should showing full of props of MainLayout\'s UI with page header and footer', function () {
    render(<MainLayout { ...SAMPLE_DATA } />);
    expect(screen.getByTestId('pageBody')).toBeInTheDocument();
    expect(screen.getByTestId('pageHeader')).toBeInTheDocument();
    expect(screen.getByTestId('pageFooter')).toBeInTheDocument();
  });
});
