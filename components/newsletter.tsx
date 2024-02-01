"use client";

import Image from "next/image";
import PlaceholderImg from "@/public/images/img_placeholder.png";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

export default function Newsletter() {
  const router = useRouter();
  const [text, setText] = useState<string>("No File Choosen");
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file === null) {
      setText("No File Choosen");
    } else {
      setText(file.name);
    }
  };
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      {buttonStatus === false ? (
        <div className="mx-auto px-20 sm:px-24">
          <p className="text-5xl font-bold my-8">Newsletter</p>
          <p className="text-sm font-bold my-8">
            Fill out the form to customize your newsletter.
          </p>
          <form>
            <div className="flex flex-col w-fit ">
              <div className="flex">
                <Image src={PlaceholderImg} alt="placeholder img" />
                <div className="flex flex-col ml-8 justify-around items-start">
                  <label className="italic">
                    Please update an image and description image.
                  </label>
                  <div className="flex justify-center items-center">
                    <input
                      type="file"
                      id="actual-btn"
                      hidden
                      onChange={handleChange}
                    />

                    <label
                      htmlFor="actual-btn"
                      className="btn-sm cursor-pointer"
                    >
                      Choose File
                    </label>
                    <span className="ml-4" id="file-chosen">
                      {text}
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-8">
                <label className="text-sm font-bold">Business Name:</label>
                <input
                  type="text"
                  className="w-full rounded-3xl border-slate-200 border-2 mt-8"
                  placeholder="Description"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-bold">Customer's Name:</label>
              <input
                type="text"
                className="rounded-3xl border-slate-200 border-2 w-3/5 my-8"
                placeholder="Name"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-bold">Customer's Email:</label>
              <input
                type="email"
                className="rounded-3xl border-slate-200 border-2 w-11/12 my-8"
                placeholder="Please place valid email(s) for newsletter delivery, use commas as separator if sending to multiple"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-bold">Newsletter Title:</label>
              <input
                type="text"
                className="rounded-3xl border-slate-200 border-2 w-3/5 my-8"
                placeholder="Title"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-bold">
                Description with Items and Discount or Sales
              </label>
              <input
                type="text"
                className="rounded-3xl border-slate-200 border-2 w-3/5 my-8"
                placeholder="Description"
              />
            </div>

            <div className="flex flex-col w-fit">
              <label className="text-sm font-bold">
                Choose what language to translate to:
              </label>
              <select className="my-8 rounded-3xl border-slate-200 border-2 w-56">
                <option>English</option>
              </select>
            </div>

            <button
              className="btn-sm bg-indigo-500 rounded-lg text-white"
              onClick={() => {
                setButtonStatus(true);
              }}
            >
              Generate Post
            </button>
          </form>
        </div>
      ) : (
        <div className="mx-auto px-20 sm:px-24">
          <p className="text-5xl font-bold my-8">
            Newsletter Succesfully Generated And Sent!
          </p>
          <p className="text-sm font-bold my-8">
            Your AI-driven Newsletter, created by GPT-4 with Vision, has been
            succesfully generated and shared.
          </p>
          <Link href="/" className="underline">
            Back to Home
          </Link>
        </div>
      )}
    </section>
  );
}
