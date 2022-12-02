import { useRouter } from "next/router";
import Head from "next/head";
import { Container, Heading, Text, Button } from "@chakra-ui/react";

export default function Home() {
  const router = useRouter();
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

          <Text fontSize={[18, 20]} mt={[6, 7]}>
            Bit Mono is a free, open-source C# obfuscator that in most cases
            works only with Mono - well known as a fork of .NET Framework but
            with custom bugs or Unity.
          </Text>

          {/* <Button
            onClick={() => {
              router.push("/download");
            }}
            mt={[6, 7]}
            variant={"light"}
          >
            Get Started
          </Button> */}
        </Container>
      </main>
    </>
  );
}
