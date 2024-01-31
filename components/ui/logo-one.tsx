import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo1.png";

export default function LogoOne() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image className="" src={LogoImg} alt="logo1" />
    </Link>
  );
}
