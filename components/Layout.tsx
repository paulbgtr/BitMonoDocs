import { useRouter } from "next/router";
import React, { FC } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "./SideBar";

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
          <Sidebar />
        )}
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
