import Image from "next/image";
import Link from "next/link";
import PentrackImg from "@/public/images/pentrack.png";
import GroupImg from "@/public/images/group.png";

import NewsIcon from "@/public/svgs/news.svg";
import ArrowIcon from "@/public/svgs/arrow.svg";
import HightlightIcon from "@/public/svgs/highlight.svg";

export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <div className="mx-auto px-20 sm:px-24">
        {/* Hero content */}
        <div className="pt-52 pb-12 md:pt-56 md:pb-20">
          {/* Section header */}
          <div className="grid grid-cols-3 gap-14">
            <div className="col-span-2">
              <p className="mt-12 text-7xl font-normal">
                Your Social Media Sidekick
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <Image src={PentrackImg} alt="pen track" />
                  <p className="mt-12">
                    With the power of AI, generate social media captions, posts,
                    blogs, and newsletters in{" "}
                    <span className="font-bold ml-1">seconds</span>.
                  </p>
                  <Link
                    href="/home"
                    className="btn-sm mt-12 text-gray-200 bg-indigo-500 rounded-xl shadow-allshadow shadow-indigo-500/50 hover:bg-indigo-400 w-fit  "
                  >
                    <span>Try Free Trial</span>
                  </Link>
                </div>
                <Image src={GroupImg} alt="group img" className="" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col mb-4">
                <Image
                  src={NewsIcon}
                  alt="news svg"
                  width={67}
                  height={67}
                  className="ml-[50%]"
                />
                <p className="text-3xl">Sentiment Analysis</p>
                <p className="text-base">
                  Discover trends and understand your customers with our
                  <span className="font-bold ml-1">
                    Sentiment Analysis Software.
                  </span>
                </p>
                <Link href="#">Learn more</Link>
              </div>
              <div className="flex flex-col my-4">
                <div className="flex">
                  <p className="text-3xl">AI-Generated Captions</p>
                  <Image
                    src={ArrowIcon}
                    alt="arrow svg"
                    width={105}
                    height={99}
                    className="-mt-16"
                  />
                </div>
                <p className="text-base">
                  Generate relevant, unique captions based off{" "}
                  <span className="font-bold ml-1">your</span> photos.
                </p>
                <Link href="#">Learn more</Link>
              </div>
              <div className="flex flex-col my-4">
                <p className="text-3xl">Blog Posts & Newsletters</p>
                <div className="flex">
                  <p className="text-base">
                    Quickly create blog posts and newsletters with a click by
                    simply providing a photo and description.
                  </p>
                  <Image
                    src={HightlightIcon}
                    alt="highlight svg"
                    width={126}
                    height={75}
                  />
                </div>
                <Link href="#">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
