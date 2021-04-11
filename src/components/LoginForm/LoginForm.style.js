import styled from 'styled-components';

import { COLORS } from 'constants/app-styles.constant';

export const Container = styled.section`
  i {
    &:before {
      display: inherit;
    }
  }

  button {
    border-radius: 100px;
  }
`;

export const FormWrapper = styled.form`
  input, .btn-link {
    &:hover, &:focus, &:active {
      outline: none;
      box-shadow: none;
    }
  }

  .form-control {
    border: none;
    border-bottom: 1px solid ${ COLORS.GRAY1 };

    button {
      color: ${ COLORS.BLACK };
    }
  }
`;
