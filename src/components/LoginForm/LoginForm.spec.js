import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm component', function () {
  afterEach(cleanup);

  it('Should return component\'s snapshot', function () {
    const component = renderer.create(
      <LoginForm
        isLoading={ false }
        onSwitchToRegistrationForm={ () => {} }
        onSubmit={ () => {} } />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return component\'s snapshot while component loading', function () {
    const component = renderer.create(
      <LoginForm
        isLoading={ true }
        onSwitchToRegistrationForm={ () => {} }
        onSubmit={ () => {} } />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
