import Head from "next/head";
import {
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Alert,
  AlertIcon,
  Link,
} from "@chakra-ui/react";

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
          <Heading as={"h1"} mb={[2, 3]} fontSize={[50, 64]} variant={"h1"}>
            Downloads
          </Heading>

          <VStack>
            <Alert rounded={"md"} status="error">
              <AlertIcon />
              It is important to note that BitMono is still under active
              development and full stability is not guaranteed yet.
            </Alert>
            <Alert rounded={"md"} status="info">
              <AlertIcon />
              At the moment BitMono has been tested only on Windows. However,
              theoretically, the CLI version can also be installed on
              Linux/MacOS.
            </Alert>
          </VStack>

          <Heading
            as={"h2"}
            fontSize={[30, 34]}
            mb={[2, 3]}
            mt={[3, 4]}
            variant={"h2"}
          >
            Latest Release
          </Heading>

          <Button onClick={() => downloadLink()} variant={"light"}>
            Download BitMono
          </Button>

          <Heading mt={5} as={"h2"} fontSize={[30, 34]} variant={"h2"}>
            Older Downloads
          </Heading>

          <Text mt={5}>
            Previous installers may be found on our{" "}
            <Link href="https://github.com/sunnamed434/BitMono/releases">
              Github
            </Link>
            .
          </Text>
        </Container>
      </main>
    </>
  );
}
