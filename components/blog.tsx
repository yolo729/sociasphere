"use client";

import Image from "next/image";
import PlaceholderImg from "@/public/images/img_placeholder.png";
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <div className="mx-auto px-20 sm:px-24">
        <p className="text-3xl font-bold my-8">Blog Post</p>
        <p className="text-sm font-bold my-8">
          Fill out the form below to generate a post.
        </p>
        <form>
          <div className="flex">
            <Image
              src={PlaceholderImg}
              alt="placeholder img"
              className="h-[100px] w-[100px]"
            />
            <div className="flex flex-col ml-8 justify-around">
              <label className="italic">
                Please update an image and description image(JPG,JPEG only):
              </label>
              <input type="file" className="mt-8" />
              <div className="my-8">
                <input
                  type="text"
                  className="w-full rounded-3xl border-slate-200 border-2"
                  placeholder="Description"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
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

          <button className="btn-sm bg-indigo-500 rounded-lg text-white">
            Generate Post
          </button>
        </form>
      </div>
    </section>
  );
}
