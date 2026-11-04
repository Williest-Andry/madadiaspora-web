import { Album } from "@/interfaces/album/album-types";
import { getImageOrFallback } from "@/lib/get-image-url";
import { Images, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type AlbumCardProps = {
  data: Album;
};

export default function AlbumCard({ data }: AlbumCardProps) {
  const { id, cover, address, images, info } = data;

  const albumImage = getImageOrFallback(cover);

  return (
    <Link
      href={`/diasporalbum/${id}`}
      className="relative h-[700px] w-[95%] rounded-4xl transition duration-250 hover:scale-103 sm:h-[900px]"
    >
      <Image
        src={albumImage.image}
        alt={albumImage.alt}
        fill
        className="rounded-4xl object-cover"
      />

      <div className="bg-foreground absolute top-[24px] left-[24px] flex h-[34px] items-center gap-[8px] rounded-[17px] p-[10px]">
        <MapPin color="var(--secondary)" />
        <p className="text-p-xs font-sans font-semibold">{address.country}</p>
      </div>

      <div className="bg-foreground xs:top-[24px] max-xs:left-[24px] xs:right-[24px] absolute top-[74px] flex h-[34px] items-center gap-[8px] rounded-[17px] p-[10px]">
        <Images color="var(--secondary)" />
        <p className="text-p-xs font-sans font-semibold">
          {`${images.length} photo(s)`}
        </p>
      </div>

      <div className="bg-popover/40 absolute bottom-0 flex h-[15%] w-full items-center justify-center rounded-b-4xl backdrop-blur-sm">
        <p className="text-p-md sm:text-title-md text-foreground text-center font-bold uppercase">
          {info.title}
        </p>
      </div>
    </Link>
  );
}
