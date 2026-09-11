import AlbumCenter from "./album-center";
import AlbumSide from "./album-side";

export default function AlbumSection() {
  return (
    <figure className="hidden gap-[20px] xl:flex">
      <AlbumSide upImage="/maki.jpg" downImage="/album-baoba-taxi.jpg" />
      <AlbumCenter />
      <AlbumSide
        upImage="/album-baobab.jpg"
        downImage="/album-womens-children.jpg"
      />
    </figure>
  );
}
