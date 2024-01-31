"use client";

import Image from "next/image";
import PlaceholderImg from "@/public/images/img_placeholder.png";
import { useRouter } from "next/navigation";

export default function Social() {
  const router = useRouter();
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <div className="mx-auto px-20 sm:px-24">
        <p className="text-3xl font-bold my-8">Social Media Post</p>
        <p className="text-sm font-bold my-8">Great! Let's create a post.</p>
        <form>
          <div className="flex flex-col w-fit">
            <div className="flex">
              <Image src={PlaceholderImg} alt="placeholder img" />
              <div className="flex flex-col ml-8 justify-around items-center">
                <label className="italic">
                  Please update an image and description image.
                </label>
                <input type="file" />
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

          <button className="btn-sm bg-indigo-500 rounded-lg text-white">
            Upload Post
          </button>
        </form>
      </div>
    </section>
  );
}
