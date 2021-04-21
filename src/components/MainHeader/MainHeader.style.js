import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';

import { medias, pixelsToRem } from 'styles/mixins.style';

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

  .user-info {
    .avatar {
      width: ${ pixelsToRem(60) };
    }

    .email {
      font-size: ${ pixelsToRem(12) };
      line-height: 120%;
    }
  }

  ${medias.EXTRA_SMALL_SCREEN`
    .dropdown-menu {
      width: 75%;
    }
  `}

  ${medias.SMALL_SCREEN_ONLY`
    .dropdown-menu {
      width: 50%;
    }
  `}

  ${medias.SMALL_SCREEN_DOWN`
    .dropdown-menu {
      position: fixed !important;
      top: 0 !important;
      left: unset !important;
      right: 0 !important;
      height: 100%;
      border: none;
      border-radius: 0;
      transform: none !important;
      transition: all 0.3s ease 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
      box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
      z-index: 1000;

      .backdrop {
        position: absolute;
        top: 0;
        right: 100%;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .5);
        z-index: 1;
      }
    }
    
    .dropdown-inner {
      max-height: 100%;
      overflow-y: auto;
    }
  `}
`;
