// todo: write a more efficient way to do this

import { FC } from "react";
import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import Link from "next/link";

const DocsNavigation: FC = () => {
  return (
    <Box pos={"absolute"}>
      <UnorderedList>
        <ListItem>
          <Link href={"./docs/antiDebugBP"}>AntiDebugBreakPoints</Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>BitDotnet</Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>BitMethodDotnet</Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>CallToCalli</Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>Configuriong Protection(s)</Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>DotNetHook</Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>
            Excluding Having issues with third parties (API Libraries)
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>Excluding Protections</Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>FieldsHiding</Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>FullRenamer</Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>
            No required dependency (Deprecated file for obfuscation)
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>NoNamespacecs</Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>ObjectReturnType</Link>
        </ListItem>
        <ListItem>
          <Link href={"/"}>StringsEncryptions</Link>
        </ListItem>
        <div></div>
      </UnorderedList>
    </Box>
  );
};

export default DocsNavigation;
