import Head from "next/head";
import { useRouter } from "next/router";

import {
  Alert,
  AlertIcon,
  Button,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

const DownloadPage = () => {
  const router = useRouter();

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
        <Container maxWidth={"3xl"}>
          <Heading as={"h1"} mb={4} fontSize={[50, 64]}>
            Downloads
          </Heading>

          <VStack>
            <Alert color={"black"} rounded={"md"} status="error">
              <AlertIcon />
              It is important to note that BitMono is still under active
              development and full stability is not guaranteed yet.
            </Alert>
            <Alert color={"black"} rounded={"md"} status="info">
              <AlertIcon />
              At the moment BitMono has been tested only on Windows. However,
              theoretically, the CLI version can also be installed on
              Linux/MacOS.
            </Alert>
          </VStack>

          <Heading as={"h2"} fontSize={[30, 34]} mb={[2, 3]} mt={[3, 4]}>
            Latest Release
          </Heading>

          <Button
            onClick={() =>
              router.replace(
                " https://sourceforge.net/projects/bitmono/files/v0.3.3-alpha.8/"
              )
            }
            variant={"light"}
          >
            Download BitMono
          </Button>

          <Heading mt={5} as={"h2"} fontSize={[30, 34]}>
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
};

export default DownloadPage;
