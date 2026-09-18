import { useAblum } from "@/hooks/album/use-album";
import AlbumCenter from "./album-center";
import AlbumSide from "./album-side";
import { Album, AlbumParams } from "@/interfaces/album/album-types";

type AlbumSectionProps = {
  album: Album[];
};

export default function AlbumSection({ album }: AlbumSectionProps) {
  const leftImages = {
    up: album[0],
    down: album[1],
  };

  const centerImages = {
    leftUpImage: album[2],
    rightUpImage: album[3],
    centerDownImage: album[4],
  };

  const rightImages = {
    up: album[5],
    down: album[6],
  };

  return (
    <figure className="hidden gap-[20px] xl:flex">
      <AlbumSide upImage={leftImages.up} downImage={leftImages.down} />
      <AlbumCenter
        leftUpImage={centerImages.leftUpImage}
        rightUpImage={centerImages.rightUpImage}
        centerDownImage={centerImages.centerDownImage}
      />
      <AlbumSide upImage={rightImages.up} downImage={rightImages.down} />
    </figure>
  );
}
