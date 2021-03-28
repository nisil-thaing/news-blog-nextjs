import styled from 'styled-components';

export const Container = styled.nav`
  button:not(:disabled) {
    &:active, &:hover, &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;
