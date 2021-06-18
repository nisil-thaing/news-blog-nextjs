import React from 'react';
import renderer from 'react-test-renderer';

import LoginForm from './LoginForm';

describe('LoginForm component', function () {
  let rendererInstance = null;

  afterEach(function () {
    if (rendererInstance?.unmount) {
      rendererInstance.unmount();
      rendererInstance = null;
    }
  });

  it('Should return component\'s snapshot', function () {
    rendererInstance = renderer.create(
      <LoginForm
        isLoading={ false }
        onSwitchToRegistrationForm={ jest.fn() }
        onSubmit={ jest.fn() } />);
    const tree = rendererInstance.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return component\'s snapshot while component loading', function () {
    rendererInstance = renderer.create(
      <LoginForm
        isLoading={ true }
        onSwitchToRegistrationForm={ jest.fn() }
        onSubmit={ jest.fn() } />);
    const tree = rendererInstance.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
