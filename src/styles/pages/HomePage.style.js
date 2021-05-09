import styled from 'styled-components';

import { COLORS } from 'constants/app-styles.constant';
import { medias } from 'styles/mixins.style';

export const Container = styled.main`
  padding: 5rem 0;

  .featured-content-wrapper {
    background-color: ${ COLORS.GRAY91 };
  }

  ${medias.MEDIUM_SCREEN`
    .featured-content-wrapper {
      background-color: transparent;
    }
  `}
`;
