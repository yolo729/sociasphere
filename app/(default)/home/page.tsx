export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Landing from "@/components/landing";
import Header from "@/components/ui/header-one";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
    </>
  );
}
