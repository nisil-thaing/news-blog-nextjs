import Head from 'next/head';

import {
  Container,
  MainWrapper,
  FooterWrapper
} from 'styles/pages/HomePage.style';

function HomePage () {
  return <Container>
    <Head>
      <title>News Blog NextJs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainWrapper>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/index.js</code>
      </p>

      <div className="grid">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className="card">
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="card">
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </MainWrapper>

    <FooterWrapper>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer">
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      </a>
    </FooterWrapper>
  </Container>;
}

export default HomePage;