import React from 'react';
import renderer from 'react-test-renderer';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';
import '@testing-library/jest-dom';

import LazyImage from './LazyImage';

const SAMPLE_DATA = {
  src: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/42872933_1871916762904621_8392319564708315136_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=WRdbHTLltPkAX-Vp8_V&_nc_ht=scontent-hkg4-1.xx&oh=f24bbe6504b76455f96e311b895c4a1e&oe=60C86BA1',
  ratio: 16 / 9
};

describe('LazyImage component', function () {
  afterEach(function () {
    cleanup();

    if (renderer && renderer.unmount) {
      renderer.unmount();
    }
  });

  it('Should return 16x9 ratio image\'s snapshot', function () {
    const component = renderer.create(
      <LazyImage { ...SAMPLE_DATA } />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('Should return circle image\'s snapshot', function () {
    const component = renderer.create(
      <LazyImage
        src="https://i.pinimg.com/736x/94/26/33/9426330b9cc93cfab0c060046f24ae47--choices-quotes-badass-quotes.jpg"
        ratio={ 1 }
        isRounded />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return a default component with "loading" class', function () {
    render(<LazyImage { ...SAMPLE_DATA } />);
    const lazyImageRendererElement = screen.getByTestId('lazy-image'),
      backdropElement = screen.getByTestId('lazy-image-backdrop');
    expect(lazyImageRendererElement).toHaveClass('loading');
    expect(lazyImageRendererElement).toHaveStyle('padding-top: 56.25%');
    expect(backdropElement).toBeInTheDocument();
    expect(backdropElement).not.toHaveClass('rounded-circle');
  });

  it(
    'Should return a default component with "loading" class even the browser is not supporting the "window.innerHeight" value',
    function () {
      global.innerHeight = undefined;
      render(<LazyImage { ...SAMPLE_DATA } />);
      const lazyImageRendererElement = screen.getByTestId('lazy-image'),
        backdropElement = screen.getByTestId('lazy-image-backdrop');
      expect(lazyImageRendererElement).toHaveClass('loading');
      expect(lazyImageRendererElement).toHaveStyle('padding-top: 56.25%');
      expect(backdropElement).toBeInTheDocument();
      expect(backdropElement).not.toHaveClass('rounded-circle');
    }
  );

  it('Should return an image in square form in case of the ratio still not been specified', function () {
    render(<LazyImage src={ SAMPLE_DATA.src } ratio={ 0 } />);
    const lazyImageRendererElement = screen.getByTestId('lazy-image');
    expect(lazyImageRendererElement).toHaveStyle('padding-top: 100%');
  });

  xit('Should remove "loading" class in case of image to be displayed in the view', async function () {
    render(<LazyImage { ...SAMPLE_DATA } />);
    fireEvent.scroll(window);

    await waitFor(function () {
      const lazyImageRendererElement = screen.getByTestId('lazy-image');
      expect(lazyImageRendererElement).not.toHaveClass('loading');
    });
  });

  xit('Should remove "loading" class in case of image to be displayed in the view, and "document.documentElement.clientHeight" to be called instead of "window.innerHeight"', async function () {
    render(<LazyImage { ...SAMPLE_DATA } />);
    window.innerHeight = 0;
    fireEvent.scroll(window);

    await waitFor(function () {
      const lazyImageRendererElement = screen.getByTestId('lazy-image');
      expect(lazyImageRendererElement).not.toHaveClass('loading');
    });
  });
});
