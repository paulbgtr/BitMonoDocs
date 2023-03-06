import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-black navbar">
      <div className="flex-1">
        <Link href="/" className="text-xl normal-case btn btn-ghost">
          Bitmono
        </Link>
      </div>
      <Link
        href="https://github.com/Gibsol/BitMonoDocs"
        className="flex gap-1 text-sm"
      >
        Improve this page on GitHub
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </div>
  );
};

export default Navbar;
