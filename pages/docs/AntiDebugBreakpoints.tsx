import Head from "next/head";

import Markdown from "../../markdown/AntiDebugBreakpoints.md";

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="An open-source, free protector for Mono"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main>
        <Markdown />
      </main>
    </>
  );
};

export default Home;
