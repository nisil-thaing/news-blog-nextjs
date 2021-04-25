import { css, keyframes } from 'styled-components';

import { FONT_BASE, RESPONSIVE_BREAKPOINTS } from 'constants/app-styles.constant';

export const medias = {
  EXTRA_SMALL_SCREEN: (...args) => css`
    @media (max-width: ${ RESPONSIVE_BREAKPOINTS.MAX_EXTRA_SMALL }px) {
      ${css(...args)};
    }
  `,
  SMALL_SCREEN: (...args) => css`
    @media (min-width: ${ RESPONSIVE_BREAKPOINTS.MIN_SMALL }px) {
      ${css(...args)};
    }
  `,
  SMALL_SCREEN_ONLY: (...args) => css`
    @media (min-width: ${ RESPONSIVE_BREAKPOINTS.MIN_SMALL }px) and (max-width: ${ RESPONSIVE_BREAKPOINTS.MIN_MEDIUM - 1 }px) {
      ${css(...args)};
    }
  `,
  SMALL_SCREEN_DOWN: (...args) => css`
    @media (max-width: ${ RESPONSIVE_BREAKPOINTS.MIN_MEDIUM - 1 }px) {
      ${css(...args)};
    }
  `,
  MEDIUM_SCREEN: (...args) => css`
    @media (min-width: ${ RESPONSIVE_BREAKPOINTS.MIN_MEDIUM }px) {
      ${css(...args)};
    }
  `,
  MEDIUM_SCREEN_ONLY: (...args) => css`
    @media (min-width: ${ RESPONSIVE_BREAKPOINTS.MIN_MEDIUM }px) and (max-width: ${ RESPONSIVE_BREAKPOINTS.MIN_LARGE - 1 }px) {
      ${css(...args)};
    }
  `,
  MEDIUM_SCREEN_DOWN: (...args) => css`
    @media (max-width: ${ RESPONSIVE_BREAKPOINTS.MIN_LARGE - 1 }px) {
      ${css(...args)};
    }
  `,
  LARGE_SCREEN: (...args) => css`
    @media (min-width: ${ RESPONSIVE_BREAKPOINTS.MIN_LARGE }px) {
      ${css(...args)};
    }
  `,
  LARGE_SCREEN_ONLY: (...args) => css`
    @media (min-width: ${ RESPONSIVE_BREAKPOINTS.MIN_LARGE }px) and (max-width: ${ RESPONSIVE_BREAKPOINTS.MIN_EXTRA_LARGE - 1 }px) {
      ${css(...args)};
    }
  `,
  LARGE_SCREEN_DOWN: (...args) => css`
    @media (max-width: ${ RESPONSIVE_BREAKPOINTS.MIN_EXTRA_LARGE - 1 }px) {
      ${css(...args)};
    }
  `,
  EXTRA_LARGE_SCREEN: (...args) => css`
    @media (min-width: ${ RESPONSIVE_BREAKPOINTS.MIN_EXTRA_LARGE }px) {
      ${css(...args)};
    }
  `
};

export function pixelsToRem (size) {
  return `${ (size / FONT_BASE) }rem`;
}

export const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export function placeholder (cssTemplate) {
  return css`
    ::-webkit-input-placeholder {
      ${ css(cssTemplate) };
    }
    :-moz-placeholder {
      ${ css(cssTemplate) };
    }
    ::-moz-placeholder {
      ${ css(cssTemplate) };
    }
    :-ms-input-placeholder {
      ${ css(cssTemplate) };
    }
  `;
}
