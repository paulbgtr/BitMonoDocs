import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container, Heading, Text } from "@chakra-ui/react";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Bitmono | 404</title>
        <meta
          name="description"
          content="An open-source, free protector for Mono"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          maxWidth={"3xl"}
          mt={[50, 140]}
        >
          <Heading fontSize={[50, 64]} variant={"title"}>
            404 - Page Not Found
          </Heading>

          <Text fontSize={[18, 20]} mt={[6, 7]}>
            Go back to the <Link href={"/"}>Homepage</Link>
          </Text>
        </Container>
      </main>
    </>
  );
};

export default NotFound;
