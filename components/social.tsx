"use client";

import Image from "next/image";
import React, { useState } from "react";
import PlaceholderImg from "@/public/images/img_placeholder.png";
import { useRouter } from "next/navigation";

export default function Social() {
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
          <p className="text-5xl font-bold my-8">Social Media Post</p>
          <p className="text-sm font-bold my-8">Great! Let's create a post.</p>
          <form>
            <div className="flex flex-col w-fit">
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
                <input
                  type="text"
                  className="w-full rounded-3xl border-slate-200 border-2"
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="flex flex-col w-fit">
              <label className="text-sm font-bold">
                Now select Objectives for post:
              </label>
              <select className="my-8 rounded-3xl border-slate-200 border-2 w-56">
                <option>General</option>
              </select>
            </div>

            <div className="flex flex-col w-fit">
              <label className="text-sm font-bold">
                Next, choose which region you are targeting:
              </label>
              <select className="my-8 rounded-3xl border-slate-200 border-2 w-56">
                <option>Global</option>
              </select>
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
              Upload Post
            </button>
          </form>
        </div>
      ) : (
        <div className="mx-auto px-20 sm:px-24">
          <p className="text-5xl font-bold my-8">AI Image Analysis Results</p>
          <p className="text-sm font-bold my-8">
            Here's your AI-generated captions!
          </p>
          <div className="flex flex-col mt-4">
            <label className="text-sm font-bold">Description:</label>
            <div className="border w-1/2 h-72 mt-8"></div>
          </div>
          <div className="flex flex-col mt-16">
            <label className="text-sm font-bold">
              AI-Generated Caption using GPT-4 Vision
            </label>
            <div className="border w-1/2 h-72 mt-8"></div>
            <div className="border w-1/2 h-72 mt-8"></div>
          </div>

          <div className="my-12 w-full flex justify-around">
            <button
              className="btn-sm bg-indigo-500 rounded-lg text-white py-4"
              onClick={() => {
                setButtonStatus(false);
              }}
            >
              Upload Another Image
            </button>
            <button
              className="btn-sm bg-indigo-500 rounded-lg text-white py-4"
              onClick={() => {
                setButtonStatus(false);
              }}
            >
              Post to Instagram
            </button>

            <button
              className="btn-sm bg-indigo-500 rounded-lg text-white py-4"
              onClick={() => {
                setButtonStatus(false);
              }}
            >
              Discard
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
