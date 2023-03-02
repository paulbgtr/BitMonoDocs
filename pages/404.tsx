import Head from "next/head";
import Link from "next/link";

import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Bitmono | Not Found</title>
        <meta
          name="description"
          content="An open-source, free protector for Mono"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main>
        <Hero centered title="404 Not Found">
          <Link href="/" className="link">
            Go Home
          </Link>
        </Hero>
      </main>
    </>
  );
};

export default Home;
