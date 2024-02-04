"use client";
import { useRouter } from "next/navigation";
import { useStatus } from "@/context/StatusContext";

export default function Landing() {
  const router = useRouter();
  const [status, setStatus] = useStatus();

  const goMain = (status: number) => {
    setStatus(status);
    router.push("/main");
  };
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <div className="mx-auto px-12 md:px-20 sm:px-24">
        {/* Hero content */}
        <div className="flex flex-col justify-center items-center pt-36 md:pt-52 pb-12 md:pt-56 md:pb-20">
          {/* Section header */}
          <p className="mt-8 text-4xl md:text-7xl font-codepro text-white text-center">
            Welcome to Sociasphere
          </p>
          <div className="my-12">
            <p className="text-xl md:text-2xl font-medium text-white text-center">
              Your AI Data Suite home.
            </p>
            <p className="mt-2 text-xl md:text-2xl font-medium text-white text-center">
              What would you like to do?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <button
              className="text-base md:text-lg font-bold btn-lg bg-green-400 rounded-[56px] hover:bg-green-300"
              onClick={() => {
                goMain(1);
              }}
            >
              Create AI Post on Instagram/Facebook
            </button>
            <button
              className="text-base md:text-lg font-bold btn-lg bg-green-400 rounded-[56px] hover:bg-green-300"
              onClick={() => {
                goMain(2);
              }}
            >
              Create AI Integrated Blog Post
            </button>
            <button
              className="text-base md:text-lg font-bold btn-lg bg-green-400 rounded-[56px] hover:bg-green-300"
              onClick={() => {
                goMain(3);
              }}
            >
              Create AI Integrated Newsletter
            </button>
            <button
              className="text-base md:text-lg font-bold btn-lg bg-green-400 rounded-[56px] hover:bg-green-300"
              onClick={() => {
                goMain(4);
              }}
            >
              Data Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
