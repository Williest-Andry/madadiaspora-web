import Image from "next/image";
import Link from "next/link";

type SocialMediaData = {
  image: string;
  link: string;
};

type SocialMediaCardProps = {
  socialMediaImages: SocialMediaData[];
};

export default function SocialMediaCard({
  socialMediaImages,
}: SocialMediaCardProps) {
  return (
    <figure className="flex flex-col-reverse items-center gap-[32px] sm:flex-row">
      <p className="text-[18px] leading-[100%] min-[106.25rem]:text-[24px]">
        {"Suivez-nous"}
      </p>

      <figure className="flex gap-[20px]">
        {socialMediaImages.map((social, index) => (
          <Link
            href={social.link}
            key={index}
            className="relative h-[64px] w-[64px]"
          >
            <Image src={social.image} alt={social.image} fill />
          </Link>
        ))}
      </figure>
    </figure>
  );
}
