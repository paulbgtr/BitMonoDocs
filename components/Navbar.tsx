import { FC } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const links = {
  about: "/about",
  documentation: "/documentation",
};
interface NavbarLinkProps {
  href: string;
  title: string;
}

const NavbarLink: FC<NavbarLinkProps> = (props) => {
  return (
    <Link variant={"navLink"} href={props.href}>
      {props.title}
    </Link>
  );
};

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={"#000"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          colorScheme={"black"}
          color={"white"}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Link variant={"navLink"} href={"/"}>
            <Box>Bitmono</Box>
          </Link>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavbarLink href={links["about"]} title={"About"} />
            <NavbarLink href={links["documentation"]} title={"Documentation"} />
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <NavbarLink href={links["about"]} title={"About"} />
            <NavbarLink href={links["documentation"]} title={"Documentation"} />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Navbar;
