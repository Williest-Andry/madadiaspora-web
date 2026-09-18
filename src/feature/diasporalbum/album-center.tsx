import Image from "next/image";
import MobileCTAButton from "@/components/mobile-cta-button";
import { Album } from "@/interfaces/album/album-types";
import { getAlbumFallback, getImageUrl } from "@/lib/get-image-url";

type AlbumCenterProps = {
  leftUpImage: Album;
  rightUpImage: Album;
  centerDownImage: Album;
};

export default function AlbumCenter({
  leftUpImage,
  rightUpImage,
  centerDownImage,
}: AlbumCenterProps) {
  return (
    <figure className="flex flex-col items-center justify-center">
      <MobileCTAButton className="mb-[60px] hidden xl:flex" />

      <figure className="flex gap-[20px]">
        <div className="relative h-[412px] w-[280px] rounded-[48px] min-[109.375rem]:h-[512.5px] min-[109.375rem]:w-[399px]">
          <Image
            src={getAlbumFallback(leftUpImage).image}
            alt={getAlbumFallback(leftUpImage).alt}
            fill
            className="rounded-[48px] object-cover"
          />
        </div>

        <div className="relative h-[412px] w-[280px] rounded-[48px] min-[109.375rem]:h-[512.5px] min-[109.375rem]:w-[399px]">
          <Image
            src={getAlbumFallback(rightUpImage).image}
            alt={getAlbumFallback(rightUpImage).alt}
            fill
            className="rounded-[48px] object-cover"
          />
        </div>
      </figure>

      <div className="relative mt-[20px] h-[412px] w-[518px] rounded-[48px] min-[109.375rem]:h-[512.5px] min-[109.375rem]:w-[818px]">
        <Image
          src={getAlbumFallback(centerDownImage).image}
          alt={getAlbumFallback(centerDownImage).alt}
          fill
          className="rounded-[48px] object-cover"
        />
      </div>
    </figure>
  );
}
