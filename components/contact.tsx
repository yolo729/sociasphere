"use client";

import Image from "next/image";
import SendIcon from "@/public/svgs/send.svg";
import PhoneIcon from "@/public/svgs/phone.svg";
import NewsletterIcon from "@/public/svgs/newsletter_active.svg";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  return (
    <section className="relative grid grid-cols-11 gap-8">
      {/* Illustration behind hero content */}

      <div className="mx-auto px-12 md:px-14 col-span-11 md:col-span-7 w-full">
        <p className="text-xl md:text-5xl font-bold my-8 font-poppin">
          Contact
        </p>
        <p className="text-sm font-bold my-8 font-codepro">
          Questions or ideas? We would love to hear from you!
        </p>
        <form>
          <div className="flex flex-col">
            <label className="text-sm font-bold">Name:</label>
            <input
              type="text"
              className="rounded-3xl border-slate-200 border-2 w-3/5 my-8"
              placeholder="Name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-bold">Email:</label>
            <input
              type="email"
              className="rounded-3xl border-slate-200 border-2 w-11/12 my-8"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-bold">Message:</label>
            <textarea
              className="rounded-3xl border-slate-200 border-2 w-full h-64 my-8"
              placeholder="Message here"
            />
          </div>

          <button className="btn-sm bg-indigo-500 rounded-lg text-white flex justify-between items-center">
            Send Message
            <Image src={SendIcon} alt="send icon" className="ml-1" />
          </button>
        </form>
      </div>
      <div className="col-span-11 md:col-span-4 py-12 md:py-32 px-8">
        <div className="bg-indigo-500 mt-4 md:mt-12 py-4 md:py-12 px-8 h-full">
          <div className="flex py-8">
            <Image src={PhoneIcon} alt="phone icon" />
            <p className="text-white text-bold ml-2">123 456 7890</p>
          </div>

          <div className="flex py-8">
            <Image src={NewsletterIcon} alt="newsletter icon" />
            <p className="text-white text-bold ml-2">email@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
