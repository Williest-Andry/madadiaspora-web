import { ImageType } from "@/interfaces/global";
import { getImageOrFallback } from "@/lib/get-image-url";
import Image from "next/image";

type CustomCarouselItemProps = {
  image: ImageType;
  title: string;
  summary: string;
  country: string;
};

export default function CustomCarouselItem({
  image,
  title,
  summary,
  country,
}: CustomCarouselItemProps) {
  const itemImage = getImageOrFallback(image);

  return (
    <figure className="relative h-72.5 w-64.25 rounded-[27px]">
      <Image
        src={itemImage.image}
        alt={itemImage.alt}
        fill
        className="rounded-[27px] object-cover"
      />

      <article className="font-outfit bg-secondary-foreground/60 absolute top-45 right-2.5 bottom-2.5 left-2.5 flex h-26 w-59 flex-col gap-1 overflow-hidden rounded-[17px] p-3 backdrop-blur-[4px]">
        <div className="flex items-center justify-between">
          <h2 className="line-clamp-2 text-[16px] font-bold uppercase">
            {title}
          </h2>
          <p className="rounded-[5px] border-[0.5px] px-2 py-1.25 text-center text-[10px] font-light">
            {country}
          </p>
        </div>

        <div>
          <p className="line-clamp-2 text-[12px]">{summary}</p>
        </div>
      </article>
    </figure>
  );
}
