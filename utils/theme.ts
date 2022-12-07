import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#000",
        color: "white",
      },
      a: {
        color: "blue.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  components: {
    Heading: {
      variants: {
        h1: {
          fontWeight: "bold",
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
        },
        h2: {
          fontWeight: "0",
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
        },
      },
    },
    Link: {
      baseStyle: {
        fontWeight: "bold",
        color: "blue.500",
      },
      variants: {
        navLink: {
          color: "white",
          fontWeight: "0",
          _hover: {
            textDecoration: "none",
            opacity: 0.8,
          },
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "bold",
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

export default theme;
