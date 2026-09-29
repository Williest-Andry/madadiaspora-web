import { Partner } from "@/interfaces/partners/partners-types";
import { getImageUrl } from "@/lib/get-image-url";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type PartnerLogoProps = {
  href: string;
  partner: Partner;
  className?: string;
};

export default function PartnerLogo({
  href,
  partner,
  className,
}: PartnerLogoProps) {
  return (
    <Link
      target={href ? "_blank" : "_self"}
      href={href ?? "#"}
      className={cn(
        "bg-primary-foreground flex h-[250px] w-[300px] items-center justify-center rounded-[38px] border-[3px] lg:h-[300px] lg:w-[400px]",
        className
      )}
    >
      <figure className="relative h-[60%] w-[60%] object-cover">
        <Image
          // src={getImageUrl(partner.logo.url)}
          src={partner.logo.url}
          alt={partner.logo.name}
          fill
        />
      </figure>
    </Link>
  );
}
