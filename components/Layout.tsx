import React, { FC } from "react";
import { useRouter } from "next/router";
import DocsNavigation from "./DocsNavigation";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/documentation" && <DocsNavigation />}
      <div>{children}</div>
    </>
  );
};

export default Layout;
