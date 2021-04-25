import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

import { medias, pixelsToRem, spinner } from 'styles/mixins.style';

export const Container = styled(Modal)`
  .modal-dialog {
    margin: 0;
  }

  .modal-content {
    border: none;
    border-radius: 0;
  }

  .modal-dialog, .modal-content {
    height: 100%;
  }

  .modal-header {
    i {
      &:before {
        display: inherit;
      }
    }
  }

  .modal-body {
    max-height: 100%;
    overflow-y: auto;
  }

  ${medias.SMALL_SCREEN`
    .modal-dialog {
      margin: auto;
    }

    .modal-content {
      max-height: ${ pixelsToRem(640) };
    }
  `};
`;

export const LoadingWrapper = styled.div`
  i {
    font-size: ${ pixelsToRem(72) };
    width: 1em;
    animation: ${ spinner } infinite 2s linear;

    &:before {
      display: inherit;
    }
  }
`;
