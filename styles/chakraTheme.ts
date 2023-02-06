import { extendTheme } from "@chakra-ui/react";

const chakraTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#000",
        color: "white",
      },
      h1: {
        fontSize: "50px",
        fontWeight: "bold",
        letterSpacing: "-0.02em",
      },
      h2: {
        fontSize: "30px",
        fontWeight: "bold",
        marginBottom: "0.5rem",
        marginTop: "0.5rem",
        letterSpacing: "-0.02em",
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

export default chakraTheme;
