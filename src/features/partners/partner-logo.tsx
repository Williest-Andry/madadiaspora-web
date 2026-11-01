import { Partner } from "@/interfaces/partners/partners-types";
import { getImageOrFallback } from "@/lib/get-image-url";
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
  const partnerImage = getImageOrFallback(partner.logo);

  return (
    <Link
      target={href ? "_blank" : "_self"}
      href={href ?? "#"}
      draggable={false}
      className={cn(
        "bg-primary-foreground flex h-[250px] w-[300px] items-center justify-center rounded-[38px] border-[3px] select-none lg:h-[300px] lg:w-[400px]",
        className
      )}
    >
      <figure className="relative h-[70%] w-[70%]">
        <Image
          src={partnerImage.image}
          alt={partnerImage.alt}
          fill
          sizes="(min-width: 1024px) 240px, 180px"
          loading="eager"
          draggable={false}
          className="object-contain"
        />
      </figure>
    </Link>
  );
}
