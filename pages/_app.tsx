import "../styles/globals.css";
import { AppProps } from "next/app";
import chakraTheme from "../styles/chakraTheme";
import { ChakraProvider, Box } from "@chakra-ui/react";

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
