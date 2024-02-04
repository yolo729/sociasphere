"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import MobileMenuOne from "./mobile-menu-one";
import Logo from "./logo-one";
import { useRouter } from "next/navigation";
import { useStatus } from "@/context/StatusContext";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  const router = useRouter();
  const [status, setStatus] = useStatus();

  const goMain = (status: number) => {
    setStatus(status);
    router.push("/main");
  };

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-[#001A3D] backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-3 items-center h-16 md:h-20">
          {/* Site branding */}
          <div className="">
            <Logo />
          </div>

          {/* Site Links */}
          <div className="hidden md:flex md:grow inline-flex justify-center">
            <Link href="/" className="px-4 font-medium text-white">
              Home
            </Link>
            <Link href="/feed" className="px-4 font-medium text-white">
              Feed
            </Link>
            <button
              onClick={() => {
                goMain(5);
              }}
              className="px-4 font-medium text-white"
            >
              Contact
            </button>
          </div>
          <MobileMenuOne />
        </div>
      </div>
    </header>
  );
}
