import styled from 'styled-components';

import { COLORS, FONT_WEIGHTS } from 'constants/app-styles.constant';
import { pixelsToRem, placeholder } from 'styles/mixins.style';

export const Container = styled.section`
  i {
    &:before {
      display: inherit;
    }
  }

  button {
    border-radius: 100px;

    &:hover, &:focus, &:active {
      outline: none;
      box-shadow: none;
    }
  }

  .span-note {
    font-size: ${ pixelsToRem(14) };
    line-height: 100%;
  }

  .switching-form-button {
    button {
      font-weight: ${ FONT_WEIGHTS.BOLD };
    }

    > * {
      font-size: ${ pixelsToRem(14) };
      line-height: 100%;
    }
  }
`;

export const FormWrapper = styled.form`
  input {
    &:hover, &:focus, &:active {
      outline: none;
      box-shadow: none;
    }

    ${placeholder`
      font-style: italic;
    `}
  }

  .form-control {
    border: none;
    border-bottom: 1px solid ${ COLORS.GRAY1 };
  }
`;
