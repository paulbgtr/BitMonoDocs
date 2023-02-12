import "../styles/globals.css";

import { AppProps } from "next/app";

import { Box, ChakraProvider } from "@chakra-ui/react";

import chakraTheme from "../styles/chakraTheme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Box mb={10}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default MyApp;
