"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import LeftBar from "@/components/ui/left-bar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <main className="grow grid grid-cols-5">
        <LeftBar />
        <div className="col-span-4">{children}</div>
      </main>
    </>
  );
}
