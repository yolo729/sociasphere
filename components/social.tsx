"use client";
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
          <div>
            <input type="file" />
          </div>
          <div>
            <label>Now select Objectives for post:</label>
          </div>
        </form>
      </div>
    </section>
  );
}
