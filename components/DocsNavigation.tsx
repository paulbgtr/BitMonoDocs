// todo: move the links to a json file
// todo: write a more efficient way to list the links
// todo: move About and Docs to a Getting Started page
// todo: animation of closing and opening the sidebar
// todo: add responsive design

import { FC } from "react";
import { Box, UnorderedList, ListItem, Divider } from "@chakra-ui/react";
import Link from "next/link";

const DocsNavigation: FC = () => {
  return (
    <>
      <div className="flex gap-3">
        <Box>
          <UnorderedList>
            <ListItem>
              <Link href={"./documentation/gettingStarted"}>
                Getting Started
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"./documentation/antiDebugBP"}>
                AntiDebugBreakPoints
              </Link>
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
          </UnorderedList>
        </Box>
      </div>
    </>
  );
};

export default DocsNavigation;
