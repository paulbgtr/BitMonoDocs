import React from "react";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

const links = {
  about: "/about",
  documentation: "/documentation",
};
interface NavbarLinkProps {
  href: string;
  title: string;
}

const NavbarLink = (props: NavbarLinkProps) => {
  return (
    <Link variant={"navLink"} href={props.href}>
      {props.title}
    </Link>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={"#000"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8}>
          <Link variant={"navLink"} href={"/"}>
            <Box>Bitmono</Box>
          </Link>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavbarLink href={links["about"]} title={"About"} />
            <NavbarLink href={links["documentation"]} title={"Documentation"} />
          </HStack>
        </HStack>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          colorScheme={"black"}
          color={"white"}
        />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} display={"flex"} alignItems={"end"} spacing={4}>
            <NavbarLink href={links["about"]} title={"About"} />
            <NavbarLink href={links["documentation"]} title={"Documentation"} />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
