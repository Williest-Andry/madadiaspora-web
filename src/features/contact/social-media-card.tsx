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
      <p className="text-p-sm sm:text-p-md 3xl:text-title-sm leading-[100%]">
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
