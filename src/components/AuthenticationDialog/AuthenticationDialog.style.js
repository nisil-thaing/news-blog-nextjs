import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

import { medias, pixelsToRem } from 'styles/mixins.style';

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

  ${medias.SMALL_SCREEN`
    .modal-dialog {
      margin: auto;
    }

    .modal-content {
      max-height: ${ pixelsToRem(640) };
    }
  `};
`;
