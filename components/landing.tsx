"use client";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <div className="mx-auto px-20 sm:px-24">
        {/* Hero content */}
        <div className="flex flex-col justify-center items-center pt-52 pb-12 md:pt-56 md:pb-20">
          {/* Section header */}
          <p className="mt-8 text-7xl font-normal text-white">
            Welcome to Sociasphere
          </p>
          <div className="my-12">
            <p className="text-2xl font-medium text-white">
              Your AI Data Suite home.
            </p>
            <p className="mt-2 text-2xl font-medium text-white">
              What would you like to do?
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <button
              className="text-lg font-bold btn-lg bg-green-400 rounded-[56px] hover:bg-green-300"
              onClick={() => router.push("/main")}
            >
              Create AI Post on Instagram/Facebook
            </button>
            <button className="text-lg font-bold btn-lg bg-green-400 rounded-[56px] hover:bg-green-300">
              Create AI Integrated Blog Post
            </button>
            <button className="text-lg font-bold btn-lg bg-green-400 rounded-[56px] hover:bg-green-300">
              Create AI Integrated Newsletter
            </button>
            <button className="text-lg font-bold btn-lg bg-green-400 rounded-[56px] hover:bg-green-300">
              Data Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
