// todo: Convert this into a Markdown file

import Markdown from "../markdown/about.md";
import Head from "next/head";
import { Container } from "@chakra-ui/react";

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
        <Container maxWidth={"3xl"}>
          <Markdown />
        </Container>
      </main>
    </>
  );
};

export default About;
