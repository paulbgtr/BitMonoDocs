import Head from "next/head";
import Link from "next/link";

import Markdown from "../../markdown/about.md";

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

        <h2 className="mt-3">Installation</h2>
        <p>
          You can install the latest version of BitMono{" "}
          <Link
            className="link"
            href="https://github.com/sunnamed434/BitMono/releases"
          >
            Here
          </Link>
          .
        </p>
      </main>
    </>
  );
};

export default Home;
