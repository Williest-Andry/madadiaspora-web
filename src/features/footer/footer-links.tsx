import { LinkData } from "@/constants/footer/type";
import Link from "next/link";

type FooterLinksProps = {
  title: string;
  links: LinkData[];
};

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <article className="flex flex-col items-center gap-[5px] text-justify lg:items-start">
      <h3 className="text-[18px] leading-[100%] font-bold xl:text-[24px]">
        {title}
      </h3>

      <div className="flex flex-col items-center gap-[5px] lg:items-start">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="tracking-0 text-[12px] leading-[150%] opacity-[50%] xl:text-[16px]"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </article>
  );
}
