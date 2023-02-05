// todo: write a more efficient way to do this
// todo: a functionality for closing the sidebar when clicking on a button
// todo: animation of closing and opening the sidebar

import { FC } from "react";
import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import Link from "next/link";

const CloseButton: FC = () => {
  return (
    <Box className="bg-black cursor-pointer h-8" onClick={() => {}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Box>
  );
};

const DocsNavigation: FC = () => {
  return (
    <div className="flex bg-white">
      <Box>
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
      <CloseButton />
    </div>
  );
};

export default DocsNavigation;
