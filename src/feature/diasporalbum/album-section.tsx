import AlbumLeft from "./album-left";
import AlbumRight from "./album-right";
import AlbumCenter from "./album-center";

export default function AlbumSection() {
  return (
    <figure className="hidden gap-[20px] xl:flex">
      <AlbumLeft />
      <AlbumCenter />
      <AlbumRight />
    </figure>
  );
}
