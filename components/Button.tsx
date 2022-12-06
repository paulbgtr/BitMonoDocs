import { useRouter } from "next/router";
import { Button as ChakraButton } from "@chakra-ui/react";
import { FC } from "react";

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
