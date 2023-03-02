import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black navbar">
      <div className="flex-1">
        <Link href="/" className="text-xl normal-case btn btn-ghost">
          Bitmono
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
