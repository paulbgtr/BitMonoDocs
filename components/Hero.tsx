import React from "react";

type Props = {
  title?: string;
  centered?: boolean;
  children: React.ReactNode;
};

const Hero = ({ title, centered, children }: Props) => {
  return (
    <div className="min-h-screen bg-black hero">
      <div className={`${centered === true && "text-center"} hero-content`}>
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
