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
        <Container maxWidth={"3xl"} mt={[50, 140]}>
          <Heading fontSize={[50, 64]} variant={"title"}>
            An open-source, free protector for Mono
          </Heading>

          <Text fontSize={[18, 20]} mt={5}>
            BitMono is an free, open-source C# obfuscator which in mostly cases
            works only with Mono - well known as fork of .NET Framework but with
            custom bugs or Unity.
          </Text>

          <Button mt={5} variant={"dark"}>
            Get Started
          </Button>
        </Container>
      </main>
    </>
  );
}
