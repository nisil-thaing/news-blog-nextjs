import styled from 'styled-components';

import { Container as LoginFormContainer } from 'components/LoginForm/LoginForm.style';

export const Container = styled(LoginFormContainer)`
  .accordion {
    .card {
      .bi-arrow-right {
        transition-duration: 0.2s;
      }

      &.active {
        .bi-arrow-right {
          transform: rotate(90deg);
        }
      }
    }
  }
`;
