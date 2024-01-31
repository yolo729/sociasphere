export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Header from "@/components/ui/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
