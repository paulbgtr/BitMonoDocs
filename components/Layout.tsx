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
      {router.pathname === "/" || router.pathname === "/404" ? (
        <div>{children}</div>
      ) : (
        <>
          <Navbar />
          <Drawer>
            <div>{children}</div>
          </Drawer>
        </>
      )}
    </>
  );
};

export default Layout;
