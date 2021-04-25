import React, { useEffect, useRef, useState } from 'react';
import { bool, number, string } from 'prop-types';
import classnames from 'classnames';

import { Container } from './LazyImage.style';

function checkWhetherElementInViewport (ele) {
  const rect = ele.getBoundingClientRect();

  return rect.top >= 0
    && rect.left >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

function LazyImageRenderer ({
  src,
  ratio,
  isRounded
}) {
  const ratioString = `${ (1 / (ratio || 0)) * 100 }%`;
  const imageRef = useRef(null);
  const imageLoaderRef = useRef(new Image());
  let [ isImageLoaded, toggleIsImageLoaded ] = useState(!src);

  useEffect(function () {
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
    imageLoaderRef.current?.addEventListener('load', handleImageLoad);
    imageLoaderRef.current?.addEventListener('error', handleImageLoadingError);
  }

  function handleImageLoad () {
    if (imageRef?.current) {
      imageRef.current.style.backgroundImage = `url("${ src }")`;
      handleDestroyLoadingImageListener();
    }
  }

  function handleImageLoadingError () {
    handleDestroyLoadingImageListener();

    /* if (onLoadingFailure) {
      onLoadingFailure();
    } */
  }

  function handleScroll () {
    if (imageRef.current) {
      const isElementInViewport = checkWhetherElementInViewport(imageRef.current);

      if (!isImageLoaded && isElementInViewport && imageLoaderRef.current) {
        imageLoaderRef.current.src = src;
      }
    }
  }

  function handleDestroyLoadingImageListener () {
    toggleIsImageLoaded(true);

    if (imageLoaderRef.current) {
      imageLoaderRef.current.removeEventListener('load', handleImageLoad);
      imageLoaderRef.current.removeEventListener('error', handleImageLoadingError);
      imageLoaderRef.current = null;
    }

    window.removeEventListener('scroll', handleScroll);
  }

  return <Container ratio={ ratioString }>
    <div
      ref={ imageRef }
      className={ classnames(
        { 'rounded-circle': isRounded },
        'lazy-image',
        { 'loading': !isImageLoaded }
      ) } />
  </Container>;
}

function LazyImage (props) {
  return <LazyImageRenderer { ...props } />;
}

LazyImage.propTypes = {
  src: string.isRequired,
  ratio: number.isRequired,
  isRounded: bool
};

export default LazyImage;