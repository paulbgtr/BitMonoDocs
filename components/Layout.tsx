import React, { FC } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import DocsNavigation from "./DocsNavigation";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children, className }) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-3">
        {router.pathname !== "/" && router.pathname !== "/downloads" && (
          <DocsNavigation />
        )}
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
