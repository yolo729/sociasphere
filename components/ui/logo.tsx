import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image className="mt-8" src={LogoImg} alt="logo" />
    </Link>
  );
}
