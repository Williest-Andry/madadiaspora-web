import { Album } from "@/interfaces/album/album-types";
import { getAlbumFallback } from "@/lib/get-image-url";
import Image from "next/image";

type AlbumSideProps = {
  upImage: Album;
  downImage: Album;
};

export default function AlbumSide({ upImage, downImage }: AlbumSideProps) {
  return (
    <figure className="flex flex-col gap-[20px]">
      <div className="relative h-[354px] w-[299px] rounded-[48px] min-[109.375rem]:h-[454px] min-[109.375rem]:w-[399px]">
        <Image
          src={getAlbumFallback(upImage).image}
          alt={getAlbumFallback(upImage).alt}
          fill
          className="rounded-[48px] object-cover"
        />
      </div>

      <div className="relative h-[600px] w-[299px] rounded-[48px] min-[109.375rem]:h-[700px] min-[109.375rem]:w-[399px]">
        <Image
          src={getAlbumFallback(downImage).image}
          alt={getAlbumFallback(downImage).alt}
          fill
          className="rounded-[48px] object-cover"
        />
      </div>
    </figure>
  );
}
