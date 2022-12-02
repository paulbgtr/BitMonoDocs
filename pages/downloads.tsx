import Head from "next/head";
import { Container, Heading, Text, Button } from "@chakra-ui/react";

const downloadLink = () => {
  window.location.href =
    " https://sourceforge.net/projects/bitmono/files/v0.3.3-alpha.8/";
};

export default function DownloadPage() {
  return (
    <>
      <Head>
        <title>Bitmono | Download</title>
        <meta
          name="description"
          content="An open-source, free protector for Mono"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container maxWidth={"3xl"} mt={[50, 140]}>
          <Heading as={"h1"} fontSize={[50, 64]} variant={"h1"}>
            Downloads
          </Heading>

          <Heading as={"h2"} fontSize={[30, 34]} variant={"h2"}>
            Latest Release
          </Heading>

          <Button onClick={() => downloadLink()} mt={[6, 7]} variant={"light"}>
            Download BitMono
          </Button>

          <Heading mt={5} as={"h2"} fontSize={[30, 34]} variant={"h2"}>
            Older Downloads
          </Heading>

          <Text mt={5}>
            Previous installers for may be found on our{" "}
            <a href="https://github.com/sunnamed434/BitMono/releases">Github</a>
            .
          </Text>
        </Container>
      </main>
    </>
  );
}
