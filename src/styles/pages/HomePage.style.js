import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  padding: 0 0.5rem;
`;

export const MainWrapper = styled.main`
  flex: 1;
  padding: 5rem 0;

  .title {
    font-size: 4rem;
    line-height: 1.15;

    a {
      color: #0070f3;

      &:hover, &:focus, &:active {
        text-decoration: underline;
      }
    }
  }

  .description {
    font-size: 1.5rem;
    line-height: 1.5;
  }

  .code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    font-size: 1.1rem;
    background-color: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
  }

  .grid {
    max-width: 800px;
    margin-top: 3rem;
  }

  .card {
    flex-basis: 45%;
    text-align: left;
    margin: 1rem;
    padding: 1.5rem;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;

    &:hover, &:focus, &:active {
      color: #0070f3;
      border-color: #0070f3;
    }

    h3 {
      font-size: 1.5rem;
      margin: 0 0 1rem 0;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.5;
      margin: 0;
    }
  }
`;

export const FooterWrapper = styled.footer`
  border-top: 1px solid #eaeaea;

  img {
    margin-left: 0.5rem;
  }

  .logo {
    height: 1em;
  }
`;
