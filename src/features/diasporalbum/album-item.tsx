import { Album } from "@/interfaces/album/album-types";
import { getImageOrFallback } from "@/lib/get-image-url";
import Image from "next/image";

type CustomCarouselItemProps = {
  image: Album;
};

export default function CarouselAlbumItem({ image }: CustomCarouselItemProps) {
  const album = getImageOrFallback(image.cover);

  return (
    <figure className="relative h-[512.5px] w-[350px] rounded-[27px]">
      <Image
        src={album.image}
        alt={album.alt}
        fill
        className="rounded-[27px] object-cover"
      />
    </figure>
  );
}
