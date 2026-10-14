import Link from "next/link";
import { SIDE_APP_BAR_LINK_DATA } from "@/constant/rubric-side-app-bar/data";
import Image from "next/image";

export default function LinkMenu() {
  return (
    <div className="flex flex-col gap-[20px]">
      {SIDE_APP_BAR_LINK_DATA.map((link, index) => (
        <Link
          href={link.link}
          className="hover:bg-accent flex items-center gap-[10px]"
          key={index}
        >
          <div className="relative h-[24px] w-[24px]">
            <Image src={link.icon} alt={link.alt} fill />
          </div>

          <p className="text-rubric-text-md font-[400]">{link.label}</p>
        </Link>
      ))}
    </div>
  );
}
