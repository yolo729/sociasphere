import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.png";
import { useState, useEffect } from "react";

interface LogoProps {
  align?: "start" | "center" | "end";
}
const Logo: React.FC<LogoProps> = ({ align }) => {
  return (
    <Link
      href="/"
      className={`block w-24 md:w-full ${align ? `flex justify-${align}` : ""}`}
      aria-label="Cruip"
    >
      <Image className="mt-1 md:mt-2 lg:mt-8" src={LogoImg} alt="logo" />
    </Link>
  );
};

export default Logo;
