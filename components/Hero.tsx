import React from "react";

type Props = {
  children: React.ReactNode;
};

const Hero = ({ children }: Props) => {
  return (
    <div className="min-h-screen hero">
      <div className="hero-content">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default Hero;
