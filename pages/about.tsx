import Head from "next/head";

import { Container } from "@chakra-ui/react";

import Layout from "../components/Layout";
import Markdown from "../markdown/about.md";

const About = () => {
  return (
    <>
      <Head>
        <title>Bitmono | About</title>
        <meta
          name="description"
          content="An open-source, free protector for Mono"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <Container maxWidth={"3xl"}>
            <Markdown />
          </Container>
        </Layout>
      </main>
    </>
  );
};

export default About;
