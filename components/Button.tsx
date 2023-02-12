import { useRouter } from "next/router";
import React from "react";

import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  href: string;
  title: string;
}

const Button = (props: ButtonProps) => {
  const router = useRouter();
  return (
    <ChakraButton
      onClick={() => {
        router.push("/download");
      }}
    >
      {props.title}
    </ChakraButton>
  );
};

export default Button;
