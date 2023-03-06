import { useRouter } from "next/router";
import React from "react";

import Drawer from "./Drawer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Drawer>
        <div className="px-10">{children}</div>
      </Drawer>
    </>
  );
};

export default Layout;
