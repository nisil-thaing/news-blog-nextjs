import styled from 'styled-components';

import {
  medias,
  pixelsToRem,
  textMultiLinesTruncate
} from 'styles/mixins.style';

export const Container = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ArticleCardWrapper = styled.article`
  .left-content {}

  .tags-wrapper {
    font-size: ${ pixelsToRem(12) };
    line-height: 140%;
    list-style: none;
    padding: 0;
    max-height: ${ pixelsToRem(18) };
    overflow-y: hidden;
  }

  .title {
    h4 {
      font-size: ${ pixelsToRem(16) };
      line-height: 120%;
      ${ textMultiLinesTruncate(2) };
    }
  }

  ${medias.MEDIUM_SCREEN`
    .title {
      h4 {
        font-size: ${ pixelsToRem(20) };
      }
    }
  `}
`;

export const ArticleCardPlaceholderWrapper = styled(ArticleCardWrapper)``;
