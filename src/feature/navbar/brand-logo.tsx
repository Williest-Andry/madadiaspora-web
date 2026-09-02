import Link from "next/link";
import Image from "next/image";

export default function BrandLogo() {
  return (
    <Link href={"/"} className="flex h-17.25 w-60 items-center gap-2">
      <div className="relative h-12.25 w-15">
        <Image alt="brand logo" src={"/brand-logo.png"} fill />
      </div>
      <div className="relative h-4.75 w-40">
        <Image alt="brand logo" src={"/brand-text.png"} fill />
      </div>
    </Link>
  );
}
