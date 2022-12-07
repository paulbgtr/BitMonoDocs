import Head from "next/head";
import { Center, Text, Link } from "@chakra-ui/react";

const Documentation = () => {
  return (
    <>
      <Head>
        <title>Bitmono | Documentation</title>
        <meta
          name="description"
          content="An open-source, free protector for Mono"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <Text>
          The documentation is currently being written. Please check back later.{" "}
          <br />
          You can help by contributing to the{" "}
          <Link href="https://github.com/gibsol/bitmonodocs">
            GitHub repository
          </Link>
        </Text>
      </Center>
    </>
  );
};

export default Documentation;
