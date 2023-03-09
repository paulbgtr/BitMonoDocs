import Head from "next/head";
import Link from "next/link";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../components/Button";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Bitmono | Homepage</title>
        <meta
          name="description"
          content="An open-source, free protector for Mono"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main>
        <Hero>
          <p className="md:text-xl">
            Unlock new level of security with{" "}
            <span className="text-xl font-bold md:text-3xl">BitMono</span>.
            Advanced code obfuscation that protects your intellectual property
            like never before.
          </p>
          <div className="flex gap-3 mt-3">
            <Button href="/docs">Get Started</Button>
            <Button href="https://github.com/sunnamed434/BitMono">
              Star on Github
            </Button>
          </div>
        </Hero>
      </main>
    </>
  );
};

export default Home;
