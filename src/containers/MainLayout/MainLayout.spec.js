import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, getByTestId, render } from '@testing-library/react';

import MainLayout from './MainLayout';

const SAMPLE_DATA = {
  // eslint-disable-next-line react/display-name
  header: () => <header data-testid="pageHeader">This is Page header</header>,
  children: <section data-testid="pageBody">This is Page body</section>,
  // eslint-disable-next-line react/display-name
  footer: () => <footer data-testid="pageFooter">This is Page footer</footer>
};

describe('MainLayout component', function () {
  afterEach(cleanup);

  it('Should return full of MainLayout\'s UI on component snapshot', function () {
    const component = renderer.create(<MainLayout { ...SAMPLE_DATA } />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should showing minimize required props of MainLayout\'s UI with page body', function () {
    const { container } = render(<MainLayout>{ SAMPLE_DATA.children }</MainLayout>);
    expect(getByTestId(container, 'pageBody')).not.toBe(null);
  });

  it('Should showing full of props of MainLayout\'s UI with page header and footer', function () {
    const { container } = render(<MainLayout { ...SAMPLE_DATA } />);
    expect(getByTestId(container, 'pageBody')).not.toBe(null);
    expect(getByTestId(container, 'pageHeader')).not.toBe(null);
    expect(getByTestId(container, 'pageFooter')).not.toBe(null);
  });
});
