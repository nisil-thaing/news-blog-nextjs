import styled from 'styled-components';
import Slider from 'react-slick';

import { pixelsToRem } from 'styles/mixins.style';

export const Container = styled(Slider)`
  .slick-slide {
    max-width: calc(100vmin - ${ pixelsToRem(32) });
    padding: 0 ${ pixelsToRem(8) };
  }
`;

export const CardItemWrapper = styled.section``;
