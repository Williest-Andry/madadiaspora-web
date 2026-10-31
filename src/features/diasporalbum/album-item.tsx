import Image from "next/image";

type CustomCarouselItemProps = {
  // image: Album;
  image?: string;
};

export default function CarouselAlbumItem({
  image = "mock",
}: CustomCarouselItemProps) {
  return (
    <figure className="relative h-[512.5px] w-[350px] rounded-[27px]">
      <Image
        // src={getAlbumFallback(image).image}
        // alt={getAlbumFallback(image).alt}
        src={image}
        alt={image}
        fill
        className="rounded-[27px] object-cover"
      />
    </figure>
  );
}
