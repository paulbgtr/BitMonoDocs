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
        <Hero>
          <div className="text-center">
            <h1 className="text-5xl font-bold">404</h1>
            <p className="py-6">
              The page that you are looking for does not exist.
            </p>
            <Link href="/docs" className="link">
              Go Home
            </Link>
          </div>
        </Hero>
      </main>
    </>
  );
};

export default Home;
