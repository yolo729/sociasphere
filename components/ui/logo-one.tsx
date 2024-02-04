import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo1.png";

export default function LogoOne() {
  return (
    <Link href="/" className="block w-24 md:w-full" aria-label="Cruip">
      <Image className="" src={LogoImg} alt="logo1" />
    </Link>
  );
}
