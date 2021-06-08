import React, {
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { bool, number, string } from 'prop-types';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import { Container } from './LazyImage.style';

export function handleImageLoad (src, bingingElementRef, callback) {
  if (bingingElementRef?.current) {
    bingingElementRef.current.style.backgroundImage = `url("${ src }")`;
  }

  return callback && callback();
}

export function handleImageLoadingError (callback) {
  return callback && callback();
}

function checkWhetherElementInViewport (element) {
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();

  return rect.top >= 0
    && rect.left >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

function LazyImageRenderer ({
  src,
  ratio,
  isRounded
}) {
  const ratioString = `${ (1 / (ratio || 1)) * 100 }%`;
  const imageRef = useRef(null);
  const imageLoaderRef = useRef(null);
  let [ isImageLoaded, toggleIsImageLoaded ] = useState(!src);

  const loadingImageHandler = handleImageLoad.bind(
    this,
    src,
    imageRef,
    handleDestroyLoadingImageListener
  );
  const loadingImageFailureHandler = handleImageLoadingError.bind(
    this,
    handleDestroyLoadingImageListener
  );

  useEffect(function () {
    imageLoaderRef.current = new Image();

    if (src) {
      window.addEventListener('scroll', handleScroll);
      registerLoadingImageEvents();
      handleScroll();
    }

    return null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // componentWillUnmount
  useEffect(function () {
    return function () {
      handleDestroyLoadingImageListener();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function registerLoadingImageEvents () {
    imageLoaderRef.current?.addEventListener('load', loadingImageHandler);
    imageLoaderRef.current?.addEventListener('error', loadingImageFailureHandler);
  }

  function handleScroll () {
    const isElementInViewport = checkWhetherElementInViewport(imageRef.current);

    if (!isImageLoaded && isElementInViewport && imageLoaderRef.current) {
      imageLoaderRef.current.src = src;
    }

    return null;
  }

  function handleDestroyLoadingImageListener () {
    toggleIsImageLoaded(true);

    imageLoaderRef.current?.removeEventListener('load', loadingImageHandler);
    imageLoaderRef.current?.removeEventListener('error', loadingImageFailureHandler);
    imageLoaderRef.current = null;

    window.removeEventListener('scroll', handleScroll);

    return null;
  }

  return <Container ratio={ ratioString }>
    <div
      ref={ imageRef }
      data-testid="lazy-image"
      className={ classnames(
        { 'rounded-circle': isRounded },
        'lazy-image',
        { 'loading': !isImageLoaded }
      ) } />
    <div
      data-testid="lazy-image-backdrop"
      className={ classnames(
        'w-100 h-100',
        { 'rounded-circle': isRounded },
        'backdrop'
      ) } />
  </Container>;
}

function LazyImage (props) {
  const uuid = useMemo(
    () => uuidv4(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ props.src, props.isRounded, props.ratio ]
  );

  return <LazyImageRenderer key={ uuid } { ...props } />;
}

LazyImage.propTypes = {
  src: string.isRequired,
  ratio: number,
  isRounded: bool
};

LazyImage.defaultProps = {
  ratio: 1,
  isRounded: false
};

export default LazyImage;
