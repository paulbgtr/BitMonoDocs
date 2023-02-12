import { useRouter } from "next/router";
import { FC } from "react";

import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  href: string;
  title: string;
}

const Button: FC<ButtonProps> = (props) => {
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
