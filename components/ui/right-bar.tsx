"use client";

import Social from "@/components/social";
import Blog from "@/components/blog";
import Newsletter from "@/components/newsletter";
import Contact from "@/components/contact";
import Analysis from "@/components/analysis";
import { useStatus } from "@/context/StatusContext";

export default function RightBar() {
  const [status] = useStatus();
  console.log("----test status----------", status);
  if (status === 1) {
    return <Social />;
  } else if (status === 2) {
    return <Blog />;
  } else if (status === 3) {
    return <Newsletter />;
  } else if (status === 4) {
    return <Contact />;
  } else if (status === 5) {
    return <Analysis />;
  }
}
