"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Logo from "./logo";
import CopyIcon from "@/public/svgs/copy.svg";
import BlogIcon from "@/public/svgs/blog.svg";
import NewsLetterIcon from "@/public/svgs/newsletter.svg";
import AnalysisIcon from "@/public/svgs/analysis.svg";
import ContactIcon from "@/public/svgs/contact.svg";
import LogoutIcon from "@/public/svgs/logout.svg";

export default function LeftBar() {
  return (
    <>
      <div className="flex flex-col justify-start items-center px-4 bg-[#F4FAFF] h-screen">
        <Logo />
        <div className="mt-24 w-full">
          <button className="my-3 btn-sm w-full flex justify-start bg-indigo-500">
            <Image src={CopyIcon} alt="copy icon" />
            <span className="ml-2">Social Media Post</span>
          </button>
          <button className="my-3 btn-sm w-full flex justify-start bg-indigo-500">
            <Image src={BlogIcon} alt="blog icon" />
            <span className="ml-2">Blog Creation</span>
          </button>
          <button className="my-3 btn-sm w-full flex justify-start bg-indigo-500">
            <Image src={NewsLetterIcon} alt="newletter icon" />
            <span className="ml-2">Newsletter Creator</span>
          </button>
          <button className="my-3 btn-sm w-full flex justify-start bg-indigo-500">
            <Image src={AnalysisIcon} alt="analysis icon" />
            <span className="ml-2">Data Analysis</span>
          </button>
          <button className="my-3 btn-sm w-full flex justify-start bg-indigo-500">
            <Image src={ContactIcon} alt="contact icon" />
            <span className="ml-2">Contact</span>
          </button>
        </div>

        <button className="my-3 btn-sm w-[18%] bottom-5 flex justify-start bg-indigo-500 absolute">
          <Image src={LogoutIcon} alt="logout icon" />
          <span className="ml-2">Logout</span>
        </button>
      </div>
    </>
  );
}
