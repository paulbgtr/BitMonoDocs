import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#000",
        color: "white",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        width: "140px",
        borderRadius: "13px",
        transitionDuration: "0.3s",
        _hover: {
          opacity: 0.8,
        },
      },
      variants: {
        dark: {
          bg: "#000",
          color: "#fff",
          height: "50px",
        },
        light: {
          bg: "#fff",
          color: "#000",
          height: "50px",
        },
      },
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
