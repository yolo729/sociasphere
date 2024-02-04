"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

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
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="mx-auto px-5 sm:px-6">
        <div className="flex flex-row items-center h-16 md:h-20">
          {/* Site branding */}
          <div className="basis-1/2 md:basis-1/3">
            <Logo />
          </div>

          {/* Site Links */}
          <div className="basis-1/3 justify-center  hidden md:inline-flex md:grow ">
            <Link
              href="/product"
              className="px-1 md: px-2 lg:px-4 text-sm md:text-base lg:text-base font-medium"
            >
              Product
            </Link>
            <Link
              href="/pricing"
              className="px-1 md: px-2 lg:px-4 text-sm md:text-base lg:text-base font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="px-1 md: px-2 lg:px-4 text-sm md:text-base lg:text-base font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="basis-1/3 hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="rounded-lg btn-sm text-gray-200 bg-indigo-500 hover:bg-indigo-400 ml-3"
                >
                  <span>Sign Up</span>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
