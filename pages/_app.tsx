import { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import theme from "../utils/theme";
import { ChakraProvider, Box } from "@chakra-ui/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box mb={10}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
