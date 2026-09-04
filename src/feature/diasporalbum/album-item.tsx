import Image from "next/image";

type CustomCarouselItemProps = {
  image: string;
};

export default function CarouselAlbumItem({ image }: CustomCarouselItemProps) {
  return (
    <figure className="relative h-[512.5px] w-[350px] rounded-[27px]">
      <Image
        src={image}
        alt={image}
        fill
        className="rounded-[27px] object-cover"
      />
    </figure>
  );
}
