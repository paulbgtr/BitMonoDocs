// todo: Convert this into a Markdown file

import Head from "next/head";
import {
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

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
          <Heading as={"h1"} mb={4} fontSize={[50, 64]} variant={"h1"}>
            About
          </Heading>

          <Heading
            as={"h2"}
            fontSize={[30, 34]}
            mb={[2, 3]}
            mt={[3, 4]}
            variant={"h2"}
          >
            What is BitMono?
          </Heading>

          <Text fontSize={[18, 20]} mb={[2, 3]} variant={"p"}>
            Bit Mono is a free open-source C# obfuscator that in most cases
            works only with Mono - well known as a fork of .NET Framework but
            with custom bugs or Unity. Which uses its own fork of dnlib for
            assembly manipulation. If you have any questions/issues please let
            me know there. You can install latest version of Bit Mono here.
          </Text>

          <Heading
            as={"h2"}
            fontSize={[30, 34]}
            mb={[2, 3]}
            mt={[3, 4]}
            variant={"h2"}
          >
            How your app will look since BitMono obfuscation - just in a few
            words
          </Heading>

          <UnorderedList fontSize={[18, 20]} mb={[2, 3]}>
            <ListItem>
              Seems to C++ application but this is an actual C# application
            </ListItem>
            <ListItem>Crash of decompilers when analyzing types</ListItem>
            <ListItem>Broken decompilers</ListItem>
            <ListItem>Broken IL Code</ListItem>
            <ListItem>Invisible types</ListItem>
            <ListItem>No code</ListItem>
          </UnorderedList>

          <Heading
            as={"h2"}
            fontSize={[30, 34]}
            mb={[2, 3]}
            mt={[3, 4]}
            variant={"h2"}
          >
            Obfuscation Features
          </Heading>

          <UnorderedList fontSize={[18, 20]} mb={[2, 3]}>
            <ListItem>StringsEncryption</ListItem>
            <ListItem>
              <Link
                color={"blue.500"}
                href="https://github.com/0x59R11/BitDotNet"
              >
                BitDotNet
              </Link>{" "}
              (based and improved on existing protection)
            </ListItem>
            <ListItem>
              <Link
                color={"blue.500"}
                href="https://github.com/sunnamed434/BitMethodDotnet"
              >
                BitMethodDotnet
              </Link>{" "}
              (based and improved on existing protection)
            </ListItem>
            <ListItem>
              <Link
                color={"blue.500"}
                href="https://github.com/Elliesaur/DotNetHook"
              >
                DotNetHook
              </Link>{" "}
              (based and improved on existing protection)
            </ListItem>
            <ListItem>Call to calli</ListItem>
            <ListItem>FieldsHiding (Deprecated)</ListItem>
            <ListItem>ObjecctReturnType</ListItem>
            <ListItem>NoNamespaces</ListItem>
            <ListItem>FullRenamer</ListItem>
            <ListItem>AntiDebugBreakpoints</ListItem>
          </UnorderedList>
        </Container>
      </main>
    </>
  );
};

export default About;
