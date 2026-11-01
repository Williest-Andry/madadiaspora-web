import { Album } from "@/interfaces/album/album-types";
import { getImageOrFallback } from "@/lib/get-image-url";
import Image from "next/image";

type AlbumSideProps = {
  upImage: Album;
  downImage: Album;
};

export default function AlbumSide({ upImage, downImage }: AlbumSideProps) {
  const upAlbum = getImageOrFallback(upImage.cover);
  const downAlbum = getImageOrFallback(downImage.cover);

  return (
    <figure className="flex flex-col gap-[20px]">
      <div className="relative h-[354px] w-[299px] rounded-[48px] min-[109.375rem]:h-[454px] min-[109.375rem]:w-[399px]">
        <Image
          src={upAlbum.image}
          alt={upAlbum.alt}
          fill
          className="rounded-[48px] object-cover"
        />
      </div>

      <div className="relative h-[600px] w-[299px] rounded-[48px] min-[109.375rem]:h-[700px] min-[109.375rem]:w-[399px]">
        <Image
          src={downAlbum.image}
          alt={downAlbum.alt}
          fill
          className="rounded-[48px] object-cover"
        />
      </div>
    </figure>
  );
}
