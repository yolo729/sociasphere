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

      <div className="mx-auto px-8 lg:px-24">
        {/* Hero content */}
        <div className="pt-16 md:pt-24 lg:pt-52  md:pt-56 pb-12 md:pb-20">
          {/* Section header */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-14">
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <p className="mt-4 md:mt-8 lg:mt-12 text-3xl md:text-3xl lg:text-7xl font-codepro">
                Your Social Media Sidekick
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <Image src={PentrackImg} alt="pen track" className=" " />
                  <p className="mt-12 font-dmsans">
                    With the power of AI, generate social media captions, posts,
                    blogs, and newsletters in{" "}
                    <span className="font-bold ml-1">seconds</span>.
                  </p>
                  <Link
                    href="/home"
                    className="btn-sm mt-12 text-gray-200 bg-indigo-500 rounded-xl shadow-allshadow shadow-indigo-500/50 hover:bg-indigo-400 w-fit hidden md:flex"
                  >
                    <span>Try Free Trial</span>
                  </Link>
                </div>

                <Image
                  src={GroupImg}
                  alt="group img"
                  className="w-1/2 md:w-64 lg:w-96 h-1/2 md:h-64 lg:h-full"
                />
              </div>
            </div>
            <Link
              href="/home"
              className="flex md:hidden btn-sm mt-12 text-gray-200 bg-indigo-500 rounded-xl shadow-allshadow shadow-indigo-500/50 hover:bg-indigo-400 w-full"
            >
              <span>Try Free Triadddl</span>
            </Link>
            <div className="flex flex-col">
              <div className="flex flex-col mb-4">
                <Image
                  src={NewsIcon}
                  alt="news svg"
                  className="ml-[50%] w-[50px] lg:w-[67px]  h-[50px] lg:h-[67px]"
                />
                <p className="text-xl md:text-2xl lg:text-3xl font-bold">
                  Sentiment Analysis
                </p>
                <p className="text-sm lg:text-base">
                  Discover trends and understand your customers with our
                  <span className="font-bold ml-1">
                    Sentiment Analysis Software.
                  </span>
                </p>
                <Link href="#" className="flex items-center">
                  Learn more
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex flex-col my-4">
                <div className="flex">
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold">
                    AI-Generated Captions
                  </p>
                  <Image
                    src={ArrowIcon}
                    alt="arrow svg"
                    width={105}
                    height={99}
                    className="-mt-14 ml-2 w-[60px] lg:w-[105px] h-[70] lg:h-[98px]"
                  />
                </div>
                <p className="text-sm lg:text-base">
                  Generate relevant, unique captions based off{" "}
                  <span className="font-bold ml-1">your</span> photos.
                </p>
                <Link href="#" className="flex items-center">
                  Learn more
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex flex-col my-4">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold">
                  Blog Posts & Newsletters
                </p>
                <div className="flex">
                  <p className="text-sm lg:text-base">
                    Quickly create blog posts and newsletters with a click by
                    simply providing a photo and description.
                  </p>
                  <Image
                    src={HightlightIcon}
                    alt="highlight svg"
                    className="w-[90px] lg:w-[126px] h-[55px] lg:h-[75px]"
                  />
                </div>
                <Link href="#" className="flex items-center">
                  Learn more
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
