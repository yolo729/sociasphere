"use client";

import Image from "next/image";
import React, { useState } from "react";
import PlaceholderImg from "@/public/images/img_placeholder.png";
import ImgplaceholderIcon from "@/public/svgs/imageplaceholder.svg";
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();
  const [text, setText] = useState<string>("No File Choosen");
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file === null) {
      setText("No File Choosen");
    } else {
      setText(file.name);
      setSelectedImage(file);
    }
  };
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      {buttonStatus === false ? (
        <div className="mx-auto px-20 sm:px-24">
          <p className="text-5xl font-bold my-8 font-poppin">Blog Post</p>
          <p className="text-sm font-bold my-8">
            Fill out the form below to generate a post.
          </p>
          <form>
            <div className="flex mt-24">
              {selectedImage ? (
                <div className="flex flex-col w-28 h-28">
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Thumb"
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <Image
                  src={PlaceholderImg}
                  alt="placeholder img"
                  className="h-[100px] w-[100px]"
                />
              )}
              <div className="flex flex-col ml-8 justify-around">
                <label className="italic">
                  Please update an image and description image(JPG,JPEG only):
                </label>
                <div className="flex justify-start items-center mt-4">
                  <input
                    type="file"
                    id="actual-btn"
                    hidden
                    accept=".jpg, .jpeg"
                    onChange={handleChange}
                  />

                  <label htmlFor="actual-btn" className="btn-sm cursor-pointer">
                    Choose File
                  </label>
                  <span className="ml-4" id="file-chosen">
                    {text}
                  </span>
                </div>
                <div className="my-8">
                  <input
                    type="text"
                    className="w-full rounded-3xl border-slate-200 border-2"
                    placeholder="Description"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-12">
              <label className="text-sm font-bold">Keywords:</label>
              <input
                type="text"
                className="rounded-3xl border-slate-200 border-2 w-3/5 my-8"
                placeholder="Enter keywords separated by comma"
              />
            </div>

            <div className="flex flex-col w-fit">
              <label className="text-sm font-bold">
                Choose what language to translate to:
              </label>
              <select className="my-8 rounded-3xl border-slate-200 border-2 w-56">
                <option>Language</option>
              </select>
            </div>

            <button
              className="btn-sm bg-indigo-500 rounded-lg text-white mt-8"
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
          <p className="text-5xl font-bold my-8 font-poppin">
            AI-Generated Blog Post
          </p>
          <p className="text-sm font-bold my-8">
            Here is your AI-generated post!
          </p>

          <div className="flex flex-col mt-4">
            <label className="text-sm font-bold">Description:</label>
            <div className="border w-1/2 h-72 mt-8"></div>
          </div>
          <div className="flex flex-col mt-16">
            <label className="text-sm font-bold">Keywords</label>
            <label className="text-sm ">None were provided</label>
            <label className="text-sm ">Image submitted:</label>
            <div className="w-1/2 h-72 mt-8 h-fit">
              <Image src={ImgplaceholderIcon} alt="" className="w-full" />
            </div>
          </div>
          <div className="flex flex-col my-16">
            <label className="text-sm font-bold">AI Generated Post</label>
            <div className="border w-1/2 h-72 mt-8"></div>
          </div>
        </div>
      )}
    </section>
  );
}
