import React, { FC } from "react";
import { useRouter } from "next/router";
import DocsNavigation from "./DocsNavigation";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children, className }) => {
  const router = useRouter();

  return (
    <div
      className={`grid ${className} ${router.pathname == "/documentation" &&
        "grid-cols-3"}`}
    >
      {router.pathname === "/documentation" && <DocsNavigation />}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
