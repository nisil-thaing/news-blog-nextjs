import styled from 'styled-components';

import { COLORS } from 'constants/app-styles.constant';

export const Container = styled.div`
  position: relative;

  .lazy-image {
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    padding-top: ${ props => props.ratio };
    z-index: 2;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    overflow: hidden;

    &.loading {
      opacity: 0;
    }
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: ${ COLORS.GRAY1 };
    overflow: hidden;
  }
`;
