import Image from "next/image";
import MobileCTAButton from "@/components/mobile-cta-button";
import { Album } from "@/interfaces/album/album-types";
import { cn } from "@/lib/utils";
import { getImageOrFallback } from "@/lib/get-image-url";

type AlbumCenterProps = {
  leftUpImage: Album;
  rightUpImage: Album;
  centerDownImage: Album;
  showCTAButton?: boolean;
};

export default function AlbumCenter({
  leftUpImage,
  rightUpImage,
  centerDownImage,
  showCTAButton = true,
}: AlbumCenterProps) {
  const leftUp = getImageOrFallback(leftUpImage.cover);
  const rightUp = getImageOrFallback(rightUpImage.cover);
  const centerDown = getImageOrFallback(centerDownImage.cover);

  const IMAGE_CONTAINER_STYLE = cn(
    "relative w-[280px] rounded-[48px] min-[109.375rem]:w-[399px]",
    showCTAButton
      ? "h-[412px] min-[109.375rem]:h-[512.5px]"
      : "h-[477px] min-[109.375rem]:h-[577px]"
  );

  const IMAGE_STYLE = "rounded-[48px] object-cover";

  return (
    <figure className="flex flex-col items-center justify-center">
      {showCTAButton && (
        <MobileCTAButton className="mb-[60px] hidden xl:flex" />
      )}

      <figure className="flex gap-[20px]">
        <div className={IMAGE_CONTAINER_STYLE}>
          <Image
            src={leftUp.image}
            alt={leftUp.alt}
            fill
            className={IMAGE_STYLE}
          />
        </div>

        <div className={IMAGE_CONTAINER_STYLE}>
          <Image
            src={centerDown.image}
            alt={centerDown.alt}
            fill
            className={IMAGE_STYLE}
          />
        </div>
      </figure>

      <div
        className={cn(
          "relative mt-[20px] w-[518px] rounded-[48px] min-[109.375rem]:w-[818px]",
          showCTAButton
            ? "h-[412px] min-[109.375rem]:h-[512.5px]"
            : "h-[477px] min-[109.375rem]:h-[577px]"
        )}
      >
        <Image
          src={rightUp.image}
          alt={rightUp.alt}
          fill
          className={IMAGE_STYLE}
        />
      </div>
    </figure>
  );
}
