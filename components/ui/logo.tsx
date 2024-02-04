import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="block w-12 md:w-18 lg:w-full" aria-label="Cruip">
      <Image className="mt-1 md:mt-2 lg:mt-8" src={LogoImg} alt="logo" />
    </Link>
  );
}
