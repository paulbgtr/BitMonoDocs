import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

const Button = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="text-black bg-white hover:bg-white hover:opacity-50 btn"
    >
      {children}
    </Link>
  );
};

export default Button;
