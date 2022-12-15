import { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import chakraTheme from "../utils/chakraTheme";
import { ChakraProvider, Box } from "@chakra-ui/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Navbar />
      <Box mb={10}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default MyApp;
