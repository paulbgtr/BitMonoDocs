import { useRouter } from "next/router";
import Head from "next/head";
import { Container, Heading, Text, Button } from "@chakra-ui/react";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Bitmono | Homepage</title>
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
            Free open-source protector for Mono, empty decompilers? bits?
            crashes?! All this and even more is right here!
          </Text>

          <Button
            onClick={() => {
              router.push("/downloads");
            }}
            mt={[6, 7]}
            variant={"light"}
          >
            Get Started
          </Button>
          <Button
            onClick={() => {
              router.replace("https://github.com/sunnamed434/BitMono");
            }}
            style={{ border: "2px solid #fff" }}
            ms={[3, 4]}
            mt={[6, 7]}
            variant={"dark"}
          >
            Star on GitHub
          </Button>
        </Container>
      </main>
    </>
  );
};

export default Home;
