export const metadata = {
  title: "Main Page",
  description: "Page description",
};

import Social from "@/components/social";
import Blog from "@/components/blog";
import Newsletter from "@/components/newsletter";
import Contact from "@/components/contact";

export default function Main() {
  return (
    <>
      {/* <Social /> */}
      {/* <Blog /> */}
      {/* <Newsletter /> */}
      <Contact />
    </>
  );
}
