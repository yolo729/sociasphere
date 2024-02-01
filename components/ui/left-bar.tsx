"use client";

import { useState, useEffect } from "react";
import { useStatus } from "@/context/StatusContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "./logo";
import CopyIcon from "@/public/svgs/copy.svg";
import CopyActiveIcon from "@/public/svgs/copy_active.svg";
import BlogIcon from "@/public/svgs/blog.svg";
import BlogActiveIcon from "@/public/svgs/blog_active.svg";
import NewsLetterIcon from "@/public/svgs/newsletter.svg";
import NewsLetterActiveIcon from "@/public/svgs/newsletter_active.svg";
import AnalysisIcon from "@/public/svgs/analysis.svg";
import AnalysisActiveIcon from "@/public/svgs/analysis_active.svg";
import ContactIcon from "@/public/svgs/contact.svg";
import ContactActiveIcon from "@/public/svgs/contact_active.svg";
import LogoutIcon from "@/public/svgs/logout.svg";

export default function LeftBar() {
  const router = useRouter();
  const [status, setStatus] = useStatus();
  console.log("-Status-------------", status);
  const goHome = () => {
    router.push("/");
  };
  // const router = useRouter();
  // const { stringValue } = router.query;
  return (
    <>
      <div className="flex flex-col justify-start items-center px-4 bg-[#F4FAFF] h-screen">
        <Logo />
        <div className="mt-24 w-full">
          {status === 1 ? (
            <button
              className="my-3 btn-sm w-full flex justify-start bg-indigo-500"
              onClick={() => {
                setStatus(1);
              }}
            >
              <Image src={CopyActiveIcon} alt="copy icon" />
              <span className="ml-2 text-white">Social Media Post</span>
            </button>
          ) : (
            <button
              className="my-3 btn-sm w-full flex justify-start bg-indigo-500"
              onClick={() => {
                setStatus(1);
              }}
            >
              <Image src={CopyIcon} alt="copy icon" />
              <span className="ml-2">Social Media Post</span>
            </button>
          )}
          {status === 2 ? (
            <button
              className="my-3 btn-sm w-full flex justify-start bg-indigo-500"
              onClick={() => {
                setStatus(2);
              }}
            >
              <Image src={BlogActiveIcon} alt="blog icon" />
              <span className="ml-2 text-white">Blog Creation</span>
            </button>
          ) : (
            <button
              className="my-3 btn-sm w-full flex justify-start bg-indigo-500"
              onClick={() => {
                setStatus(2);
              }}
            >
              <Image src={BlogIcon} alt="blog icon" />
              <span className="ml-2">Blog Creation</span>
            </button>
          )}

          {status === 3 ? (
            <button
              className="my-3 btn-sm w-full flex justify-start bg-indigo-500"
              onClick={() => {
                setStatus(3);
              }}
            >
              <Image src={NewsLetterActiveIcon} alt="newletter icon" />
              <span className="ml-2 text-white">Newsletter Creator</span>
            </button>
          ) : (
            <button
              className="my-3 btn-sm w-full flex justify-start bg-indigo-500"
              onClick={() => {
                setStatus(3);
              }}
            >
              <Image src={NewsLetterIcon} alt="newletter icon" />
              <span className="ml-2">Newsletter Creator</span>
            </button>
          )}

          {status === 4 ? (
            <button
              className="my-3 btn-sm w-full flex justify-start bg-indigo-500"
              onClick={() => {
                setStatus(4);
              }}
            >
              <Image src={AnalysisActiveIcon} alt="analysis icon" />
              <span className="ml-2 text-white">Data Analysis</span>
            </button>
          ) : (
            <button
              className="my-3 btn-sm w-full flex justify-start bg-indigo-500"
              onClick={() => {
                setStatus(4);
              }}
            >
              <Image src={AnalysisIcon} alt="analysis icon" />
              <span className="ml-2">Data Analysis</span>
            </button>
          )}

          {status === 5 ? (
            <button
              className="my-3 btn-sm w-full flex justify-start bg-indigo-500"
              onClick={() => {
                setStatus(5);
              }}
            >
              <Image src={ContactActiveIcon} alt="contact icon" />
              <span className="ml-2 text-white">Contact</span>
            </button>
          ) : (
            <button
              className="my-3 btn-sm w-full flex justify-start bg-indigo-500"
              onClick={() => {
                setStatus(5);
              }}
            >
              <Image src={ContactIcon} alt="contact icon" />
              <span className="ml-2">Contact</span>
            </button>
          )}
        </div>

        <button
          className="my-3 btn-sm w-[18%] bottom-5 flex justify-start absolute"
          onClick={() => {
            setStatus(1);
            goHome();
          }}
        >
          <Image src={LogoutIcon} alt="logout icon" />
          <span className="ml-2">Logout</span>
        </button>
      </div>
    </>
  );
}
