import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';

import { pixelsToRem } from 'styles/mixins.style';

export const Container = styled.nav`
  button:not(:disabled) {
    &:active, &:hover, &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;

export const RightSideBarWrapper = styled(Dropdown)`
  .dropdown-toggle {
    width: ${ pixelsToRem(42) };

    &:after {
      content: none;
    }
  }
`;
