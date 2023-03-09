import Link from "next/link";
import React from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Protections from "./Protections";

type Props = {
  children: React.ReactNode;
};

const Drawer = ({ children }: Props) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="self-start btn btn-ghost drawer-button lg:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </label>
        {children}
      </div>
      <div className=" drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="p-4 bg-black menu w-80 text-base-content">
          <li>
            <Link href="/docs">Getting Started</Link>
          </li>
          <Protections />
          <label>Configuration</label>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
