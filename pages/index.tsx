import Head from "next/head";
import { Container, Heading, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bitmono</title>
        <meta
          name="description"
          content="An open-source, free protector for Mono"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>An open-source, free protector for Mono</Heading>

        <Text>
          BitMono is an free open-source C# obfuscator which in mostly cases
          works only with Mono - well known as fork of .NET Framework but with
          custom bugs or Unity.
        </Text>

        <Button>Get Started</Button>
      </main>
    </>
  );
}
