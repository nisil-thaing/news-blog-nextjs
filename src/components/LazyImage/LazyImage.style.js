import styled from 'styled-components';

import { COLORS } from 'constants/app-styles.constant';

export const Container = styled.div`
  .lazy-image {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    padding-top: ${ props => props.ratio || '100%' };
    opacity: 1;
    transition: opacity 0.1s ease-in-out;
    background-color: ${ COLORS.GRAY1 };
    overflow: hidden;

    &.loading {
      opacity: 0;
    }
  }
`;
