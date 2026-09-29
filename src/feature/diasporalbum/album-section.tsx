import { useAblum } from "@/hooks/album/use-album";
import AlbumCenter from "./album-center";
import AlbumSide from "./album-side";
import { Album, AlbumParams } from "@/interfaces/album/album-types";

type AlbumSectionProps = {
  album?: Album[];
  showCTAButton?: boolean;
};

export default function AlbumSection({
  album,
  showCTAButton = true,
}: AlbumSectionProps) {
  // const leftImages = {
  //   up: album[0],
  //   down: album[1],
  // };

  // const centerImages = {
  //   leftUpImage: album[2],
  //   rightUpImage: album[3],
  //   centerDownImage: album[4],
  // };

  // const rightImages = {
  //   up: album[5],
  //   down: album[6],
  // };

  return (
    <figure className="hidden gap-[20px] xl:flex">
      {/* <AlbumSide upImage={leftImages.up} downImage={leftImages.down} /> */}
      <AlbumSide upImage={"/maki.jpg"} downImage={"/album-baoba-taxi.jpg"} />
      <AlbumCenter
        showCTAButton={showCTAButton}
        // leftUpImage={centerImages.leftUpImage}
        // rightUpImage={centerImages.rightUpImage}
        // centerDownImage={centerImages.centerDownImage}
      
      />
      {/* <AlbumSide upImage={rightImages.up} downImage={rightImages.down} /> */}
      <AlbumSide
        upImage={"/album-baobab.jpg"}
        downImage={"/album-womens-children.jpg"}
      />
    </figure>
  );
}
